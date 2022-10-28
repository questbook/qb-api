import { BigNumber, ethers } from 'ethers'
import { CHAIN_INFO } from '../configs/chains'
import { getSupportedChainIdFromSupportedNetwork } from './chainUtils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTokenDetails = (value: string, reward: any, chain: string) => {
	return ethers.utils.formatUnits(
		value,
		reward?.token && reward?.token?.label
			? reward.token.decimal
			: CHAIN_INFO[
				getSupportedChainIdFromSupportedNetwork(
					chain,
				)
			].supportedCurrencies[reward.asset.toLowerCase()].decimal,
	)
}

export const getTotalValue = (values: string[]) => {
	let val = BigNumber.from(0)
	values.forEach((value) => {
		val = val.add(value)
	})
	return val.toString()
}
