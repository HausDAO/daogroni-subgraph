module.exports.config = {
  mainnet: {
    dataSources: [],
    templates: [],
  },
  "arbitrum-one": {
    dataSources: [],
    templates: [],
  },
  celo: {
    dataSources: [],
    templates: [],
  },
  kovan: {
    dataSources: [],
    templates: [],
  },
  xdai: {
    dataSources: [
      {
        name: "daogroni",
        template: "daogroni-ds.yaml",
        address: "0x1d0f5D1f5E1FB74a86c19309368D434E9f7BB608",
        startBlock: 20726647,
      },
    ],
    templates: [],
  },
  rinkeby: {
    dataSources: [],
    templates: [],
  },
  matic: {
    dataSources: [],
    templates: [],
  },
};
