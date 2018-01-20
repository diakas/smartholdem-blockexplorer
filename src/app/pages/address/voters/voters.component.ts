import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../../../shared/services/explorer.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Account } from '../../../models/account.model';
import { Observable } from 'rxjs/Observable';
import { LoadAccountsResult } from '../../../components/address-table/address-table.component';

@Component({
  templateUrl: './voters.component.html',
  styleUrls: ['../address.component.less'],
  providers: [ExplorerService]
})
export class VotersComponent implements OnInit {

  public voters: Account[] = [];
  public account: Account;
  public areVotersVisible = true;
  public totalVoteBalance: number;

  constructor(private _explorerService: ExplorerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const currentAddress = params['id'];

      this._explorerService.getAccount(currentAddress).subscribe(res => {
        this.account = res.account

        this._explorerService.getDelegate(this.account.publicKey).subscribe(res => {
          this.account.delegate = res

          this._explorerService.getDelegateVoters(this.account.publicKey).subscribe(res => {
            this.account.voters = res
            if (!this.account.voters) {
              this.account.voters = [];
            }

            this.voters = this.account.voters.sort((one, two) => two.balance - one.balance);
            this.totalVoteBalance = this.voters.reduce((pv, nv) => Number(pv) + Number(nv.balance), 0);
            // set to false and then to true again, so the address table is re-rendered
            this.areVotersVisible = false;
            window.setTimeout(() => this.areVotersVisible = true);
          });
        });
      });
    });
  }

  public getVoters = (pageSize: number, offset: number, loadAll?: boolean): Observable<LoadAccountsResult> => {
    return Observable.of({
      success: true,
      accounts: loadAll ? this.voters : this.voters.slice(offset, offset + pageSize),
      isLast: loadAll || ((offset + pageSize) >= this.voters.length)
    });
  };
}
