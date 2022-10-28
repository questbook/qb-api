import { Request, Response } from 'express'
import { CHAIN_INFO } from '../../src/configs/chains'
import { init } from '../../src/utils/db'

async function check(req: Request, res: Response) {
	const { chain, from, to } = req.body
	if(chain === undefined) {
		res.status(400).json({ 'Error': 'Missing chain' })
	} else if(typeof chain !== 'string') {
		res.status(401).json({ 'Error': 'Invalid chain' })
	} else if(CHAIN_INFO[chain] === undefined) {
		res.status(402).json({ 'Error': 'Unsupported chain' })
	} else {
		console.log(chain, from, to)
		const ret = await init()
		console.log(ret)
		res.status(200).json({ 'Success': 'Success' })
	}
}

export default check