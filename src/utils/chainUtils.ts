import { CHAIN_INFO } from '../configs/chainInfo'
import { SupportedChainId } from '../configs/chains'
import { OnChainEvent } from '../configs/events'
import { SupportedNetwork } from '../generated/graphql'

const getSupportedChainIdFromSupportedNetwork = (chainId: SupportedNetwork) => {
	if(chainId === SupportedNetwork.Chain_4) {
		return SupportedChainId.RINKEBY
	}

	if(chainId === SupportedNetwork.Chain_80001) {
		return SupportedChainId.POLYGON_MUMBAI
	}

	if(chainId === SupportedNetwork.Chain_137) {
		return SupportedChainId.POLYGON_MAINNET
	}

	if(chainId === SupportedNetwork.Chain_10) {
		return SupportedChainId.OPTIMISM_MAINNET
	}

	if(chainId === SupportedNetwork.Chain_44787) {
		return SupportedChainId.CELO_ALFAJORES_TESTNET
	}

	// @TODO: needs type for harmony
	// if (chainId === SupportedNetwork.Chain_80001) {
	//   return SupportedChainId.HARMONY_TESTNET;
	// }
	return SupportedChainId.HARMONY_TESTNET
	// cannot return undefined ?
	// return undefined;
}

const getNetworkName = (chain: string[]) => {
	return CHAIN_INFO[getSupportedChainIdFromSupportedNetwork(chain[0] as SupportedNetwork)].name
}

const getRewardToken = (reward: any, chainId: SupportedChainId) => {
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