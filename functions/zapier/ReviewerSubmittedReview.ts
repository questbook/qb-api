import { Request, Response } from 'express'
import { CHAIN_INFO } from '../../src/configs/chains'
import { work } from '../../src/utils/work'
import { ethers } from 'ethers'

async function reviewerSubmittedReview(req: Request, res: Response) {
	const { grantId, chain } = req.body
	if(chain === undefined) {
		res.status(400).json({ error: 'Missing chain' })
	} else if(typeof chain !== 'string') {
		res.status(401).json({ error: 'Invalid chain' })
	} else if(CHAIN_INFO[chain] === undefined) {
		res.status(402).json({ error: 'Unsupported chain' })
	} else if(grantId === undefined) {
		res.status(403).json({ error: 'Missing grantId' })
	} else if(ethers.utils.isAddress(grantId) === false) {
		res.status(404).json({ error: 'Invalid grantId' })
	} else {
		try {
			const data = await work('ReviewerSubmittedReview', chain, { grantId })
			res.status(200).json(data)
		} catch(e) {
			res.status(500).json({ error: e })
		}
	}
}

export default reviewerSubmittedReview