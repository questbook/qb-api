import AWS from "aws-sdk";
import bodyParser from "body-parser";
import express, {Request, Response} from "express";
import serverless from "serverless-http";
import applicationUpdate from "./functions/ApplicationUpdate";
import daoCreated from "./functions/DaoCreated";
import fundSent from "./functions/FundSent";
import grantAppliedTo from "./functions/GrantAppliedTo";
import grantCreated from "./functions/GrantCreated";
import reviewerInvitedToDao from "./functions/ReviewerInvitedToDAO";
import reviewerSubmittedReview from "./functions/ReviewerSubmittedReview";
import { OnChainEvent } from "./src/configs/events";

const app = express();

// app.use(express.json());
app.use(bodyParser.json());

app.post("/zapier/v1/:event", async function (req: Request, res: Response) {
  const event = OnChainEvent[req.params.event];
  if (event === undefined) res.status(400).send("Invalid event");
  else {
    switch(event) {
      case OnChainEvent.DaoCreated:
        daoCreated(req, res);
        break

      case OnChainEvent.GrantCreated:
        grantCreated(req, res);
        break

      case OnChainEvent.GrantAppliedTo:
        grantAppliedTo(req, res);
        break

      case OnChainEvent.ApplicationUpdate:
        applicationUpdate(req, res);
        break

      case OnChainEvent.FundSent:
        fundSent(req, res);
        break

      case OnChainEvent.ReviewerInvitedToDao:
        reviewerInvitedToDao(req, res);
        break

      case OnChainEvent.ReviewerSubmittedReview:
        reviewerSubmittedReview(req, res);
        break

      default:
        res.status(400).json("Event not handled yet!");
    }
  }
})

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app)
