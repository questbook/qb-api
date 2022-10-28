import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'
import serverless from 'serverless-http'
import applicationUpdate from './functions/ApplicationUpdate'
import daoCreated from './functions/DaoCreated'
import fundSent from './functions/FundSent'
import grantAppliedTo from './functions/GrantAppliedTo'
import grantCreated from './functions/GrantCreated'
import reviewerInvitedToDao from './functions/ReviewerInvitedToDAO'
import reviewerSubmittedReview from './functions/ReviewerSubmittedReview'

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

	} else if(event === 'check') {

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
