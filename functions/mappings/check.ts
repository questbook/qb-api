import { Request, Response } from 'express'
import { doesMappingExist } from '../../src/utils/db'

async function check(req: Request, res: Response) {
	const { id, from, to } = req.body
	if(id === undefined) {
		res.status(400).json({ 'Error': 'Missing ID' })
	} else if(typeof id !== 'string') {
		res.status(401).json({ 'Error': 'Invalid ID' })
	} else if(from === undefined) {
		res.status(403).json({ 'Error': 'Missing \'from\'' })
	} else if(typeof from !== 'string') {
		res.status(404).json({ 'Error': 'Invalid \'from\'' })
	} else if(to === undefined) {
		res.status(405).json({ 'Error': 'Missing \'to\'' })
	} else if(typeof to !== 'string') {
		res.status(406).json({ 'Error': 'Invalid \'to\'' })
	} else {
		console.log(id, from, to)
		const ret = await doesMappingExist(id, from, to)
		console.log(ret)
		res.status(200).json({ 'Success': 'Success' })
	}
}

export default check