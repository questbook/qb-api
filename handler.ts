import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import serverless from "serverless-http";
import check from "./functions/mappings/check";
import create from "./functions/mappings/create";
import proposalUpdated from "./functions/zapier/ProposalUpdated";
import payoutStatus from "./functions/zapier/PayoutStatus";
import proposalSubmitted from "./functions/zapier/ProposalSubmitted";
import reviewerSubmittedReview from "./functions/zapier/ReviewerSubmittedReview";
import { ZapierEvent } from "./src/types";
import { CHAIN_INFO } from "./src/configs/chains";
import fetch from 'cross-fetch'

const app = express();

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
  "Content-Type": "application/json", // this shows the expected content type
};

app.options("/*", (_, res) => {
  res.set(headers);
  res.sendStatus(200);
});

// app.use(express.json());
app.use(bodyParser.json());

app.post("/zapier/v1/:chain/:event", async (req: Request, res: Response) => {
  const { chain, event } = req.params;

  if (event === undefined || (event as ZapierEvent) === undefined) {
    res.status(400).json({ error: "Invalid event" });
  } else if (CHAIN_INFO[chain] === undefined) {
    res.status(400).json({ error: "Unsupported chain" });
  } else {
    res.set(headers);
    switch (event as ZapierEvent) {
      case "ProposalSubmitted":
        proposalSubmitted(req, res);
        break;

      case "ProposalUpdated":
        proposalUpdated(req, res);
        break;

      case "PayoutStatus":
        payoutStatus(req, res);
        break;

      case "ReviewerSubmittedReview":
        reviewerSubmittedReview(req, res);
        break;

      default:
        res.status(400).json("Event not handled yet!");
    }
  }
});

app.get('/github/oauth', async(req: Request, res: Response) => {
  try{
  const requestToken = req.query.code
  const clientID = process.env.GITHUB_CLIENT_ID
  const clientSecret = process.env.GITHUB_CLIENT_SECRET
  
  const data = await fetch(`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
  {
    method: 'POST',
    headers: {
      accept: 'application/json'
    }
  })
  const response = await data.json()
  const accessToken = response.access_token
  return res.redirect(`https://questbook.app/?access_token=${accessToken}&builder_modal=true`)
} catch(e){
  console.log(e)
  return res.redirect('https://questbook.app/?builder_modal=true')
}
})

app.post("/mapping/:event", async (req: Request, res: Response) => {
  const { event } = req.params;

  res.set(headers);
  if (event === "create") {
    console.log("Here!");
    create(req, res);
  } else if (event === "check") {
    check(req, res);
  } else {
    res.status(400).json({ error: "Operation not supported" });
  }
});

app.use((req, res) => {
  res.set(headers);
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
