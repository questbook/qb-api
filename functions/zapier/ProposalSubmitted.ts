import { Request, Response } from 'express'
import { work } from '../../src/utils/work'

async function proposalSubmitted(req: Request, res: Response) {
	const { chain } = req.params
	const { grantId } = req.body
	if(grantId === undefined) {
		res.status(400).json({ error: 'Missing grantId' })
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