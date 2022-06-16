import 'dotenv/config'

export enum SupportedChainId {
  RINKEBY = 4,
  HARMONY_TESTNET = 1666700000,
  POLYGON_MUMBAI = 80001,
  POLYGON_MAINNET = 137,
  OPTIMISM_MAINNET = 10,
  CELO_ALFAJORES_TESTNET = 44787
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
	SupportedChainId,
).filter(
	(id) => typeof id === 'number'
    && ((process.env.IS_TEST === 'true'
      && (id === SupportedChainId.RINKEBY
        || id === SupportedChainId.HARMONY_TESTNET
        || id === SupportedChainId.POLYGON_MUMBAI))
      || process.env.IS_TEST === 'false' || !process.env.IS_TEST)
    && ((process.env.DISCOURSE_TEST === 'true'
      && id === SupportedChainId.HARMONY_TESTNET)
      || process.env.DISCOURSE_TEST === 'false' || !process.env.DISCOURSE_TEST),
) as SupportedChainId[]
