import { SupportedChainId } from '../configs/chains'

export default function getDomain(chainId: SupportedChainId) : string {
	if(chainId === SupportedChainId.HARMONY_TESTNET || chainId === SupportedChainId.RINKEBY || chainId === SupportedChainId.POLYGON_MUMBAI) {
		return 'https://beta.questbook.app'
	}

	return 'https://questbook.app'
}
