import { Request, Response } from 'express'
import { work } from '../../src/utils/work'
import { ethers } from 'ethers'

async function proposalSubmitted(req: Request, res: Response) {
	const { chain } = req.params
	const { grantId } = req.body
	if(grantId === undefined) {
		res.status(400).json({ error: 'Missing grantId' })
	} else if(ethers.utils.isAddress(grantId) === false) {
		res.status(400).json({ error: 'Invalid grantId' })
	} else {
		try {
			const data = await work('ProposalSubmitted', chain, { grantId })
			res.status(200).json(data)
		} catch(e) {
			res.status(500).json({ error: e })
		}
	}
}

export default proposalSubmitted