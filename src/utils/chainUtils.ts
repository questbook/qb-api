import { CHAIN_INFO } from '../configs/chains'

const getSupportedChainIdFromSupportedNetwork = (network: string) => {
	if(!network.includes('_')) {
		return undefined
	}

	const chainId = network.split('_')[1]
	if(CHAIN_INFO[chainId] === undefined) {
		return undefined
	}

	return chainId
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRewardToken = (reward: any, chainId: string) => {
	if(reward?.token && reward?.token?.label) {
		// console.log(reward.token)
		return reward.token.label
	} else {
		const token = CHAIN_INFO[chainId]['supportedCurrencies'][reward.asset.toLowerCase()]
		// console.log(token)
		return token.label
	}
}

const getKey = (type: string) => `${type}`

export { getSupportedChainIdFromSupportedNetwork, getRewardToken, getKey }