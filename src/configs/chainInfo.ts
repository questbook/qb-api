import { SupportedChainId } from './chains'

interface ChainInfo {
    readonly id: number;
    readonly name: string;
    readonly nativeCurrency: {
        name: string;
        symbol: string;
        decimal: number;
    };
    readonly explorer: {
        address: string;
        transactionHash: string;
    };
    readonly supportedCurrencies: {
        [address: string]: {
            label: string;
            address: string;
            decimal: number;
        };
    };
    readonly subgraphClientUrl: string;
    readonly rpcUrls: string[];
}

export type ChainInfoMap = { readonly [chainId: number]: ChainInfo };
export const CHAIN_INFO: ChainInfoMap = {
	[SupportedChainId.RINKEBY]: {
		id: SupportedChainId.RINKEBY,
		name: 'Rinkeby',
		nativeCurrency: {
			name: 'Rinkeby ETH',
			symbol: 'ETH',
			decimal: 18,
		},
		explorer: {
			address: 'https://rinkeby.etherscan.io/address/',
			transactionHash: 'https://rinkeby.etherscan.io/tx/',
		},
		supportedCurrencies: {
			'0xc7ad46e0b8a400bb3c915120d284aafba8fc4735': {
				label: 'DAI',
				address: '0xc7ad46e0b8a400bb3c915120d284aafba8fc4735',
				decimal: 18,
			},
			'0xc778417e063141139fce010982780140aa0cd5ab': {
				label: 'WETH',
				address: '0xc778417e063141139fce010982780140aa0cd5ab',
				decimal: 18,
			},
			'0xeb8f08a975ab53e34d8a0330e0d34de942c95926': {
				label: 'USDC',
				address: '0xeb8f08a975ab53e34d8a0330e0d34de942c95926',
				decimal: 6,
			},
		},
		subgraphClientUrl:
            'https://the-graph.questbook.app/subgraphs/name/qb-subgraph-rinkeby',
		rpcUrls: ['https://rinkeby.infura.io/v3/'],
	},
	[SupportedChainId.HARMONY_TESTNET]: {
		id: SupportedChainId.HARMONY_TESTNET,
		name: 'Harmony Testnet S0',
		nativeCurrency: {
			name: 'Harmony Testnet ONE',
			symbol: 'ONE',
			decimal: 18,
		},
		explorer: {
			address: 'https://explorer.pops.one/address/',
			transactionHash: 'https://explorer.pops.one/tx/',
		},
		supportedCurrencies: {
			'0x778fbd9df477b888534ebd84a3d2c9d5347bf149': {
				label: 'USDC',
				address: '0x778fbd9df477b888534ebd84a3d2c9d5347bf149',
				decimal: 6,
			},
			'0xc27255d7805fc79e4616d5cd50d6f4464aea75a3': {
				label: '1DAI',
				address: '0xc27255d7805fc79e4616d5cd50d6f4464aea75a3',
				decimal: 18,
			},
			'0x1e120b3b4af96e7f394ecaf84375b1c661830013': {
				label: '1ETH',
				address: '0x1e120b3b4af96e7f394ecaf84375b1c661830013',
				decimal: 18,
			},
		},
		subgraphClientUrl:
            'https://the-graph.questbook.app/subgraphs/name/qb-subgraph-harmony-testnet',
		rpcUrls: ['https://api.s0.b.hmny.io'],
	},
	[SupportedChainId.POLYGON_MUMBAI]: {
		id: SupportedChainId.POLYGON_MUMBAI,
		name: 'Polygon Testnet',
		nativeCurrency: {
			name: 'Matic Token',
			symbol: 'MATIC',
			decimal: 18,
		},
		explorer: {
			address: 'https://mumbai.polygonscan.com/address/',
			transactionHash: 'https://mumbai.polygonscan.com/tx/',
		},
		supportedCurrencies: {
			'0x9c3c9283d3e44854697cd22d3faa240cfb032889': {
				label: 'WMATIC',
				address: '0x9c3c9283d3e44854697cd22d3faa240cfb032889',
				decimal: 18,
			},
			'0xe6b8a5cf854791412c1f6efc7caf629f5df1c747': {
				label: 'USDC',
				address: '0xe6b8a5cf854791412c1f6efc7caf629f5df1c747',
				decimal: 6,
			},
		},
		subgraphClientUrl:
            'https://the-graph.questbook.app/subgraphs/name/qb-subgraph-polygon-mumbai',
		rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
	},
	[SupportedChainId.POLYGON_MAINNET]: {
		id: SupportedChainId.POLYGON_MAINNET,
		name: 'Polygon Mainnet',
		nativeCurrency: {
			name: 'Matic Token',
			symbol: 'MATIC',
			decimal: 18,
		},
		explorer: {
			address: 'https://polygonscan.com/address/',
			transactionHash: 'https://polygonscan.com/tx/',
		},
		supportedCurrencies: {
			'0x8f3cf7ad23cd3cadbd9735aff958023239c6a063': {
				label: 'DAI',
				address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
				decimal: 18,
			},
			'0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270': {
				label: 'WMATIC',
				address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
				decimal: 18,
			},
			'0x7ceb23fd6bc0add59e62ac25578270cff1b9f619': {
				label: 'WETH',
				address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
				decimal: 18,
			},
			'0x2791bca1f2de4661ed88a30c99a7a9449aa84174': {
				label: 'USDC',
				address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
				decimal: 6,
			},
			'0xd6df932a45c0f255f85145f286ea0b292b21c90b': {
				label: 'AAVE',
				address: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
				decimal: 18,
			},
			'0x282d8efce846a88b159800bd4130ad77443fa1a1': {
				label: 'OCEAN',
				address: '0x282d8efce846a88b159800bd4130ad77443fa1a1',
				decimal: 18,
			},
			'0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f': {
				label: '1INCH',
				address: '0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f',
				decimal: 18,
			},
			'0x91c89a94567980f0e9723b487b0bed586ee96aa7': {
				label: 'BICO',
				address: '0x91c89a94567980f0e9723b487b0bed586ee96aa7',
				decimal: 18,
			},
			/**
       * verify if ANKR address is correct
       */
			// '0x1B30e875754aaD79A55929EcfC24f4bd1cd40C08': {
			//   icon: '/ui_icons/brand/currency/ankr_symbol.svg',
			//   label: 'ANKR',
			//   address: '0x1B30e875754aaD79A55929EcfC24f4bd1cd40C08',
			//   decimal: 18,
			// },
			'0x6c0ab120dbd11ba701aff6748568311668f63fe0': {
				label: 'APW',
				address: '0x6c0ab120dbd11ba701aff6748568311668f63fe0',
				decimal: 18,
			},
			'0x236ba47c763a8ee1a8f064e867d0751b1714fdf8': {
				label: 'BOBA',
				address: '0x236ba47c763a8ee1a8f064e867d0751b1714fdf8',
				decimal: 18,
			},
			'0xd10852df03ea8b8af0cc0b09cac3f7dbb15e0433': {
				label: 'FLUX',
				address: '0xd10852df03ea8b8af0cc0b09cac3f7dbb15e0433',
				decimal: 18,
			},
			'0x3962f4a0a0051dcce0be73a7e09cef5756736712': {
				label: 'LPT',
				address: '0x3962f4a0a0051dcce0be73a7e09cef5756736712',
				decimal: 18,
			},
			'0x62c4b802f2153a281dc87994427f606f561cc620': {
				label: 'SPR',
				address: '0x62c4b802f2153a281dc87994427F606f561Cc620',
				decimal: 18,
			},
			'0x980111ae1b84e50222c8843e3a7a038f36fecd2b': {
				label: 'STACK',
				address: '0x980111ae1b84e50222c8843e3a7a038f36fecd2b',
				decimal: 18,
			},
			'0x3066818837c5e6ed6601bd5a91b0762877a6b731': {
				label: 'UMA',
				address: '0x3066818837c5e6ed6601bd5a91b0762877a6b731',
				decimal: 18,
			},
			'0xb33eaad8d922b1083446dc23f610c2567fb5180f': {
				label: 'UNI',
				address: '0xb33eaad8d922b1083446dc23f610c2567fb5180f',
				decimal: 18,
			},
			'0xda537104d6a5edd53c6fbba9a898708e465260b6': {
				label: 'YFI',
				address: '0xda537104d6a5edd53c6fbba9a898708e465260b6',
				decimal: 18,
			},
			'0x9a06db14d639796b25a6cec6a1bf614fd98815ec': {
				label: 'ZKP',
				address: '0x9a06db14d639796b25a6cec6a1bf614fd98815ec',
				decimal: 18,
			},
		},
		subgraphClientUrl:
            'https://the-graph.questbook.app/subgraphs/name/qb-subgraph-polygon-mainnet',
		rpcUrls: ['https://polygon-rpc.com/'],
	},
	[SupportedChainId.OPTIMISM_MAINNET]: {
		id: SupportedChainId.OPTIMISM_MAINNET,
		name: 'Optimism Mainnet',
		nativeCurrency: {
			name: 'Optimism ETH',
			symbol: 'ETH',
			decimal: 18,
		},
		explorer: {
			address: 'https://optimistic.etherscan.io/address/',
			transactionHash: 'https://optimistic.etherscan.io/tx/',
		},
		supportedCurrencies: {
			'0xda10009cbd5d07dd0cecc66161fc93d7c9000da1': {
				label: 'DAI',
				address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
				decimal: 18,
			},
			'0x4200000000000000000000000000000000000006': {
				label: 'WETH',
				address: '0x4200000000000000000000000000000000000006',
				decimal: 18,
			},
			'0x7f5c764cbc14f9669b88837ca1490cca17c31607': {
				label: 'USDC',
				address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
				decimal: 6,
			},
			'0x9e1028f5f1d5ede59748ffcee5532509976840e0': {
				label: 'PERP',
				address: '0x9e1028f5f1d5ede59748ffcee5532509976840e0',
				decimal: 18,
			},
			'0x8700daec35af8ff88c16bdf0418774cb3d7599b4': {
				label: 'SNX',
				address: '0x8700daec35af8ff88c16bdf0418774cb3d7599b4',
				decimal: 18,
			},
			'0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9': {
				label: 'sUSD',
				address: '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9',
				decimal: 18,
			},
		},
		subgraphClientUrl:
            'https://the-graph.questbook.app/subgraphs/name/qb-subgraph-optimism-mainnet',
		rpcUrls: ['https://mainnet.optimism.io/'],
	},
	[SupportedChainId.CELO_ALFAJORES_TESTNET]: {
		id: SupportedChainId.CELO_ALFAJORES_TESTNET,
		name: 'Celo Alfajores Testnet',
		nativeCurrency: {
			name: 'Celo',
			symbol: 'Celo',
			decimal: 18,
		},
		explorer: {
			address: 'https://alfajores-blockscout.celo-testnet.org/address/',
			transactionHash: 'https://alfajores-blockscout.celo-testnet.org/tx/',
		},
		supportedCurrencies: {
			'0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9': {
				label: 'CELO',
				address: '0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9',
				decimal: 18,
			},
			'0x874069fa1eb16d44d622f2e0ca25eea172369bc1': {
				label: 'cUSD',
				address: '0x874069fa1eb16d44d622f2e0ca25eea172369bc1',
				decimal: 18,
			},
		},
		subgraphClientUrl: 'https://the-graph.questbook.app/subgraphs/name/qb-subgraph-celo-alfajores-testnet',
		rpcUrls: ['https://alfajores-forno.celo-testnet.org'],
	},
}
