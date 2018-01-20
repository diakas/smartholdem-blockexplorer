import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ExplorerService } from '../../shared/services/explorer.service';
import { CurrencyService } from '../../shared/services/currency.service';
import { ConnectionMessageService } from '../../shared/services/connection-message.service';
import { initCurrency } from '../../shared/const/currency';
import {Transaction} from '../../models/transaction.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'sth-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.less'],
  providers: [ ExplorerService ]
})
export class TransactionComponent implements OnInit, OnDestroy {
  public transaction: Transaction;
  public currencyName: string = initCurrency.name;
  public currencyValue: number = initCurrency.value;

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _explorerService: ExplorerService,
    private _currencyService: CurrencyService,
    private _connectionService: ConnectionMessageService
  ) {
    this.subscription = _currencyService.currencyChosen$.subscribe(currency => {
      this.currencyName = currency.name;
      this.currencyValue = currency.value;
    });
   }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe((params: Params) => {
      this._explorerService.getTransaction(params['id']).subscribe(
        res => {
          this.transaction = res;
          this._connectionService.changeConnection(true);
        }
      );
    });
  }

  getAddressLink(id: string) {
    return ['/address', id];
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
