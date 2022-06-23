export interface ChainInfo {
	readonly id: number
	readonly name: string
	readonly isTestNetwork?: boolean
	readonly explorer: {
		address: string
		transactionHash: string
	}
	readonly supportedCurrencies: {
		[address: string]: {
			label: string
			address: string
			decimal: number
		}
	}
	readonly subgraphClientUrl: string
	readonly rpcUrls: string[]
}

export type ChainInfoMap = { readonly [chainId: string]: ChainInfo }