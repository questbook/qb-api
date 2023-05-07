# Introduction

This repository contains the code for the Questbook API endpoint (https://api.questbook.app) built using the Serverless framework. There are two types of endpoints:

1. `/zapier/v1/:chain/:event` - Designed specifically for the Questbook Zapier App.
2. `/mappings/:event` - Used to map email IDs to in-app wallet addresses.

## How to Run Locally

1. Clone the repository.
2. Run `yarn` to install all the packages.
3. Run `sls offline` and wait for the TypeScript to compile.
4. The API is ready to be tested.

## Endpoint Information

### `/zapier/v1/:chain/:event`

- `chain`: Can take up values 5 (Goerli), 42220 (Celo), 137 (Polygon), or 10 (Optimism). It specifies which subgraph to query. Any other value would return an error.
- `event`: Can take the following values:
  - `ProposalSubmitted`: Queries the subgraph to list proposals submitted in the last 24 hours.
  - `ProposalUpdated`: Queries the subgraph to list proposals updated in the last 24 hours.
  - `PayoutStatus`: Queries the subgraph to list fund transfers initiated or updated in the last 24 hours.
  - `ReviewerSubmittedReview`: Queries the subgraph to list reviews submitted in the last 24 hours.

### `/mappings/:event`

- `event`: Can be either `check` or `create`.
  - `check`: Confirms if there exists a mapping from an in-app wallet address to any email address.
  - `create`: Inserts a new mapping into the database if a mapping does not exist.

## How to Add a New Endpoint/Event for Zapier Integration

1. Under `src/graphql`, create a new `.graphql` file describing the query to be executed upon calling the endpoint.
2. Run `yarn generate`. The `src/generated/graphql.ts` file should be modified to contain the types for the above query.
3. Add the relevant type string for the new `event` in `src/types/index.ts`.
4. Inside `functions/zapier`, create a new `.ts` file with the name of the event.
5. Check the formatting of the data received in the request body inside the `.ts` file, and call the function `work` defined in `src/utils/work.ts`.
6. Modify two files:
   1. In `src/utils/fetchData.ts`, add the case for the newly introduced event in the `switch-case` block and specify the `Apollo.DocumentNode` to be called for the new event. Import the `Apollo.DocumentNode` from `src/generated/graphql.ts`. It should be the same one generated in step 2.
   2. In `src/utils/dataFormat.ts`, modify the `switch-case` block in a similar fashion to specify the formatting function to be applied to the data returned by the query specified in the above step.
7. You are good to go.

**Tip**: If you receive a response like `{'error': {}}` upon querying an endpoint, check the formatting function. You might be trying to access non-existent items in the query.

## About the .env File

```
TABLE_NAME=<Name of the AWS Dynamo DB Table that stores the mappings>
INFURA_ID=<ID of the Infura App. Needed when decoding the transaction while creating a new mapping>
```