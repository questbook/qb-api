import { Request, Response } from 'express'
import { doesMappingExist } from '../../src/utils/db'

async function check(req: Request, res: Response) {
	const { id, from, to } = req.body
	if(id === undefined) {
		res.status(400).json({ error: 'Missing ID', value: false })
	} else if(typeof id !== 'string') {
		res.status(400).json({ error: 'Invalid ID', value: false })
	} else if(from === undefined) {
		res.status(400).json({ error: 'Missing \'from\'', value: false })
	} else if(typeof from !== 'string') {
		res.status(400).json({ error: 'Invalid \'from\'', value: false })
	} else if(to === undefined) {
		res.status(400).json({ error: 'Missing \'to\', value: false' })
	} else if(typeof to !== 'string') {
		res.status(400).json({ error: 'Invalid \'to\'', value: false })
	} else {
		const ret = await doesMappingExist(id, from, to)
		if(ret.error) {
			res.status(500).json(ret)
		} else {
			res.status(200).json(ret)
		}
	}
}

export default check