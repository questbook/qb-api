import fetch from 'cross-fetch'

const IPFS_DOWNLOAD_ENDPOINT = 'https://api.thegraph.com/ipfs/api/v0/cat'

const getFromIPFS = async(hash: string): Promise<string> => {
	try {
		const fetchResult = await fetch(`${IPFS_DOWNLOAD_ENDPOINT}?arg=${hash}`)
		const responseBody = await fetchResult.text()
		return responseBody
	} catch(e) {
		console.log(e)
	}

	// fallback
	try {
		const fetchResult = await fetch(`https://ipfs.io/ipfs/${hash}`)
		const responseBody = await fetchResult.text()
		return responseBody
	} catch(e) {
		console.log(e)
	}

	return ''
}

export default getFromIPFS
