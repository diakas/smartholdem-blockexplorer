export const CONFIG = {
    NETWORK: 'DEVNET',

    NETWORKS: {
      MAINNET: {
        NODE: 'https://node0.smartholdem.io/api',
        NETHASH: 'fc46bfaf9379121dd6b09f5014595c7b7bd52a0a6d57c5aff790b42a73c76da7',
        CURRENCIES: ['STH'],
        KNOWN_ADDRESSES: {
          'SVx2j3NdZbDLfZ9HWS57NvqYg4c9grQLnx' : 'BOUNTY',
          'STQK9x2xzfM54n3cACrNahiq5CaWB2HwqR' : 'DEV FUND',
          'SUeGCt31AHwTZVcfZQwpPVL4jEUCtMMDTg' : 'DEV FUND OLD',
          'SU32qNJaBFGBgWhzkhwfGN2nExXYhtDCXU' : 'TOURNAMENT FUND',
          'SZjrWHZncQpJjvHzGqrnMWcm5yCgYhMMvB' : 'NODES FUND',
          'STkW1XN3LGn8R3FStMpboNXZugDb6Aq67E' : 'EXCHANGE FUND',
          'SU1znm5azz52GUdvXf7r7RdcR667WMCLMf' : 'COMMUNITY FUND',
        },
        PROPERTIES: [
          'DISABLE_PRICE_API',
        ],
      },
      DEVNET: {
        NODE: 'https://nodedev.smartholdem.io/api',
        NETHASH: '3a6d2bec6798dedea99a1e6c64120a3876781b85e46bb75908aba07ffda61360',
        CURRENCIES: ['STH'],
        KNOWN_ADDRESSES: {
          'DBgBaNGaupUkxNWdcsUYybP9ayLmyxxBe8' : 'GENESIS',
          'D5J8jXPEQai3oQJha3LFRH1U9i9Pp6W2PN' : 'DEV FAUCET'
        },
        PROPERTIES: [
          'DISABLE_PRICE_API',
        ],
      }
    },
};
