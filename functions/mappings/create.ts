import sha256 from 'crypto-js/sha256'
import { ethers } from 'ethers'
import { Request, Response } from 'express'
import ABI from '../../abi/Communication.json'
import { CHAIN_INFO } from '../../src/configs/chains'
import { Data, Mapping } from '../../src/types/mapping'
import { createMapping, doesMappingExist } from '../../src/utils/db'

async function decodeTransaction(chainId: number, txHash: string) {
	let provider: ethers.providers.BaseProvider
	if(chainId === 5) {
		provider = ethers.getDefaultProvider('goerli')
	} else if(chainId === 10) {
		provider = ethers.getDefaultProvider('optimism')
	} else if(chainId === 137) {
		provider = ethers.getDefaultProvider('matic')
	} else if(chainId === 42220) {
		provider = new ethers.providers.JsonRpcProvider('https://forno.celo.org')
	} else {
		return { error: 'Invalid chain ID' }
	}

	const tx = await provider.getTransactionReceipt(txHash)

	const iface = new ethers.utils.Interface(ABI)

	try {
		let data: Data = { error: 'No event found' }
		for(const log of tx.logs) {
			const event = iface.parseLog(log)
			if(event.name === 'EmailAdded') {
				data = {
					chainId: event.args.chainId.toNumber(),
					emailHash: event.args.emailHash,
					message: event.args.message,
					sender: event.args.sender,
					timestamp: event.args.timestamp.toNumber(),
				}
				break
			}
		}

		return data
	} catch(e) {
		return { error: `Some error occurred - ${e}` }
	}
}

async function isValid(
	chainIdFromAPI: number,
	senderFromAPI: string,
	email: string,
	txHash: string,
	walletAddress: string
): Promise<Mapping> {
	if(!(chainIdFromAPI in CHAIN_INFO)) {
		return { error: 'Chain ID not supported', value: false }
	}

	const ret = await decodeTransaction(chainIdFromAPI, txHash)
	if(ret.error) {
		return {
			error: `Could not decode transaction: ${ret.error}`,
			value: false,
		}
	}

	console.log(ret)

	const { chainId, emailHash, sender, message, timestamp } = ret
	if(!emailHash || !chainId || !sender || !message || !timestamp) {
		return { error: 'Could not decode transaction', value: false }
	}

	if(chainId !== chainIdFromAPI) {
		return { error: 'Chain ID mismatch', value: false }
	} else if(sender !== senderFromAPI) {
		return { error: 'Sender mismatch', value: false }
	}

	const digest = sha256(email).toString()

	if(digest !== emailHash) {
		return { error: 'Emails do not match', value: false }
	}

	try {
		const from = ethers.utils.verifyMessage(email, message)

		if(from !== walletAddress) {
			return { error: 'Message not signed by the correct wallet', value: false }
		}
	} catch(e) {
		return { error: e, value: false }
	}

	return { value: true }
}

async function create(req: Request, res: Response) {
	const { id, chainId, wallet, transactionHash, from, to } = req.body
	console.log(req.body)
	if(id === undefined) {
		res.status(400).json({ 'Error': 'Missing ID' })
	} else if(typeof id !== 'string') {
		res.status(401).json({ 'Error': 'Invalid ID' })
	} else if(chainId === undefined) {
		res.status(402).json({ 'Error': 'Missing chain ID' })
	} else if(typeof chainId !== 'number') {
		res.status(403).json({ 'Error': 'Invalid chain ID' })
	} else if(wallet === undefined) {
		res.status(404).json({ 'Error': 'Missing \'wallet\'' })
	} else if(typeof wallet !== 'string') {
		res.status(405).json({ 'Error': 'Invalid \'wallet\'' })
	} else if(transactionHash === undefined) {
		res.status(406).json({ 'Error': 'Missing \'transactionHash\'' })
	} else if(typeof transactionHash !== 'string') {
		res.status(407).json({ 'Error': 'Invalid \'transactionHash\'' })
	} else if(wallet === undefined) {
		res.status(408).json({ 'Error': 'Missing \'wallet\'' })
	} else if(typeof wallet !== 'string') {
		res.status(409).json({ 'Error': 'Invalid \'wallet\'' })
	} else if(from === undefined) {
		res.status(410).json({ 'Error': 'Missing \'from\'' })
	} else if(typeof from !== 'string') {
		res.status(411).json({ 'Error': 'Invalid \'from\'' })
	} else if(to === undefined) {
		res.status(412).json({ 'Error': 'Missing \'to\'' })
	} else if(typeof to !== 'string') {
		res.status(413).json({ 'Error': 'Invalid \'to\'' })
	} else {
		const exists = await doesMappingExist(id, from, to)
		console.log(exists)
		if(exists) {
			res.status(200).json({ 'Success': 'Mapping exists' })
		} else {
		    let ret = await isValid(chainId, from, to, transactionHash, wallet)
			// res.status(200).json(ret)
			if(ret) {
				ret = await createMapping(id, from, to)
				if(ret?.error) {
					res.status(500).json({ 'Error': ret?.error })
				} else {
					res.status(200).json({ 'Success': 'Success' })
				}
			} else {
				res.status(500).json({ 'Error': ret?.error })
			}
		}
	}
}

export default create