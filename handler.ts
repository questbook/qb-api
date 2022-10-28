import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'
import serverless from 'serverless-http'
import check from './functions/mappings/check'
import create from './functions/mappings/create'
import applicationUpdate from './functions/zapier/ApplicationUpdate'
import daoCreated from './functions/zapier/DaoCreated'
import fundSent from './functions/zapier/FundSent'
import grantAppliedTo from './functions/zapier/GrantAppliedTo'
import grantCreated from './functions/zapier/GrantCreated'
import reviewerInvitedToDao from './functions/zapier/ReviewerInvitedToDAO'
import reviewerSubmittedReview from './functions/zapier/ReviewerSubmittedReview'

const app = express()

// app.use(express.json());
app.use(bodyParser.json())

app.post('/zapier/v1/:event', async(req: Request, res: Response) => {
	const { event } = req.params
	if(event === undefined) {
		res.status(400).send('Invalid event')
	} else {
		switch (event) {
		case 'DaoCreated':
			daoCreated(req, res)
			break

		case 'GrantCreated':
			grantCreated(req, res)
			break

		case 'GrantAppliedTo':
			grantAppliedTo(req, res)
			break

		case 'ApplicationUpdate':
			applicationUpdate(req, res)
			break

		case 'FundSent':
			fundSent(req, res)
			break

		case 'ReviewerInvitedToDao':
			reviewerInvitedToDao(req, res)
			break

		case 'ReviewerSubmittedReview':
			reviewerSubmittedReview(req, res)
			break

		default:
			res.status(400).json('Event not handled yet!')
		}
	}
})

app.post('/mapping/:event', async(req: Request, res: Response) => {
	const { event } = req.params

	if(event === 'create') {
		console.log('Here!')
		create(req, res)
	} else if(event === 'check') {
		check(req, res)
	} else {
		res.status(400).json({ error: 'Operation not supported' })
	}
})

app.use((req, res,) => {
	return res.status(404).json({
		error: 'Not Found',
	})
})

export const handler = serverless(app)
