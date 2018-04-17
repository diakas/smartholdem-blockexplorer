export const CONFIG = {
    NETWORK: 'MAINNET',

    NETWORKS: {
      MAINNET: {
        NODE: 'https://node0.smartholdem.io/api',
        NETHASH: 'fc46bfaf9379121dd6b09f5014595c7b7bd52a0a6d57c5aff790b42a73c76da7',
        CURRENCIES: ['STH'],
        KNOWN_ADDRESSES: {
          'SVx2j3NdZbDLfZ9HWS57NvqYg4c9grQLnx' : 'BOUNTY',
          'STQK9x2xzfM54n3cACrNahiq5CaWB2HwqR' : 'DEV FUND',
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
        NETHASH: '0f468f4142e681666483c0a1923c821c8dc0ab6724c26c880c51935d36b9c3d4',
        CURRENCIES: ['DEV'],
        KNOWN_ADDRESSES: {
          'SUvkLFwWYjeuRggfU7j98r3vwRJ3s4wM44' : 'GENESIS',
        },
        PROPERTIES: [
          'DISABLE_PRICE_API',
        ],
      }
    },
};
