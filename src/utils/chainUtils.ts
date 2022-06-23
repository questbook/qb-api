import { CHAIN_INFO } from "../configs/chains"
import { OnChainEvent } from '../configs/events'

const getSupportedChainIdFromSupportedNetwork = (network: string) => {
	if (!network.includes('_')) return undefined
	const chainId = network.split('_')[1]
	if (CHAIN_INFO[chainId] === undefined) return undefined
	return chainId
}

const getNetworkName = (chain: string[]) => {
	const chainId = getSupportedChainIdFromSupportedNetwork(chain[0])
	return chainId ? CHAIN_INFO[chainId].name : ''
}

const getRewardToken = (reward: any, chainId: string) => {
	if(reward.token && reward.token.label) {
		// console.log(reward.token)
		return reward.token.label
	} else {
		const token = CHAIN_INFO[chainId]['supportedCurrencies'][reward.asset.toLowerCase()]
		// console.log(token)
		return token.label
	}
}

const getKey = (type: OnChainEvent) => `${type}`

export { getSupportedChainIdFromSupportedNetwork, getNetworkName, getRewardToken, getKey }