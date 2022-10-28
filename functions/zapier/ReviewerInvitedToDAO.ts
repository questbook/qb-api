import { Request, Response } from 'express'
import { CHAIN_INFO } from '../../src/configs/chains'
import { work } from '../../src/utils/work'

async function reviewerInvitedToDao(req: Request, res: Response) {
	const { workspaceId, chain } = req.body
	if(chain === undefined) {
		res.status(400).json({ error: 'Missing chain' })
	} else if(typeof chain !== 'string') {
		res.status(401).json({ error: 'Invalid chain' })
	} else if(CHAIN_INFO[chain] === undefined) {
		res.status(402).json({ error: 'Unsupported chain' })
	} else if(workspaceId === undefined) {
		res.status(403).json({ error: 'Missing workspaceId' })
	} else if(typeof workspaceId !== 'string') {
		res.status(404).json({ error: 'Invalid workspaceId' })
	} else {
		try {
			const data = await work('ReviewerInvitedToDao', chain, { workspaceId })
			res.status(200).json(data)
		} catch(e) {
			res.status(500).json({ error: e })
		}
	}
}

export default reviewerInvitedToDao