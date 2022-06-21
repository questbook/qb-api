import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: string;
};

/** the milestone of a grant application */
export type ApplicationMilestone = {
  __typename?: 'ApplicationMilestone';
  /** amount expected by applicant */
  amount: Scalars['BigInt'];
  /** amount paid by DAO */
  amountPaid: Scalars['BigInt'];
  /** The grant application this milestone belongs to */
  application: GrantApplication;
  /** Feedback from the grant DAO manager/applicant */
  feedbackDao?: Maybe<Scalars['String']>;
  /** Feedback from the developer */
  feedbackDev?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Current state of the milestone */
  state: MilestoneState;
  title: Scalars['String'];
  /** in seconds since epoch */
  updatedAtS?: Maybe<Scalars['Int']>;
};

export type ApplicationMilestone_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amountPaid?: InputMaybe<Scalars['BigInt']>;
  amountPaid_gt?: InputMaybe<Scalars['BigInt']>;
  amountPaid_gte?: InputMaybe<Scalars['BigInt']>;
  amountPaid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountPaid_lt?: InputMaybe<Scalars['BigInt']>;
  amountPaid_lte?: InputMaybe<Scalars['BigInt']>;
  amountPaid_not?: InputMaybe<Scalars['BigInt']>;
  amountPaid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  application?: InputMaybe<Scalars['String']>;
  application_contains?: InputMaybe<Scalars['String']>;
  application_contains_nocase?: InputMaybe<Scalars['String']>;
  application_ends_with?: InputMaybe<Scalars['String']>;
  application_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_gt?: InputMaybe<Scalars['String']>;
  application_gte?: InputMaybe<Scalars['String']>;
  application_in?: InputMaybe<Array<Scalars['String']>>;
  application_lt?: InputMaybe<Scalars['String']>;
  application_lte?: InputMaybe<Scalars['String']>;
  application_not?: InputMaybe<Scalars['String']>;
  application_not_contains?: InputMaybe<Scalars['String']>;
  application_not_contains_nocase?: InputMaybe<Scalars['String']>;
  application_not_ends_with?: InputMaybe<Scalars['String']>;
  application_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_not_in?: InputMaybe<Array<Scalars['String']>>;
  application_not_starts_with?: InputMaybe<Scalars['String']>;
  application_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  application_starts_with?: InputMaybe<Scalars['String']>;
  application_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao?: InputMaybe<Scalars['String']>;
  feedbackDao_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_gt?: InputMaybe<Scalars['String']>;
  feedbackDao_gte?: InputMaybe<Scalars['String']>;
  feedbackDao_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_lt?: InputMaybe<Scalars['String']>;
  feedbackDao_lte?: InputMaybe<Scalars['String']>;
  feedbackDao_not?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev?: InputMaybe<Scalars['String']>;
  feedbackDev_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_gt?: InputMaybe<Scalars['String']>;
  feedbackDev_gte?: InputMaybe<Scalars['String']>;
  feedbackDev_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_lt?: InputMaybe<Scalars['String']>;
  feedbackDev_lte?: InputMaybe<Scalars['String']>;
  feedbackDev_not?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  state?: InputMaybe<MilestoneState>;
  state_in?: InputMaybe<Array<MilestoneState>>;
  state_not?: InputMaybe<MilestoneState>;
  state_not_in?: InputMaybe<Array<MilestoneState>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAtS?: InputMaybe<Scalars['Int']>;
  updatedAtS_gt?: InputMaybe<Scalars['Int']>;
  updatedAtS_gte?: InputMaybe<Scalars['Int']>;
  updatedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtS_lt?: InputMaybe<Scalars['Int']>;
  updatedAtS_lte?: InputMaybe<Scalars['Int']>;
  updatedAtS_not?: InputMaybe<Scalars['Int']>;
  updatedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum ApplicationMilestone_OrderBy {
  Amount = 'amount',
  AmountPaid = 'amountPaid',
  Application = 'application',
  FeedbackDao = 'feedbackDao',
  FeedbackDev = 'feedbackDev',
  Id = 'id',
  State = 'state',
  Title = 'title',
  UpdatedAtS = 'updatedAtS'
}

export enum ApplicationState {
  Approved = 'approved',
  Completed = 'completed',
  Rejected = 'rejected',
  Resubmit = 'resubmit',
  Submitted = 'submitted'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type FundsTransfer = {
  __typename?: 'FundsTransfer';
  /** How much of the funds were allocated */
  amount: Scalars['BigInt'];
  /** Application for which the funds were released */
  application?: Maybe<GrantApplication>;
  /** Asset that was used in the funds transfer */
  asset: Scalars['Bytes'];
  /** in seconds since epoch */
  createdAtS: Scalars['Int'];
  /** Which grant were the funds transferred to/from */
  grant: Grant;
  id: Scalars['ID'];
  /** Milestone for which the funds were released */
  milestone?: Maybe<ApplicationMilestone>;
  /** Reviw for which the payment was done */
  review?: Maybe<Review>;
  /** Address of who released the funds */
  sender: Scalars['Bytes'];
  /** The address to which funds were sent */
  to: Scalars['Bytes'];
  /** What the type of funds transfer is */
  type: FundsTransferType;
};

export enum FundsTransferType {
  FundsDeposited = 'funds_deposited',
  FundsDisbursed = 'funds_disbursed',
  FundsWithdrawn = 'funds_withdrawn',
  ReviewPaymentDone = 'review_payment_done'
}

export type FundsTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  application?: InputMaybe<Scalars['String']>;
  application_contains?: InputMaybe<Scalars['String']>;
  application_contains_nocase?: InputMaybe<Scalars['String']>;
  application_ends_with?: InputMaybe<Scalars['String']>;
  application_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_gt?: InputMaybe<Scalars['String']>;
  application_gte?: InputMaybe<Scalars['String']>;
  application_in?: InputMaybe<Array<Scalars['String']>>;
  application_lt?: InputMaybe<Scalars['String']>;
  application_lte?: InputMaybe<Scalars['String']>;
  application_not?: InputMaybe<Scalars['String']>;
  application_not_contains?: InputMaybe<Scalars['String']>;
  application_not_contains_nocase?: InputMaybe<Scalars['String']>;
  application_not_ends_with?: InputMaybe<Scalars['String']>;
  application_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_not_in?: InputMaybe<Array<Scalars['String']>>;
  application_not_starts_with?: InputMaybe<Scalars['String']>;
  application_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  application_starts_with?: InputMaybe<Scalars['String']>;
  application_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['Bytes']>;
  asset_contains?: InputMaybe<Scalars['Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_not?: InputMaybe<Scalars['Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  grant?: InputMaybe<Scalars['String']>;
  grant_contains?: InputMaybe<Scalars['String']>;
  grant_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_ends_with?: InputMaybe<Scalars['String']>;
  grant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_gt?: InputMaybe<Scalars['String']>;
  grant_gte?: InputMaybe<Scalars['String']>;
  grant_in?: InputMaybe<Array<Scalars['String']>>;
  grant_lt?: InputMaybe<Scalars['String']>;
  grant_lte?: InputMaybe<Scalars['String']>;
  grant_not?: InputMaybe<Scalars['String']>;
  grant_not_contains?: InputMaybe<Scalars['String']>;
  grant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_not_ends_with?: InputMaybe<Scalars['String']>;
  grant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_not_in?: InputMaybe<Array<Scalars['String']>>;
  grant_not_starts_with?: InputMaybe<Scalars['String']>;
  grant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  grant_starts_with?: InputMaybe<Scalars['String']>;
  grant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  milestone?: InputMaybe<Scalars['String']>;
  milestone_contains?: InputMaybe<Scalars['String']>;
  milestone_contains_nocase?: InputMaybe<Scalars['String']>;
  milestone_ends_with?: InputMaybe<Scalars['String']>;
  milestone_ends_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_gt?: InputMaybe<Scalars['String']>;
  milestone_gte?: InputMaybe<Scalars['String']>;
  milestone_in?: InputMaybe<Array<Scalars['String']>>;
  milestone_lt?: InputMaybe<Scalars['String']>;
  milestone_lte?: InputMaybe<Scalars['String']>;
  milestone_not?: InputMaybe<Scalars['String']>;
  milestone_not_contains?: InputMaybe<Scalars['String']>;
  milestone_not_contains_nocase?: InputMaybe<Scalars['String']>;
  milestone_not_ends_with?: InputMaybe<Scalars['String']>;
  milestone_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_not_in?: InputMaybe<Array<Scalars['String']>>;
  milestone_not_starts_with?: InputMaybe<Scalars['String']>;
  milestone_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_starts_with?: InputMaybe<Scalars['String']>;
  milestone_starts_with_nocase?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  review_contains?: InputMaybe<Scalars['String']>;
  review_contains_nocase?: InputMaybe<Scalars['String']>;
  review_ends_with?: InputMaybe<Scalars['String']>;
  review_ends_with_nocase?: InputMaybe<Scalars['String']>;
  review_gt?: InputMaybe<Scalars['String']>;
  review_gte?: InputMaybe<Scalars['String']>;
  review_in?: InputMaybe<Array<Scalars['String']>>;
  review_lt?: InputMaybe<Scalars['String']>;
  review_lte?: InputMaybe<Scalars['String']>;
  review_not?: InputMaybe<Scalars['String']>;
  review_not_contains?: InputMaybe<Scalars['String']>;
  review_not_contains_nocase?: InputMaybe<Scalars['String']>;
  review_not_ends_with?: InputMaybe<Scalars['String']>;
  review_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  review_not_in?: InputMaybe<Array<Scalars['String']>>;
  review_not_starts_with?: InputMaybe<Scalars['String']>;
  review_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  review_starts_with?: InputMaybe<Scalars['String']>;
  review_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<FundsTransferType>;
  type_in?: InputMaybe<Array<FundsTransferType>>;
  type_not?: InputMaybe<FundsTransferType>;
  type_not_in?: InputMaybe<Array<FundsTransferType>>;
};

export enum FundsTransfer_OrderBy {
  Amount = 'amount',
  Application = 'application',
  Asset = 'asset',
  CreatedAtS = 'createdAtS',
  Grant = 'grant',
  Id = 'id',
  Milestone = 'milestone',
  Review = 'review',
  Sender = 'sender',
  To = 'to',
  Type = 'type'
}

export type Grant = {
  __typename?: 'Grant';
  /** Whether the grant is currently accepting applications or not */
  acceptingApplications: Scalars['Boolean'];
  /** List of applications for the grant */
  applications: Array<GrantApplication>;
  /** in seconds since epoch */
  createdAtS: Scalars['Int'];
  /** Address of who created the grant */
  creatorId: Scalars['Bytes'];
  /** ISO formatted date string */
  deadline?: Maybe<Scalars['String']>;
  /** Deadlint for the grant, in seconds since epoch */
  deadlineS: Scalars['Int'];
  /** Expectations & other details of the grant */
  details: Scalars['String'];
  /** Expected fields from the applicants of the grant */
  fields: Array<GrantField>;
  /** List of fund transfer records for the grant */
  fundTransfers: Array<FundsTransfer>;
  /** Funding currently present in the grant */
  funding: Scalars['BigInt'];
  id: Scalars['ID'];
  /** People who will manage the grant. They can see the PII submitted in an application */
  managers: Array<GrantManager>;
  metadataHash: Scalars['String'];
  /** Number of applications in the grant */
  numberOfApplications: Scalars['Int'];
  /** Proposed reward for the grant */
  reward: Reward;
  /** Rubric for evaulating the grant */
  rubric?: Maybe<Rubric>;
  /** Short description of the grant */
  summary: Scalars['String'];
  title: Scalars['String'];
  /** in seconds since epoch */
  updatedAtS?: Maybe<Scalars['Int']>;
  /** Workspace which created the grant */
  workspace: Workspace;
};


export type GrantApplicationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplication_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantApplication_Filter>;
};


export type GrantFieldsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantField_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantField_Filter>;
};


export type GrantFundTransfersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundsTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FundsTransfer_Filter>;
};


export type GrantManagersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantManager_Filter>;
};

export type GrantApplication = {
  __typename?: 'GrantApplication';
  /** Address of the applicant */
  applicantId: Scalars['Bytes'];
  /** People who will review this grant application */
  applicationReviewers: Array<GrantApplicationReviewer>;
  /** in seconds since epoch */
  createdAtS: Scalars['Int'];
  /** Feedback from the grant DAO manager/applicant */
  feedbackDao?: Maybe<Scalars['String']>;
  /** Feedback from the developer */
  feedbackDev?: Maybe<Scalars['String']>;
  /** Answers to the fields requested in the grant */
  fields: Array<GrantFieldAnswer>;
  /** The grant for which the application is for */
  grant: Grant;
  id: Scalars['ID'];
  /** Milestones of the application */
  milestones: Array<ApplicationMilestone>;
  /** PII Data */
  pii: Array<PiiAnswer>;
  /** @deprecated (use 'applicationReviewers') People who will review the grant application */
  reviewers: Array<WorkspaceMember>;
  /** Reviews of the application */
  reviews: Array<Review>;
  /** Current state of the application */
  state: ApplicationState;
  /** in seconds since epoch */
  updatedAtS: Scalars['Int'];
  /** Version of the application, incremented on resubmission */
  version: Scalars['Int'];
};


export type GrantApplicationApplicationReviewersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplicationReviewer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantApplicationReviewer_Filter>;
};


export type GrantApplicationFieldsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantFieldAnswer_Filter>;
};


export type GrantApplicationMilestonesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationMilestone_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationMilestone_Filter>;
};


export type GrantApplicationPiiArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PiiAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PiiAnswer_Filter>;
};


export type GrantApplicationReviewersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspaceMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkspaceMember_Filter>;
};


export type GrantApplicationReviewsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Review_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Review_Filter>;
};

export type GrantApplicationReviewer = {
  __typename?: 'GrantApplicationReviewer';
  /** Unix timestamp of when the user was assigned */
  assignedAtS: Scalars['Int'];
  id: Scalars['ID'];
  /** The member who was assigned */
  member: WorkspaceMember;
};

export type GrantApplicationReviewer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  assignedAtS?: InputMaybe<Scalars['Int']>;
  assignedAtS_gt?: InputMaybe<Scalars['Int']>;
  assignedAtS_gte?: InputMaybe<Scalars['Int']>;
  assignedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  assignedAtS_lt?: InputMaybe<Scalars['Int']>;
  assignedAtS_lte?: InputMaybe<Scalars['Int']>;
  assignedAtS_not?: InputMaybe<Scalars['Int']>;
  assignedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  member?: InputMaybe<Scalars['String']>;
  member_contains?: InputMaybe<Scalars['String']>;
  member_contains_nocase?: InputMaybe<Scalars['String']>;
  member_ends_with?: InputMaybe<Scalars['String']>;
  member_ends_with_nocase?: InputMaybe<Scalars['String']>;
  member_gt?: InputMaybe<Scalars['String']>;
  member_gte?: InputMaybe<Scalars['String']>;
  member_in?: InputMaybe<Array<Scalars['String']>>;
  member_lt?: InputMaybe<Scalars['String']>;
  member_lte?: InputMaybe<Scalars['String']>;
  member_not?: InputMaybe<Scalars['String']>;
  member_not_contains?: InputMaybe<Scalars['String']>;
  member_not_contains_nocase?: InputMaybe<Scalars['String']>;
  member_not_ends_with?: InputMaybe<Scalars['String']>;
  member_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  member_not_in?: InputMaybe<Array<Scalars['String']>>;
  member_not_starts_with?: InputMaybe<Scalars['String']>;
  member_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  member_starts_with?: InputMaybe<Scalars['String']>;
  member_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum GrantApplicationReviewer_OrderBy {
  AssignedAtS = 'assignedAtS',
  Id = 'id',
  Member = 'member'
}

/** A revision after an update */
export type GrantApplicationRevision = {
  __typename?: 'GrantApplicationRevision';
  /** Who caused the update to create the revision */
  actorId: Scalars['Bytes'];
  application: GrantApplication;
  /** in seconds since epoch, when was this revision created */
  createdAtS: Scalars['Int'];
  /** Feedback from the grant DAO manager/applicant */
  feedbackDao?: Maybe<Scalars['String']>;
  /** Feedback from the developer */
  feedbackDev?: Maybe<Scalars['String']>;
  /** Answers to the fields requested in the grant */
  fields: Array<GrantFieldAnswer>;
  id: Scalars['ID'];
  /** Milestones of the application */
  milestones: Array<ApplicationMilestone>;
  /** The state that was set in the revision */
  state: ApplicationState;
  /** Version number of the grant application */
  version: Scalars['Int'];
};


/** A revision after an update */
export type GrantApplicationRevisionFieldsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantFieldAnswer_Filter>;
};


/** A revision after an update */
export type GrantApplicationRevisionMilestonesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationMilestone_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationMilestone_Filter>;
};

export type GrantApplicationRevision_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actorId?: InputMaybe<Scalars['Bytes']>;
  actorId_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  actorId_not?: InputMaybe<Scalars['Bytes']>;
  actorId_not_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  application?: InputMaybe<Scalars['String']>;
  application_contains?: InputMaybe<Scalars['String']>;
  application_contains_nocase?: InputMaybe<Scalars['String']>;
  application_ends_with?: InputMaybe<Scalars['String']>;
  application_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_gt?: InputMaybe<Scalars['String']>;
  application_gte?: InputMaybe<Scalars['String']>;
  application_in?: InputMaybe<Array<Scalars['String']>>;
  application_lt?: InputMaybe<Scalars['String']>;
  application_lte?: InputMaybe<Scalars['String']>;
  application_not?: InputMaybe<Scalars['String']>;
  application_not_contains?: InputMaybe<Scalars['String']>;
  application_not_contains_nocase?: InputMaybe<Scalars['String']>;
  application_not_ends_with?: InputMaybe<Scalars['String']>;
  application_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_not_in?: InputMaybe<Array<Scalars['String']>>;
  application_not_starts_with?: InputMaybe<Scalars['String']>;
  application_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  application_starts_with?: InputMaybe<Scalars['String']>;
  application_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  feedbackDao?: InputMaybe<Scalars['String']>;
  feedbackDao_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_gt?: InputMaybe<Scalars['String']>;
  feedbackDao_gte?: InputMaybe<Scalars['String']>;
  feedbackDao_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_lt?: InputMaybe<Scalars['String']>;
  feedbackDao_lte?: InputMaybe<Scalars['String']>;
  feedbackDao_not?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev?: InputMaybe<Scalars['String']>;
  feedbackDev_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_gt?: InputMaybe<Scalars['String']>;
  feedbackDev_gte?: InputMaybe<Scalars['String']>;
  feedbackDev_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_lt?: InputMaybe<Scalars['String']>;
  feedbackDev_lte?: InputMaybe<Scalars['String']>;
  feedbackDev_not?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  fields_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fields_not?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  milestones?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  milestones_not?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<ApplicationState>;
  state_in?: InputMaybe<Array<ApplicationState>>;
  state_not?: InputMaybe<ApplicationState>;
  state_not_in?: InputMaybe<Array<ApplicationState>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum GrantApplicationRevision_OrderBy {
  ActorId = 'actorId',
  Application = 'application',
  CreatedAtS = 'createdAtS',
  FeedbackDao = 'feedbackDao',
  FeedbackDev = 'feedbackDev',
  Fields = 'fields',
  Id = 'id',
  Milestones = 'milestones',
  State = 'state',
  Version = 'version'
}

export type GrantApplication_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  applicantId?: InputMaybe<Scalars['Bytes']>;
  applicantId_contains?: InputMaybe<Scalars['Bytes']>;
  applicantId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  applicantId_not?: InputMaybe<Scalars['Bytes']>;
  applicantId_not_contains?: InputMaybe<Scalars['Bytes']>;
  applicantId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  applicationReviewers?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewers_contains?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewers_not?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  applicationReviewers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  feedbackDao?: InputMaybe<Scalars['String']>;
  feedbackDao_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_gt?: InputMaybe<Scalars['String']>;
  feedbackDao_gte?: InputMaybe<Scalars['String']>;
  feedbackDao_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_lt?: InputMaybe<Scalars['String']>;
  feedbackDao_lte?: InputMaybe<Scalars['String']>;
  feedbackDao_not?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDao_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev?: InputMaybe<Scalars['String']>;
  feedbackDev_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_gt?: InputMaybe<Scalars['String']>;
  feedbackDev_gte?: InputMaybe<Scalars['String']>;
  feedbackDev_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_lt?: InputMaybe<Scalars['String']>;
  feedbackDev_lte?: InputMaybe<Scalars['String']>;
  feedbackDev_not?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains?: InputMaybe<Scalars['String']>;
  feedbackDev_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_not_in?: InputMaybe<Array<Scalars['String']>>;
  feedbackDev_not_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with?: InputMaybe<Scalars['String']>;
  feedbackDev_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  fields_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fields_not?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  grant?: InputMaybe<Scalars['String']>;
  grant_contains?: InputMaybe<Scalars['String']>;
  grant_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_ends_with?: InputMaybe<Scalars['String']>;
  grant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_gt?: InputMaybe<Scalars['String']>;
  grant_gte?: InputMaybe<Scalars['String']>;
  grant_in?: InputMaybe<Array<Scalars['String']>>;
  grant_lt?: InputMaybe<Scalars['String']>;
  grant_lte?: InputMaybe<Scalars['String']>;
  grant_not?: InputMaybe<Scalars['String']>;
  grant_not_contains?: InputMaybe<Scalars['String']>;
  grant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_not_ends_with?: InputMaybe<Scalars['String']>;
  grant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_not_in?: InputMaybe<Array<Scalars['String']>>;
  grant_not_starts_with?: InputMaybe<Scalars['String']>;
  grant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  grant_starts_with?: InputMaybe<Scalars['String']>;
  grant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  milestones?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  milestones_not?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains?: InputMaybe<Array<Scalars['String']>>;
  milestones_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pii?: InputMaybe<Array<Scalars['String']>>;
  pii_contains?: InputMaybe<Array<Scalars['String']>>;
  pii_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pii_not?: InputMaybe<Array<Scalars['String']>>;
  pii_not_contains?: InputMaybe<Array<Scalars['String']>>;
  pii_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  reviewers?: InputMaybe<Array<Scalars['String']>>;
  reviewers_contains?: InputMaybe<Array<Scalars['String']>>;
  reviewers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  reviewers_not?: InputMaybe<Array<Scalars['String']>>;
  reviewers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  reviewers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<ApplicationState>;
  state_in?: InputMaybe<Array<ApplicationState>>;
  state_not?: InputMaybe<ApplicationState>;
  state_not_in?: InputMaybe<Array<ApplicationState>>;
  updatedAtS?: InputMaybe<Scalars['Int']>;
  updatedAtS_gt?: InputMaybe<Scalars['Int']>;
  updatedAtS_gte?: InputMaybe<Scalars['Int']>;
  updatedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtS_lt?: InputMaybe<Scalars['Int']>;
  updatedAtS_lte?: InputMaybe<Scalars['Int']>;
  updatedAtS_not?: InputMaybe<Scalars['Int']>;
  updatedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum GrantApplication_OrderBy {
  ApplicantId = 'applicantId',
  ApplicationReviewers = 'applicationReviewers',
  CreatedAtS = 'createdAtS',
  FeedbackDao = 'feedbackDao',
  FeedbackDev = 'feedbackDev',
  Fields = 'fields',
  Grant = 'grant',
  Id = 'id',
  Milestones = 'milestones',
  Pii = 'pii',
  Reviewers = 'reviewers',
  Reviews = 'reviews',
  State = 'state',
  UpdatedAtS = 'updatedAtS',
  Version = 'version'
}

export type GrantField = {
  __typename?: 'GrantField';
  id: Scalars['ID'];
  inputType: GrantFieldInputType;
  isPii: Scalars['Boolean'];
  possibleValues?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type GrantFieldAnswer = {
  __typename?: 'GrantFieldAnswer';
  field: GrantField;
  id: Scalars['ID'];
  values: Array<GrantFieldAnswerItem>;
};


export type GrantFieldAnswerValuesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswerItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GrantFieldAnswerItem_Filter>;
};

export type GrantFieldAnswerItem = {
  __typename?: 'GrantFieldAnswerItem';
  answer: GrantFieldAnswer;
  id: Scalars['ID'];
  value: Scalars['String'];
  walletId?: Maybe<Scalars['Bytes']>;
};

export type GrantFieldAnswerItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  answer?: InputMaybe<Scalars['String']>;
  answer_contains?: InputMaybe<Scalars['String']>;
  answer_contains_nocase?: InputMaybe<Scalars['String']>;
  answer_ends_with?: InputMaybe<Scalars['String']>;
  answer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  answer_gt?: InputMaybe<Scalars['String']>;
  answer_gte?: InputMaybe<Scalars['String']>;
  answer_in?: InputMaybe<Array<Scalars['String']>>;
  answer_lt?: InputMaybe<Scalars['String']>;
  answer_lte?: InputMaybe<Scalars['String']>;
  answer_not?: InputMaybe<Scalars['String']>;
  answer_not_contains?: InputMaybe<Scalars['String']>;
  answer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  answer_not_ends_with?: InputMaybe<Scalars['String']>;
  answer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  answer_not_in?: InputMaybe<Array<Scalars['String']>>;
  answer_not_starts_with?: InputMaybe<Scalars['String']>;
  answer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  answer_starts_with?: InputMaybe<Scalars['String']>;
  answer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
  walletId?: InputMaybe<Scalars['Bytes']>;
  walletId_contains?: InputMaybe<Scalars['Bytes']>;
  walletId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  walletId_not?: InputMaybe<Scalars['Bytes']>;
  walletId_not_contains?: InputMaybe<Scalars['Bytes']>;
  walletId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum GrantFieldAnswerItem_OrderBy {
  Answer = 'answer',
  Id = 'id',
  Value = 'value',
  WalletId = 'walletId'
}

export type GrantFieldAnswer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  field?: InputMaybe<Scalars['String']>;
  field_contains?: InputMaybe<Scalars['String']>;
  field_contains_nocase?: InputMaybe<Scalars['String']>;
  field_ends_with?: InputMaybe<Scalars['String']>;
  field_ends_with_nocase?: InputMaybe<Scalars['String']>;
  field_gt?: InputMaybe<Scalars['String']>;
  field_gte?: InputMaybe<Scalars['String']>;
  field_in?: InputMaybe<Array<Scalars['String']>>;
  field_lt?: InputMaybe<Scalars['String']>;
  field_lte?: InputMaybe<Scalars['String']>;
  field_not?: InputMaybe<Scalars['String']>;
  field_not_contains?: InputMaybe<Scalars['String']>;
  field_not_contains_nocase?: InputMaybe<Scalars['String']>;
  field_not_ends_with?: InputMaybe<Scalars['String']>;
  field_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  field_not_in?: InputMaybe<Array<Scalars['String']>>;
  field_not_starts_with?: InputMaybe<Scalars['String']>;
  field_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  field_starts_with?: InputMaybe<Scalars['String']>;
  field_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum GrantFieldAnswer_OrderBy {
  Field = 'field',
  Id = 'id',
  Values = 'values'
}

export enum GrantFieldInputType {
  Array = 'array',
  LongForm = 'long_form',
  Numeric = 'numeric',
  ShortForm = 'short_form'
}

export type GrantField_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  inputType?: InputMaybe<GrantFieldInputType>;
  inputType_in?: InputMaybe<Array<GrantFieldInputType>>;
  inputType_not?: InputMaybe<GrantFieldInputType>;
  inputType_not_in?: InputMaybe<Array<GrantFieldInputType>>;
  isPii?: InputMaybe<Scalars['Boolean']>;
  isPii_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPii_not?: InputMaybe<Scalars['Boolean']>;
  isPii_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  possibleValues?: InputMaybe<Array<Scalars['String']>>;
  possibleValues_contains?: InputMaybe<Array<Scalars['String']>>;
  possibleValues_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  possibleValues_not?: InputMaybe<Array<Scalars['String']>>;
  possibleValues_not_contains?: InputMaybe<Array<Scalars['String']>>;
  possibleValues_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum GrantField_OrderBy {
  Id = 'id',
  InputType = 'inputType',
  IsPii = 'isPii',
  PossibleValues = 'possibleValues',
  Title = 'title'
}

export type GrantManager = {
  __typename?: 'GrantManager';
  /** Grant for which this entity is the manager */
  grant: Grant;
  /** Globally unique ID of the member */
  id: Scalars['ID'];
  /** Workspace member */
  member?: Maybe<WorkspaceMember>;
};

export type GrantManager_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  grant?: InputMaybe<Scalars['String']>;
  grant_contains?: InputMaybe<Scalars['String']>;
  grant_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_ends_with?: InputMaybe<Scalars['String']>;
  grant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_gt?: InputMaybe<Scalars['String']>;
  grant_gte?: InputMaybe<Scalars['String']>;
  grant_in?: InputMaybe<Array<Scalars['String']>>;
  grant_lt?: InputMaybe<Scalars['String']>;
  grant_lte?: InputMaybe<Scalars['String']>;
  grant_not?: InputMaybe<Scalars['String']>;
  grant_not_contains?: InputMaybe<Scalars['String']>;
  grant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  grant_not_ends_with?: InputMaybe<Scalars['String']>;
  grant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  grant_not_in?: InputMaybe<Array<Scalars['String']>>;
  grant_not_starts_with?: InputMaybe<Scalars['String']>;
  grant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  grant_starts_with?: InputMaybe<Scalars['String']>;
  grant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  member?: InputMaybe<Scalars['String']>;
  member_contains?: InputMaybe<Scalars['String']>;
  member_contains_nocase?: InputMaybe<Scalars['String']>;
  member_ends_with?: InputMaybe<Scalars['String']>;
  member_ends_with_nocase?: InputMaybe<Scalars['String']>;
  member_gt?: InputMaybe<Scalars['String']>;
  member_gte?: InputMaybe<Scalars['String']>;
  member_in?: InputMaybe<Array<Scalars['String']>>;
  member_lt?: InputMaybe<Scalars['String']>;
  member_lte?: InputMaybe<Scalars['String']>;
  member_not?: InputMaybe<Scalars['String']>;
  member_not_contains?: InputMaybe<Scalars['String']>;
  member_not_contains_nocase?: InputMaybe<Scalars['String']>;
  member_not_ends_with?: InputMaybe<Scalars['String']>;
  member_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  member_not_in?: InputMaybe<Array<Scalars['String']>>;
  member_not_starts_with?: InputMaybe<Scalars['String']>;
  member_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  member_starts_with?: InputMaybe<Scalars['String']>;
  member_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum GrantManager_OrderBy {
  Grant = 'grant',
  Id = 'id',
  Member = 'member'
}

export type Grant_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  acceptingApplications?: InputMaybe<Scalars['Boolean']>;
  acceptingApplications_in?: InputMaybe<Array<Scalars['Boolean']>>;
  acceptingApplications_not?: InputMaybe<Scalars['Boolean']>;
  acceptingApplications_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  creatorId?: InputMaybe<Scalars['Bytes']>;
  creatorId_contains?: InputMaybe<Scalars['Bytes']>;
  creatorId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creatorId_not?: InputMaybe<Scalars['Bytes']>;
  creatorId_not_contains?: InputMaybe<Scalars['Bytes']>;
  creatorId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  deadline?: InputMaybe<Scalars['String']>;
  deadlineS?: InputMaybe<Scalars['Int']>;
  deadlineS_gt?: InputMaybe<Scalars['Int']>;
  deadlineS_gte?: InputMaybe<Scalars['Int']>;
  deadlineS_in?: InputMaybe<Array<Scalars['Int']>>;
  deadlineS_lt?: InputMaybe<Scalars['Int']>;
  deadlineS_lte?: InputMaybe<Scalars['Int']>;
  deadlineS_not?: InputMaybe<Scalars['Int']>;
  deadlineS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deadline_contains?: InputMaybe<Scalars['String']>;
  deadline_contains_nocase?: InputMaybe<Scalars['String']>;
  deadline_ends_with?: InputMaybe<Scalars['String']>;
  deadline_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deadline_gt?: InputMaybe<Scalars['String']>;
  deadline_gte?: InputMaybe<Scalars['String']>;
  deadline_in?: InputMaybe<Array<Scalars['String']>>;
  deadline_lt?: InputMaybe<Scalars['String']>;
  deadline_lte?: InputMaybe<Scalars['String']>;
  deadline_not?: InputMaybe<Scalars['String']>;
  deadline_not_contains?: InputMaybe<Scalars['String']>;
  deadline_not_contains_nocase?: InputMaybe<Scalars['String']>;
  deadline_not_ends_with?: InputMaybe<Scalars['String']>;
  deadline_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deadline_not_in?: InputMaybe<Array<Scalars['String']>>;
  deadline_not_starts_with?: InputMaybe<Scalars['String']>;
  deadline_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deadline_starts_with?: InputMaybe<Scalars['String']>;
  deadline_starts_with_nocase?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  details_contains?: InputMaybe<Scalars['String']>;
  details_contains_nocase?: InputMaybe<Scalars['String']>;
  details_ends_with?: InputMaybe<Scalars['String']>;
  details_ends_with_nocase?: InputMaybe<Scalars['String']>;
  details_gt?: InputMaybe<Scalars['String']>;
  details_gte?: InputMaybe<Scalars['String']>;
  details_in?: InputMaybe<Array<Scalars['String']>>;
  details_lt?: InputMaybe<Scalars['String']>;
  details_lte?: InputMaybe<Scalars['String']>;
  details_not?: InputMaybe<Scalars['String']>;
  details_not_contains?: InputMaybe<Scalars['String']>;
  details_not_contains_nocase?: InputMaybe<Scalars['String']>;
  details_not_ends_with?: InputMaybe<Scalars['String']>;
  details_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  details_not_in?: InputMaybe<Array<Scalars['String']>>;
  details_not_starts_with?: InputMaybe<Scalars['String']>;
  details_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  details_starts_with?: InputMaybe<Scalars['String']>;
  details_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  fields_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fields_not?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fields_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  funding?: InputMaybe<Scalars['BigInt']>;
  funding_gt?: InputMaybe<Scalars['BigInt']>;
  funding_gte?: InputMaybe<Scalars['BigInt']>;
  funding_in?: InputMaybe<Array<Scalars['BigInt']>>;
  funding_lt?: InputMaybe<Scalars['BigInt']>;
  funding_lte?: InputMaybe<Scalars['BigInt']>;
  funding_not?: InputMaybe<Scalars['BigInt']>;
  funding_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  managers?: InputMaybe<Array<Scalars['String']>>;
  managers_contains?: InputMaybe<Array<Scalars['String']>>;
  managers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  managers_not?: InputMaybe<Array<Scalars['String']>>;
  managers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  managers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  metadataHash?: InputMaybe<Scalars['String']>;
  metadataHash_contains?: InputMaybe<Scalars['String']>;
  metadataHash_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_ends_with?: InputMaybe<Scalars['String']>;
  metadataHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_gt?: InputMaybe<Scalars['String']>;
  metadataHash_gte?: InputMaybe<Scalars['String']>;
  metadataHash_in?: InputMaybe<Array<Scalars['String']>>;
  metadataHash_lt?: InputMaybe<Scalars['String']>;
  metadataHash_lte?: InputMaybe<Scalars['String']>;
  metadataHash_not?: InputMaybe<Scalars['String']>;
  metadataHash_not_contains?: InputMaybe<Scalars['String']>;
  metadataHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_not_ends_with?: InputMaybe<Scalars['String']>;
  metadataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataHash_not_starts_with?: InputMaybe<Scalars['String']>;
  metadataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_starts_with?: InputMaybe<Scalars['String']>;
  metadataHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  numberOfApplications?: InputMaybe<Scalars['Int']>;
  numberOfApplications_gt?: InputMaybe<Scalars['Int']>;
  numberOfApplications_gte?: InputMaybe<Scalars['Int']>;
  numberOfApplications_in?: InputMaybe<Array<Scalars['Int']>>;
  numberOfApplications_lt?: InputMaybe<Scalars['Int']>;
  numberOfApplications_lte?: InputMaybe<Scalars['Int']>;
  numberOfApplications_not?: InputMaybe<Scalars['Int']>;
  numberOfApplications_not_in?: InputMaybe<Array<Scalars['Int']>>;
  reward?: InputMaybe<Scalars['String']>;
  reward_contains?: InputMaybe<Scalars['String']>;
  reward_contains_nocase?: InputMaybe<Scalars['String']>;
  reward_ends_with?: InputMaybe<Scalars['String']>;
  reward_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reward_gt?: InputMaybe<Scalars['String']>;
  reward_gte?: InputMaybe<Scalars['String']>;
  reward_in?: InputMaybe<Array<Scalars['String']>>;
  reward_lt?: InputMaybe<Scalars['String']>;
  reward_lte?: InputMaybe<Scalars['String']>;
  reward_not?: InputMaybe<Scalars['String']>;
  reward_not_contains?: InputMaybe<Scalars['String']>;
  reward_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reward_not_ends_with?: InputMaybe<Scalars['String']>;
  reward_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reward_not_in?: InputMaybe<Array<Scalars['String']>>;
  reward_not_starts_with?: InputMaybe<Scalars['String']>;
  reward_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reward_starts_with?: InputMaybe<Scalars['String']>;
  reward_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rubric?: InputMaybe<Scalars['String']>;
  rubric_contains?: InputMaybe<Scalars['String']>;
  rubric_contains_nocase?: InputMaybe<Scalars['String']>;
  rubric_ends_with?: InputMaybe<Scalars['String']>;
  rubric_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rubric_gt?: InputMaybe<Scalars['String']>;
  rubric_gte?: InputMaybe<Scalars['String']>;
  rubric_in?: InputMaybe<Array<Scalars['String']>>;
  rubric_lt?: InputMaybe<Scalars['String']>;
  rubric_lte?: InputMaybe<Scalars['String']>;
  rubric_not?: InputMaybe<Scalars['String']>;
  rubric_not_contains?: InputMaybe<Scalars['String']>;
  rubric_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rubric_not_ends_with?: InputMaybe<Scalars['String']>;
  rubric_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rubric_not_in?: InputMaybe<Array<Scalars['String']>>;
  rubric_not_starts_with?: InputMaybe<Scalars['String']>;
  rubric_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rubric_starts_with?: InputMaybe<Scalars['String']>;
  rubric_starts_with_nocase?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  summary_contains?: InputMaybe<Scalars['String']>;
  summary_contains_nocase?: InputMaybe<Scalars['String']>;
  summary_ends_with?: InputMaybe<Scalars['String']>;
  summary_ends_with_nocase?: InputMaybe<Scalars['String']>;
  summary_gt?: InputMaybe<Scalars['String']>;
  summary_gte?: InputMaybe<Scalars['String']>;
  summary_in?: InputMaybe<Array<Scalars['String']>>;
  summary_lt?: InputMaybe<Scalars['String']>;
  summary_lte?: InputMaybe<Scalars['String']>;
  summary_not?: InputMaybe<Scalars['String']>;
  summary_not_contains?: InputMaybe<Scalars['String']>;
  summary_not_contains_nocase?: InputMaybe<Scalars['String']>;
  summary_not_ends_with?: InputMaybe<Scalars['String']>;
  summary_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  summary_not_in?: InputMaybe<Array<Scalars['String']>>;
  summary_not_starts_with?: InputMaybe<Scalars['String']>;
  summary_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  summary_starts_with?: InputMaybe<Scalars['String']>;
  summary_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAtS?: InputMaybe<Scalars['Int']>;
  updatedAtS_gt?: InputMaybe<Scalars['Int']>;
  updatedAtS_gte?: InputMaybe<Scalars['Int']>;
  updatedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtS_lt?: InputMaybe<Scalars['Int']>;
  updatedAtS_lte?: InputMaybe<Scalars['Int']>;
  updatedAtS_not?: InputMaybe<Scalars['Int']>;
  updatedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  workspace?: InputMaybe<Scalars['String']>;
  workspace_contains?: InputMaybe<Scalars['String']>;
  workspace_contains_nocase?: InputMaybe<Scalars['String']>;
  workspace_ends_with?: InputMaybe<Scalars['String']>;
  workspace_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_gt?: InputMaybe<Scalars['String']>;
  workspace_gte?: InputMaybe<Scalars['String']>;
  workspace_in?: InputMaybe<Array<Scalars['String']>>;
  workspace_lt?: InputMaybe<Scalars['String']>;
  workspace_lte?: InputMaybe<Scalars['String']>;
  workspace_not?: InputMaybe<Scalars['String']>;
  workspace_not_contains?: InputMaybe<Scalars['String']>;
  workspace_not_contains_nocase?: InputMaybe<Scalars['String']>;
  workspace_not_ends_with?: InputMaybe<Scalars['String']>;
  workspace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_not_in?: InputMaybe<Array<Scalars['String']>>;
  workspace_not_starts_with?: InputMaybe<Scalars['String']>;
  workspace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_starts_with?: InputMaybe<Scalars['String']>;
  workspace_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Grant_OrderBy {
  AcceptingApplications = 'acceptingApplications',
  Applications = 'applications',
  CreatedAtS = 'createdAtS',
  CreatorId = 'creatorId',
  Deadline = 'deadline',
  DeadlineS = 'deadlineS',
  Details = 'details',
  Fields = 'fields',
  FundTransfers = 'fundTransfers',
  Funding = 'funding',
  Id = 'id',
  Managers = 'managers',
  MetadataHash = 'metadataHash',
  NumberOfApplications = 'numberOfApplications',
  Reward = 'reward',
  Rubric = 'rubric',
  Summary = 'summary',
  Title = 'title',
  UpdatedAtS = 'updatedAtS',
  Workspace = 'workspace'
}

export enum MilestoneState {
  Approved = 'approved',
  Requested = 'requested',
  Submitted = 'submitted'
}

export type Notification = {
  __typename?: 'Notification';
  /** Who caused the notification to be sent */
  actorId?: Maybe<Scalars['Bytes']>;
  /** rich content of the notification */
  content: Scalars['String'];
  /** Descending order of cursor */
  cursor: Scalars['String'];
  /** The ID of the entity being affected */
  entityId: Scalars['String'];
  id: Scalars['ID'];
  /** Who all should recv the notification */
  recipientIds: Array<Scalars['Bytes']>;
  /** title of the notification */
  title: Scalars['String'];
  type: NotificationType;
};

export enum NotificationType {
  ApplicationAccepted = 'application_accepted',
  ApplicationCompleted = 'application_completed',
  ApplicationRejected = 'application_rejected',
  ApplicationResubmitted = 'application_resubmitted',
  ApplicationSubmitted = 'application_submitted',
  FundsDeposited = 'funds_deposited',
  FundsDisbursed = 'funds_disbursed',
  FundsWithdrawn = 'funds_withdrawn',
  MilestoneAccepted = 'milestone_accepted',
  MilestoneRejected = 'milestone_rejected',
  MilestoneRequested = 'milestone_requested'
}

export type Notification_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actorId?: InputMaybe<Scalars['Bytes']>;
  actorId_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  actorId_not?: InputMaybe<Scalars['Bytes']>;
  actorId_not_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  content?: InputMaybe<Scalars['String']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_contains_nocase?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  cursor_contains?: InputMaybe<Scalars['String']>;
  cursor_contains_nocase?: InputMaybe<Scalars['String']>;
  cursor_ends_with?: InputMaybe<Scalars['String']>;
  cursor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cursor_gt?: InputMaybe<Scalars['String']>;
  cursor_gte?: InputMaybe<Scalars['String']>;
  cursor_in?: InputMaybe<Array<Scalars['String']>>;
  cursor_lt?: InputMaybe<Scalars['String']>;
  cursor_lte?: InputMaybe<Scalars['String']>;
  cursor_not?: InputMaybe<Scalars['String']>;
  cursor_not_contains?: InputMaybe<Scalars['String']>;
  cursor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cursor_not_ends_with?: InputMaybe<Scalars['String']>;
  cursor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cursor_not_in?: InputMaybe<Array<Scalars['String']>>;
  cursor_not_starts_with?: InputMaybe<Scalars['String']>;
  cursor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cursor_starts_with?: InputMaybe<Scalars['String']>;
  cursor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityId?: InputMaybe<Scalars['String']>;
  entityId_contains?: InputMaybe<Scalars['String']>;
  entityId_contains_nocase?: InputMaybe<Scalars['String']>;
  entityId_ends_with?: InputMaybe<Scalars['String']>;
  entityId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entityId_gt?: InputMaybe<Scalars['String']>;
  entityId_gte?: InputMaybe<Scalars['String']>;
  entityId_in?: InputMaybe<Array<Scalars['String']>>;
  entityId_lt?: InputMaybe<Scalars['String']>;
  entityId_lte?: InputMaybe<Scalars['String']>;
  entityId_not?: InputMaybe<Scalars['String']>;
  entityId_not_contains?: InputMaybe<Scalars['String']>;
  entityId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  entityId_not_ends_with?: InputMaybe<Scalars['String']>;
  entityId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entityId_not_in?: InputMaybe<Array<Scalars['String']>>;
  entityId_not_starts_with?: InputMaybe<Scalars['String']>;
  entityId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityId_starts_with?: InputMaybe<Scalars['String']>;
  entityId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  recipientIds?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientIds_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientIds_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientIds_not?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientIds_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  recipientIds_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<NotificationType>>;
  type_not?: InputMaybe<NotificationType>;
  type_not_in?: InputMaybe<Array<NotificationType>>;
};

export enum Notification_OrderBy {
  ActorId = 'actorId',
  Content = 'content',
  Cursor = 'cursor',
  EntityId = 'entityId',
  Id = 'id',
  RecipientIds = 'recipientIds',
  Title = 'title',
  Type = 'type'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PiiAnswer = {
  __typename?: 'PIIAnswer';
  /** The encrypted data */
  data: Scalars['String'];
  id: Scalars['ID'];
  /** Grant manager who can access this encrypted info */
  manager?: Maybe<GrantManager>;
};

export type PiiAnswer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  data?: InputMaybe<Scalars['String']>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_contains_nocase?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  manager?: InputMaybe<Scalars['String']>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PiiAnswer_OrderBy {
  Data = 'data',
  Id = 'id',
  Manager = 'manager'
}

export type Partner = {
  __typename?: 'Partner';
  id: Scalars['ID'];
  industry: Scalars['String'];
  name: Scalars['String'];
  partnerImageHash?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Partner_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  industry?: InputMaybe<Scalars['String']>;
  industry_contains?: InputMaybe<Scalars['String']>;
  industry_contains_nocase?: InputMaybe<Scalars['String']>;
  industry_ends_with?: InputMaybe<Scalars['String']>;
  industry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  industry_gt?: InputMaybe<Scalars['String']>;
  industry_gte?: InputMaybe<Scalars['String']>;
  industry_in?: InputMaybe<Array<Scalars['String']>>;
  industry_lt?: InputMaybe<Scalars['String']>;
  industry_lte?: InputMaybe<Scalars['String']>;
  industry_not?: InputMaybe<Scalars['String']>;
  industry_not_contains?: InputMaybe<Scalars['String']>;
  industry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  industry_not_ends_with?: InputMaybe<Scalars['String']>;
  industry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  industry_not_in?: InputMaybe<Array<Scalars['String']>>;
  industry_not_starts_with?: InputMaybe<Scalars['String']>;
  industry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  industry_starts_with?: InputMaybe<Scalars['String']>;
  industry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash?: InputMaybe<Scalars['String']>;
  partnerImageHash_contains?: InputMaybe<Scalars['String']>;
  partnerImageHash_contains_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash_ends_with?: InputMaybe<Scalars['String']>;
  partnerImageHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash_gt?: InputMaybe<Scalars['String']>;
  partnerImageHash_gte?: InputMaybe<Scalars['String']>;
  partnerImageHash_in?: InputMaybe<Array<Scalars['String']>>;
  partnerImageHash_lt?: InputMaybe<Scalars['String']>;
  partnerImageHash_lte?: InputMaybe<Scalars['String']>;
  partnerImageHash_not?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_contains?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_ends_with?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  partnerImageHash_not_starts_with?: InputMaybe<Scalars['String']>;
  partnerImageHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  partnerImageHash_starts_with?: InputMaybe<Scalars['String']>;
  partnerImageHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Partner_OrderBy {
  Id = 'id',
  Industry = 'industry',
  Name = 'name',
  PartnerImageHash = 'partnerImageHash',
  Website = 'website'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  applicationMilestone?: Maybe<ApplicationMilestone>;
  applicationMilestones: Array<ApplicationMilestone>;
  fundsTransfer?: Maybe<FundsTransfer>;
  fundsTransfers: Array<FundsTransfer>;
  grant?: Maybe<Grant>;
  grantApplication?: Maybe<GrantApplication>;
  grantApplicationReviewer?: Maybe<GrantApplicationReviewer>;
  grantApplicationReviewers: Array<GrantApplicationReviewer>;
  grantApplicationRevision?: Maybe<GrantApplicationRevision>;
  grantApplicationRevisions: Array<GrantApplicationRevision>;
  grantApplications: Array<GrantApplication>;
  grantField?: Maybe<GrantField>;
  grantFieldAnswer?: Maybe<GrantFieldAnswer>;
  grantFieldAnswerItem?: Maybe<GrantFieldAnswerItem>;
  grantFieldAnswerItems: Array<GrantFieldAnswerItem>;
  grantFieldAnswers: Array<GrantFieldAnswer>;
  grantFields: Array<GrantField>;
  grantManager?: Maybe<GrantManager>;
  grantManagers: Array<GrantManager>;
  grants: Array<Grant>;
  notification?: Maybe<Notification>;
  notifications: Array<Notification>;
  partner?: Maybe<Partner>;
  partners: Array<Partner>;
  piianswer?: Maybe<PiiAnswer>;
  piianswers: Array<PiiAnswer>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  rubric?: Maybe<Rubric>;
  rubricItem?: Maybe<RubricItem>;
  rubricItems: Array<RubricItem>;
  rubrics: Array<Rubric>;
  social?: Maybe<Social>;
  socials: Array<Social>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  workspace?: Maybe<Workspace>;
  workspaceMember?: Maybe<WorkspaceMember>;
  workspaceMembers: Array<WorkspaceMember>;
  workspaces: Array<Workspace>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryApplicationMilestoneArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApplicationMilestonesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationMilestone_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApplicationMilestone_Filter>;
};


export type QueryFundsTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFundsTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundsTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundsTransfer_Filter>;
};


export type QueryGrantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantApplicationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantApplicationReviewerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantApplicationReviewersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplicationReviewer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplicationReviewer_Filter>;
};


export type QueryGrantApplicationRevisionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantApplicationRevisionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplicationRevision_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplicationRevision_Filter>;
};


export type QueryGrantApplicationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplication_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplication_Filter>;
};


export type QueryGrantFieldArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantFieldAnswerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantFieldAnswerItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantFieldAnswerItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswerItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantFieldAnswerItem_Filter>;
};


export type QueryGrantFieldAnswersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantFieldAnswer_Filter>;
};


export type QueryGrantFieldsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantField_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantField_Filter>;
};


export type QueryGrantManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGrantManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantManager_Filter>;
};


export type QueryGrantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Grant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Grant_Filter>;
};


export type QueryNotificationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNotificationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Notification_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Notification_Filter>;
};


export type QueryPartnerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPartnersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Partner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Partner_Filter>;
};


export type QueryPiianswerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPiianswersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PiiAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PiiAnswer_Filter>;
};


export type QueryReviewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReviewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Review_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Review_Filter>;
};


export type QueryRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};


export type QueryRubricArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRubricItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRubricItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RubricItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RubricItem_Filter>;
};


export type QueryRubricsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rubric_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Rubric_Filter>;
};


export type QuerySocialArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySocialsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Social_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Social_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryWorkspaceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWorkspaceMemberArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWorkspaceMembersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspaceMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkspaceMember_Filter>;
};


export type QueryWorkspacesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Workspace_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Workspace_Filter>;
};

export type Review = {
  __typename?: 'Review';
  /** Application for which the review is */
  application: GrantApplication;
  /** created at S */
  createdAtS: Scalars['Int'];
  /** The encrypted data of the review */
  data: Array<PiiAnswer>;
  id: Scalars['ID'];
  /** IPFS Hash to the publicly accessible review */
  publicReviewDataHash?: Maybe<Scalars['String']>;
  /** Workspace member that reviewed the app */
  reviewer?: Maybe<WorkspaceMember>;
  /** ID of the reviewer */
  reviewerId: Scalars['String'];
};


export type ReviewDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PiiAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PiiAnswer_Filter>;
};

export type Review_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  application?: InputMaybe<Scalars['String']>;
  application_contains?: InputMaybe<Scalars['String']>;
  application_contains_nocase?: InputMaybe<Scalars['String']>;
  application_ends_with?: InputMaybe<Scalars['String']>;
  application_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_gt?: InputMaybe<Scalars['String']>;
  application_gte?: InputMaybe<Scalars['String']>;
  application_in?: InputMaybe<Array<Scalars['String']>>;
  application_lt?: InputMaybe<Scalars['String']>;
  application_lte?: InputMaybe<Scalars['String']>;
  application_not?: InputMaybe<Scalars['String']>;
  application_not_contains?: InputMaybe<Scalars['String']>;
  application_not_contains_nocase?: InputMaybe<Scalars['String']>;
  application_not_ends_with?: InputMaybe<Scalars['String']>;
  application_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  application_not_in?: InputMaybe<Array<Scalars['String']>>;
  application_not_starts_with?: InputMaybe<Scalars['String']>;
  application_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  application_starts_with?: InputMaybe<Scalars['String']>;
  application_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  data?: InputMaybe<Array<Scalars['String']>>;
  data_contains?: InputMaybe<Array<Scalars['String']>>;
  data_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  data_not?: InputMaybe<Array<Scalars['String']>>;
  data_not_contains?: InputMaybe<Array<Scalars['String']>>;
  data_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  publicReviewDataHash?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_contains?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_contains_nocase?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_ends_with?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_gt?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_gte?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_in?: InputMaybe<Array<Scalars['String']>>;
  publicReviewDataHash_lt?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_lte?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_contains?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_ends_with?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  publicReviewDataHash_not_starts_with?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_starts_with?: InputMaybe<Scalars['String']>;
  publicReviewDataHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reviewer?: InputMaybe<Scalars['String']>;
  reviewerId?: InputMaybe<Scalars['String']>;
  reviewerId_contains?: InputMaybe<Scalars['String']>;
  reviewerId_contains_nocase?: InputMaybe<Scalars['String']>;
  reviewerId_ends_with?: InputMaybe<Scalars['String']>;
  reviewerId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reviewerId_gt?: InputMaybe<Scalars['String']>;
  reviewerId_gte?: InputMaybe<Scalars['String']>;
  reviewerId_in?: InputMaybe<Array<Scalars['String']>>;
  reviewerId_lt?: InputMaybe<Scalars['String']>;
  reviewerId_lte?: InputMaybe<Scalars['String']>;
  reviewerId_not?: InputMaybe<Scalars['String']>;
  reviewerId_not_contains?: InputMaybe<Scalars['String']>;
  reviewerId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reviewerId_not_ends_with?: InputMaybe<Scalars['String']>;
  reviewerId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reviewerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  reviewerId_not_starts_with?: InputMaybe<Scalars['String']>;
  reviewerId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reviewerId_starts_with?: InputMaybe<Scalars['String']>;
  reviewerId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reviewer_contains?: InputMaybe<Scalars['String']>;
  reviewer_contains_nocase?: InputMaybe<Scalars['String']>;
  reviewer_ends_with?: InputMaybe<Scalars['String']>;
  reviewer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reviewer_gt?: InputMaybe<Scalars['String']>;
  reviewer_gte?: InputMaybe<Scalars['String']>;
  reviewer_in?: InputMaybe<Array<Scalars['String']>>;
  reviewer_lt?: InputMaybe<Scalars['String']>;
  reviewer_lte?: InputMaybe<Scalars['String']>;
  reviewer_not?: InputMaybe<Scalars['String']>;
  reviewer_not_contains?: InputMaybe<Scalars['String']>;
  reviewer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reviewer_not_ends_with?: InputMaybe<Scalars['String']>;
  reviewer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reviewer_not_in?: InputMaybe<Array<Scalars['String']>>;
  reviewer_not_starts_with?: InputMaybe<Scalars['String']>;
  reviewer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reviewer_starts_with?: InputMaybe<Scalars['String']>;
  reviewer_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Review_OrderBy {
  Application = 'application',
  CreatedAtS = 'createdAtS',
  Data = 'data',
  Id = 'id',
  PublicReviewDataHash = 'publicReviewDataHash',
  Reviewer = 'reviewer',
  ReviewerId = 'reviewerId'
}

export type Reward = {
  __typename?: 'Reward';
  asset: Scalars['Bytes'];
  committed: Scalars['BigInt'];
  id: Scalars['ID'];
  token?: Maybe<Token>;
};

export type Reward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  asset?: InputMaybe<Scalars['Bytes']>;
  asset_contains?: InputMaybe<Scalars['Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_not?: InputMaybe<Scalars['Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  committed?: InputMaybe<Scalars['BigInt']>;
  committed_gt?: InputMaybe<Scalars['BigInt']>;
  committed_gte?: InputMaybe<Scalars['BigInt']>;
  committed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  committed_lt?: InputMaybe<Scalars['BigInt']>;
  committed_lte?: InputMaybe<Scalars['BigInt']>;
  committed_not?: InputMaybe<Scalars['BigInt']>;
  committed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Reward_OrderBy {
  Asset = 'asset',
  Committed = 'committed',
  Id = 'id',
  Token = 'token'
}

export type Rubric = {
  __typename?: 'Rubric';
  /** Who added this rubric */
  addedBy?: Maybe<WorkspaceMember>;
  /** Unix timestamp of when the rubric was created */
  createdAtS: Scalars['Int'];
  id: Scalars['ID'];
  /** Is private evaluation */
  isPrivate: Scalars['Boolean'];
  items: Array<RubricItem>;
  /** Unix timestamp of when the rubric was updated */
  updatedAtS: Scalars['Int'];
};


export type RubricItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RubricItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RubricItem_Filter>;
};

export type RubricItem = {
  __typename?: 'RubricItem';
  details: Scalars['String'];
  id: Scalars['ID'];
  maximumPoints: Scalars['Int'];
  title: Scalars['String'];
};

export type RubricItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  details?: InputMaybe<Scalars['String']>;
  details_contains?: InputMaybe<Scalars['String']>;
  details_contains_nocase?: InputMaybe<Scalars['String']>;
  details_ends_with?: InputMaybe<Scalars['String']>;
  details_ends_with_nocase?: InputMaybe<Scalars['String']>;
  details_gt?: InputMaybe<Scalars['String']>;
  details_gte?: InputMaybe<Scalars['String']>;
  details_in?: InputMaybe<Array<Scalars['String']>>;
  details_lt?: InputMaybe<Scalars['String']>;
  details_lte?: InputMaybe<Scalars['String']>;
  details_not?: InputMaybe<Scalars['String']>;
  details_not_contains?: InputMaybe<Scalars['String']>;
  details_not_contains_nocase?: InputMaybe<Scalars['String']>;
  details_not_ends_with?: InputMaybe<Scalars['String']>;
  details_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  details_not_in?: InputMaybe<Array<Scalars['String']>>;
  details_not_starts_with?: InputMaybe<Scalars['String']>;
  details_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  details_starts_with?: InputMaybe<Scalars['String']>;
  details_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maximumPoints?: InputMaybe<Scalars['Int']>;
  maximumPoints_gt?: InputMaybe<Scalars['Int']>;
  maximumPoints_gte?: InputMaybe<Scalars['Int']>;
  maximumPoints_in?: InputMaybe<Array<Scalars['Int']>>;
  maximumPoints_lt?: InputMaybe<Scalars['Int']>;
  maximumPoints_lte?: InputMaybe<Scalars['Int']>;
  maximumPoints_not?: InputMaybe<Scalars['Int']>;
  maximumPoints_not_in?: InputMaybe<Array<Scalars['Int']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum RubricItem_OrderBy {
  Details = 'details',
  Id = 'id',
  MaximumPoints = 'maximumPoints',
  Title = 'title'
}

export type Rubric_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_contains?: InputMaybe<Scalars['String']>;
  addedBy_contains_nocase?: InputMaybe<Scalars['String']>;
  addedBy_ends_with?: InputMaybe<Scalars['String']>;
  addedBy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addedBy_gt?: InputMaybe<Scalars['String']>;
  addedBy_gte?: InputMaybe<Scalars['String']>;
  addedBy_in?: InputMaybe<Array<Scalars['String']>>;
  addedBy_lt?: InputMaybe<Scalars['String']>;
  addedBy_lte?: InputMaybe<Scalars['String']>;
  addedBy_not?: InputMaybe<Scalars['String']>;
  addedBy_not_contains?: InputMaybe<Scalars['String']>;
  addedBy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addedBy_not_ends_with?: InputMaybe<Scalars['String']>;
  addedBy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addedBy_not_in?: InputMaybe<Array<Scalars['String']>>;
  addedBy_not_starts_with?: InputMaybe<Scalars['String']>;
  addedBy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addedBy_starts_with?: InputMaybe<Scalars['String']>;
  addedBy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  isPrivate_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPrivate_not?: InputMaybe<Scalars['Boolean']>;
  isPrivate_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  items?: InputMaybe<Array<Scalars['String']>>;
  items_contains?: InputMaybe<Array<Scalars['String']>>;
  items_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  items_not?: InputMaybe<Array<Scalars['String']>>;
  items_not_contains?: InputMaybe<Array<Scalars['String']>>;
  items_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  updatedAtS?: InputMaybe<Scalars['Int']>;
  updatedAtS_gt?: InputMaybe<Scalars['Int']>;
  updatedAtS_gte?: InputMaybe<Scalars['Int']>;
  updatedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtS_lt?: InputMaybe<Scalars['Int']>;
  updatedAtS_lte?: InputMaybe<Scalars['Int']>;
  updatedAtS_not?: InputMaybe<Scalars['Int']>;
  updatedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Rubric_OrderBy {
  AddedBy = 'addedBy',
  CreatedAtS = 'createdAtS',
  Id = 'id',
  IsPrivate = 'isPrivate',
  Items = 'items',
  UpdatedAtS = 'updatedAtS'
}

export type Social = {
  __typename?: 'Social';
  id: Scalars['ID'];
  /** Name of the network. Eg. twitter, discord */
  name: Scalars['String'];
  /** Handle or URL */
  value: Scalars['String'];
};

export type Social_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Social_OrderBy {
  Id = 'id',
  Name = 'name',
  Value = 'value'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  applicationMilestone?: Maybe<ApplicationMilestone>;
  applicationMilestones: Array<ApplicationMilestone>;
  fundsTransfer?: Maybe<FundsTransfer>;
  fundsTransfers: Array<FundsTransfer>;
  grant?: Maybe<Grant>;
  grantApplication?: Maybe<GrantApplication>;
  grantApplicationReviewer?: Maybe<GrantApplicationReviewer>;
  grantApplicationReviewers: Array<GrantApplicationReviewer>;
  grantApplicationRevision?: Maybe<GrantApplicationRevision>;
  grantApplicationRevisions: Array<GrantApplicationRevision>;
  grantApplications: Array<GrantApplication>;
  grantField?: Maybe<GrantField>;
  grantFieldAnswer?: Maybe<GrantFieldAnswer>;
  grantFieldAnswerItem?: Maybe<GrantFieldAnswerItem>;
  grantFieldAnswerItems: Array<GrantFieldAnswerItem>;
  grantFieldAnswers: Array<GrantFieldAnswer>;
  grantFields: Array<GrantField>;
  grantManager?: Maybe<GrantManager>;
  grantManagers: Array<GrantManager>;
  grants: Array<Grant>;
  notification?: Maybe<Notification>;
  notifications: Array<Notification>;
  partner?: Maybe<Partner>;
  partners: Array<Partner>;
  piianswer?: Maybe<PiiAnswer>;
  piianswers: Array<PiiAnswer>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  rubric?: Maybe<Rubric>;
  rubricItem?: Maybe<RubricItem>;
  rubricItems: Array<RubricItem>;
  rubrics: Array<Rubric>;
  social?: Maybe<Social>;
  socials: Array<Social>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  workspace?: Maybe<Workspace>;
  workspaceMember?: Maybe<WorkspaceMember>;
  workspaceMembers: Array<WorkspaceMember>;
  workspaces: Array<Workspace>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionApplicationMilestoneArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApplicationMilestonesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApplicationMilestone_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApplicationMilestone_Filter>;
};


export type SubscriptionFundsTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFundsTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundsTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundsTransfer_Filter>;
};


export type SubscriptionGrantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantApplicationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantApplicationReviewerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantApplicationReviewersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplicationReviewer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplicationReviewer_Filter>;
};


export type SubscriptionGrantApplicationRevisionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantApplicationRevisionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplicationRevision_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplicationRevision_Filter>;
};


export type SubscriptionGrantApplicationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantApplication_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantApplication_Filter>;
};


export type SubscriptionGrantFieldArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantFieldAnswerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantFieldAnswerItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantFieldAnswerItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswerItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantFieldAnswerItem_Filter>;
};


export type SubscriptionGrantFieldAnswersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantFieldAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantFieldAnswer_Filter>;
};


export type SubscriptionGrantFieldsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantField_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantField_Filter>;
};


export type SubscriptionGrantManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGrantManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GrantManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GrantManager_Filter>;
};


export type SubscriptionGrantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Grant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Grant_Filter>;
};


export type SubscriptionNotificationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNotificationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Notification_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Notification_Filter>;
};


export type SubscriptionPartnerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPartnersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Partner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Partner_Filter>;
};


export type SubscriptionPiianswerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPiianswersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PiiAnswer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PiiAnswer_Filter>;
};


export type SubscriptionReviewArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReviewsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Review_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Review_Filter>;
};


export type SubscriptionRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};


export type SubscriptionRubricArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRubricItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRubricItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RubricItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RubricItem_Filter>;
};


export type SubscriptionRubricsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rubric_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Rubric_Filter>;
};


export type SubscriptionSocialArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSocialsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Social_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Social_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionWorkspaceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWorkspaceMemberArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWorkspaceMembersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspaceMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkspaceMember_Filter>;
};


export type SubscriptionWorkspacesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Workspace_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Workspace_Filter>;
};

export enum SupportedNetwork {
  Chain_4 = 'chain_4',
  Chain_10 = 'chain_10',
  Chain_69 = 'chain_69',
  Chain_137 = 'chain_137',
  Chain_1001 = 'chain_1001',
  Chain_44787 = 'chain_44787',
  Chain_80001 = 'chain_80001',
  Chain_245022926 = 'chain_245022926',
  Chain_1666600000 = 'chain_1666600000',
  Chain_1666700000 = 'chain_1666700000'
}

export type Token = {
  __typename?: 'Token';
  address: Scalars['Bytes'];
  decimal: Scalars['Int'];
  iconHash: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  workspace: Workspace;
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  decimal?: InputMaybe<Scalars['Int']>;
  decimal_gt?: InputMaybe<Scalars['Int']>;
  decimal_gte?: InputMaybe<Scalars['Int']>;
  decimal_in?: InputMaybe<Array<Scalars['Int']>>;
  decimal_lt?: InputMaybe<Scalars['Int']>;
  decimal_lte?: InputMaybe<Scalars['Int']>;
  decimal_not?: InputMaybe<Scalars['Int']>;
  decimal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  iconHash?: InputMaybe<Scalars['String']>;
  iconHash_contains?: InputMaybe<Scalars['String']>;
  iconHash_contains_nocase?: InputMaybe<Scalars['String']>;
  iconHash_ends_with?: InputMaybe<Scalars['String']>;
  iconHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  iconHash_gt?: InputMaybe<Scalars['String']>;
  iconHash_gte?: InputMaybe<Scalars['String']>;
  iconHash_in?: InputMaybe<Array<Scalars['String']>>;
  iconHash_lt?: InputMaybe<Scalars['String']>;
  iconHash_lte?: InputMaybe<Scalars['String']>;
  iconHash_not?: InputMaybe<Scalars['String']>;
  iconHash_not_contains?: InputMaybe<Scalars['String']>;
  iconHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  iconHash_not_ends_with?: InputMaybe<Scalars['String']>;
  iconHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  iconHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  iconHash_not_starts_with?: InputMaybe<Scalars['String']>;
  iconHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  iconHash_starts_with?: InputMaybe<Scalars['String']>;
  iconHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_contains_nocase?: InputMaybe<Scalars['String']>;
  label_ends_with?: InputMaybe<Scalars['String']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_gt?: InputMaybe<Scalars['String']>;
  label_gte?: InputMaybe<Scalars['String']>;
  label_in?: InputMaybe<Array<Scalars['String']>>;
  label_lt?: InputMaybe<Scalars['String']>;
  label_lte?: InputMaybe<Scalars['String']>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']>;
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<Scalars['String']>>;
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_starts_with?: InputMaybe<Scalars['String']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']>;
  workspace?: InputMaybe<Scalars['String']>;
  workspace_contains?: InputMaybe<Scalars['String']>;
  workspace_contains_nocase?: InputMaybe<Scalars['String']>;
  workspace_ends_with?: InputMaybe<Scalars['String']>;
  workspace_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_gt?: InputMaybe<Scalars['String']>;
  workspace_gte?: InputMaybe<Scalars['String']>;
  workspace_in?: InputMaybe<Array<Scalars['String']>>;
  workspace_lt?: InputMaybe<Scalars['String']>;
  workspace_lte?: InputMaybe<Scalars['String']>;
  workspace_not?: InputMaybe<Scalars['String']>;
  workspace_not_contains?: InputMaybe<Scalars['String']>;
  workspace_not_contains_nocase?: InputMaybe<Scalars['String']>;
  workspace_not_ends_with?: InputMaybe<Scalars['String']>;
  workspace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_not_in?: InputMaybe<Array<Scalars['String']>>;
  workspace_not_starts_with?: InputMaybe<Scalars['String']>;
  workspace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_starts_with?: InputMaybe<Scalars['String']>;
  workspace_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Token_OrderBy {
  Address = 'address',
  Decimal = 'decimal',
  IconHash = 'iconHash',
  Id = 'id',
  Label = 'label',
  Workspace = 'workspace'
}

/** Schema for a Workspace or DAO */
export type Workspace = {
  __typename?: 'Workspace';
  /** General info about the workspace */
  about: Scalars['String'];
  /** Quick description of the workspace */
  bio: Scalars['String'];
  /** Cover image for the workspace */
  coverImageIpfsHash?: Maybe<Scalars['String']>;
  /** in seconds since epoch */
  createdAtS: Scalars['Int'];
  id: Scalars['ID'];
  /** Hash to fetch the logo */
  logoIpfsHash: Scalars['String'];
  /** Members of the workspace */
  members: Array<WorkspaceMember>;
  /** Hash of the IPFS file from which the details about the workspace were pulled */
  metadataHash: Scalars['String'];
  /** Address of the owner of the workspace */
  ownerId: Scalars['Bytes'];
  partners: Array<Partner>;
  /** List of social media handles of the workspace */
  socials: Array<Social>;
  /** List of supported networks of the workspace */
  supportedNetworks: Array<SupportedNetwork>;
  /** Title of the workspace */
  title: Scalars['String'];
  /** Custom tokens setup by the workspace */
  tokens: Array<Token>;
  /** in seconds since epoch */
  updatedAtS: Scalars['Int'];
};


/** Schema for a Workspace or DAO */
export type WorkspaceMembersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspaceMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WorkspaceMember_Filter>;
};


/** Schema for a Workspace or DAO */
export type WorkspacePartnersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Partner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Partner_Filter>;
};


/** Schema for a Workspace or DAO */
export type WorkspaceSocialsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Social_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Social_Filter>;
};


/** Schema for a Workspace or DAO */
export type WorkspaceTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Token_Filter>;
};

export type WorkspaceMember = {
  __typename?: 'WorkspaceMember';
  /** What permissions the member has on the workspace */
  accessLevel: WorkspaceMemberAccessLevel;
  /** the ID of the member itself */
  actorId: Scalars['Bytes'];
  /** When the member was added */
  addedAt: Scalars['Int'];
  /** Address of the workspace member who added this member */
  addedBy: WorkspaceMember;
  email?: Maybe<Scalars['String']>;
  /** Globally unique ID of the member */
  id: Scalars['ID'];
  /** Timestamp of when the last review was done */
  lastReviewSubmittedAt: Scalars['Int'];
  /** The review IDs for which this member is owed a payment */
  outstandingReviewIds: Array<Scalars['String']>;
  /** Public key of the workspace member */
  publicKey?: Maybe<Scalars['String']>;
  /** If the member was removed, when */
  removedAt?: Maybe<Scalars['Int']>;
  /** Last update on member */
  updatedAt: Scalars['Int'];
  workspace: Workspace;
};

export enum WorkspaceMemberAccessLevel {
  Admin = 'admin',
  Member = 'member',
  Owner = 'owner',
  Reviewer = 'reviewer'
}

export type WorkspaceMember_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accessLevel?: InputMaybe<WorkspaceMemberAccessLevel>;
  accessLevel_in?: InputMaybe<Array<WorkspaceMemberAccessLevel>>;
  accessLevel_not?: InputMaybe<WorkspaceMemberAccessLevel>;
  accessLevel_not_in?: InputMaybe<Array<WorkspaceMemberAccessLevel>>;
  actorId?: InputMaybe<Scalars['Bytes']>;
  actorId_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  actorId_not?: InputMaybe<Scalars['Bytes']>;
  actorId_not_contains?: InputMaybe<Scalars['Bytes']>;
  actorId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addedAt?: InputMaybe<Scalars['Int']>;
  addedAt_gt?: InputMaybe<Scalars['Int']>;
  addedAt_gte?: InputMaybe<Scalars['Int']>;
  addedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  addedAt_lt?: InputMaybe<Scalars['Int']>;
  addedAt_lte?: InputMaybe<Scalars['Int']>;
  addedAt_not?: InputMaybe<Scalars['Int']>;
  addedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_contains?: InputMaybe<Scalars['String']>;
  addedBy_contains_nocase?: InputMaybe<Scalars['String']>;
  addedBy_ends_with?: InputMaybe<Scalars['String']>;
  addedBy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addedBy_gt?: InputMaybe<Scalars['String']>;
  addedBy_gte?: InputMaybe<Scalars['String']>;
  addedBy_in?: InputMaybe<Array<Scalars['String']>>;
  addedBy_lt?: InputMaybe<Scalars['String']>;
  addedBy_lte?: InputMaybe<Scalars['String']>;
  addedBy_not?: InputMaybe<Scalars['String']>;
  addedBy_not_contains?: InputMaybe<Scalars['String']>;
  addedBy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addedBy_not_ends_with?: InputMaybe<Scalars['String']>;
  addedBy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addedBy_not_in?: InputMaybe<Array<Scalars['String']>>;
  addedBy_not_starts_with?: InputMaybe<Scalars['String']>;
  addedBy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addedBy_starts_with?: InputMaybe<Scalars['String']>;
  addedBy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_nocase?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_nocase?: InputMaybe<Scalars['String']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<Scalars['String']>>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_nocase?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastReviewSubmittedAt?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_gt?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_gte?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastReviewSubmittedAt_lt?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_lte?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_not?: InputMaybe<Scalars['Int']>;
  lastReviewSubmittedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  outstandingReviewIds?: InputMaybe<Array<Scalars['String']>>;
  outstandingReviewIds_contains?: InputMaybe<Array<Scalars['String']>>;
  outstandingReviewIds_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  outstandingReviewIds_not?: InputMaybe<Array<Scalars['String']>>;
  outstandingReviewIds_not_contains?: InputMaybe<Array<Scalars['String']>>;
  outstandingReviewIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_contains?: InputMaybe<Scalars['String']>;
  publicKey_contains_nocase?: InputMaybe<Scalars['String']>;
  publicKey_ends_with?: InputMaybe<Scalars['String']>;
  publicKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<Scalars['String']>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_not?: InputMaybe<Scalars['String']>;
  publicKey_not_contains?: InputMaybe<Scalars['String']>;
  publicKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  publicKey_not_ends_with?: InputMaybe<Scalars['String']>;
  publicKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publicKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  publicKey_not_starts_with?: InputMaybe<Scalars['String']>;
  publicKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publicKey_starts_with?: InputMaybe<Scalars['String']>;
  publicKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  removedAt?: InputMaybe<Scalars['Int']>;
  removedAt_gt?: InputMaybe<Scalars['Int']>;
  removedAt_gte?: InputMaybe<Scalars['Int']>;
  removedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  removedAt_lt?: InputMaybe<Scalars['Int']>;
  removedAt_lte?: InputMaybe<Scalars['Int']>;
  removedAt_not?: InputMaybe<Scalars['Int']>;
  removedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  workspace?: InputMaybe<Scalars['String']>;
  workspace_contains?: InputMaybe<Scalars['String']>;
  workspace_contains_nocase?: InputMaybe<Scalars['String']>;
  workspace_ends_with?: InputMaybe<Scalars['String']>;
  workspace_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_gt?: InputMaybe<Scalars['String']>;
  workspace_gte?: InputMaybe<Scalars['String']>;
  workspace_in?: InputMaybe<Array<Scalars['String']>>;
  workspace_lt?: InputMaybe<Scalars['String']>;
  workspace_lte?: InputMaybe<Scalars['String']>;
  workspace_not?: InputMaybe<Scalars['String']>;
  workspace_not_contains?: InputMaybe<Scalars['String']>;
  workspace_not_contains_nocase?: InputMaybe<Scalars['String']>;
  workspace_not_ends_with?: InputMaybe<Scalars['String']>;
  workspace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_not_in?: InputMaybe<Array<Scalars['String']>>;
  workspace_not_starts_with?: InputMaybe<Scalars['String']>;
  workspace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  workspace_starts_with?: InputMaybe<Scalars['String']>;
  workspace_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum WorkspaceMember_OrderBy {
  AccessLevel = 'accessLevel',
  ActorId = 'actorId',
  AddedAt = 'addedAt',
  AddedBy = 'addedBy',
  Email = 'email',
  Id = 'id',
  LastReviewSubmittedAt = 'lastReviewSubmittedAt',
  OutstandingReviewIds = 'outstandingReviewIds',
  PublicKey = 'publicKey',
  RemovedAt = 'removedAt',
  UpdatedAt = 'updatedAt',
  Workspace = 'workspace'
}

export type Workspace_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  about?: InputMaybe<Scalars['String']>;
  about_contains?: InputMaybe<Scalars['String']>;
  about_contains_nocase?: InputMaybe<Scalars['String']>;
  about_ends_with?: InputMaybe<Scalars['String']>;
  about_ends_with_nocase?: InputMaybe<Scalars['String']>;
  about_gt?: InputMaybe<Scalars['String']>;
  about_gte?: InputMaybe<Scalars['String']>;
  about_in?: InputMaybe<Array<Scalars['String']>>;
  about_lt?: InputMaybe<Scalars['String']>;
  about_lte?: InputMaybe<Scalars['String']>;
  about_not?: InputMaybe<Scalars['String']>;
  about_not_contains?: InputMaybe<Scalars['String']>;
  about_not_contains_nocase?: InputMaybe<Scalars['String']>;
  about_not_ends_with?: InputMaybe<Scalars['String']>;
  about_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  about_not_in?: InputMaybe<Array<Scalars['String']>>;
  about_not_starts_with?: InputMaybe<Scalars['String']>;
  about_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  about_starts_with?: InputMaybe<Scalars['String']>;
  about_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bio_contains?: InputMaybe<Scalars['String']>;
  bio_contains_nocase?: InputMaybe<Scalars['String']>;
  bio_ends_with?: InputMaybe<Scalars['String']>;
  bio_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bio_gt?: InputMaybe<Scalars['String']>;
  bio_gte?: InputMaybe<Scalars['String']>;
  bio_in?: InputMaybe<Array<Scalars['String']>>;
  bio_lt?: InputMaybe<Scalars['String']>;
  bio_lte?: InputMaybe<Scalars['String']>;
  bio_not?: InputMaybe<Scalars['String']>;
  bio_not_contains?: InputMaybe<Scalars['String']>;
  bio_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  bio_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bio_not_in?: InputMaybe<Array<Scalars['String']>>;
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  bio_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bio_starts_with?: InputMaybe<Scalars['String']>;
  bio_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_contains?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_ends_with?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_gt?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_gte?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  coverImageIpfsHash_lt?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_lte?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_contains?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  coverImageIpfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_starts_with?: InputMaybe<Scalars['String']>;
  coverImageIpfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtS?: InputMaybe<Scalars['Int']>;
  createdAtS_gt?: InputMaybe<Scalars['Int']>;
  createdAtS_gte?: InputMaybe<Scalars['Int']>;
  createdAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtS_lt?: InputMaybe<Scalars['Int']>;
  createdAtS_lte?: InputMaybe<Scalars['Int']>;
  createdAtS_not?: InputMaybe<Scalars['Int']>;
  createdAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logoIpfsHash?: InputMaybe<Scalars['String']>;
  logoIpfsHash_contains?: InputMaybe<Scalars['String']>;
  logoIpfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  logoIpfsHash_ends_with?: InputMaybe<Scalars['String']>;
  logoIpfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logoIpfsHash_gt?: InputMaybe<Scalars['String']>;
  logoIpfsHash_gte?: InputMaybe<Scalars['String']>;
  logoIpfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  logoIpfsHash_lt?: InputMaybe<Scalars['String']>;
  logoIpfsHash_lte?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_contains?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  logoIpfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  logoIpfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  logoIpfsHash_starts_with?: InputMaybe<Scalars['String']>;
  logoIpfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash?: InputMaybe<Scalars['String']>;
  metadataHash_contains?: InputMaybe<Scalars['String']>;
  metadataHash_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_ends_with?: InputMaybe<Scalars['String']>;
  metadataHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_gt?: InputMaybe<Scalars['String']>;
  metadataHash_gte?: InputMaybe<Scalars['String']>;
  metadataHash_in?: InputMaybe<Array<Scalars['String']>>;
  metadataHash_lt?: InputMaybe<Scalars['String']>;
  metadataHash_lte?: InputMaybe<Scalars['String']>;
  metadataHash_not?: InputMaybe<Scalars['String']>;
  metadataHash_not_contains?: InputMaybe<Scalars['String']>;
  metadataHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_not_ends_with?: InputMaybe<Scalars['String']>;
  metadataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataHash_not_starts_with?: InputMaybe<Scalars['String']>;
  metadataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash_starts_with?: InputMaybe<Scalars['String']>;
  metadataHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['Bytes']>;
  ownerId_contains?: InputMaybe<Scalars['Bytes']>;
  ownerId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ownerId_not?: InputMaybe<Scalars['Bytes']>;
  ownerId_not_contains?: InputMaybe<Scalars['Bytes']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  partners?: InputMaybe<Array<Scalars['String']>>;
  partners_contains?: InputMaybe<Array<Scalars['String']>>;
  partners_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  partners_not?: InputMaybe<Array<Scalars['String']>>;
  partners_not_contains?: InputMaybe<Array<Scalars['String']>>;
  partners_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  socials?: InputMaybe<Array<Scalars['String']>>;
  socials_contains?: InputMaybe<Array<Scalars['String']>>;
  socials_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  socials_not?: InputMaybe<Array<Scalars['String']>>;
  socials_not_contains?: InputMaybe<Array<Scalars['String']>>;
  socials_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  supportedNetworks?: InputMaybe<Array<SupportedNetwork>>;
  supportedNetworks_contains?: InputMaybe<Array<SupportedNetwork>>;
  supportedNetworks_contains_nocase?: InputMaybe<Array<SupportedNetwork>>;
  supportedNetworks_not?: InputMaybe<Array<SupportedNetwork>>;
  supportedNetworks_not_contains?: InputMaybe<Array<SupportedNetwork>>;
  supportedNetworks_not_contains_nocase?: InputMaybe<Array<SupportedNetwork>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAtS?: InputMaybe<Scalars['Int']>;
  updatedAtS_gt?: InputMaybe<Scalars['Int']>;
  updatedAtS_gte?: InputMaybe<Scalars['Int']>;
  updatedAtS_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAtS_lt?: InputMaybe<Scalars['Int']>;
  updatedAtS_lte?: InputMaybe<Scalars['Int']>;
  updatedAtS_not?: InputMaybe<Scalars['Int']>;
  updatedAtS_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Workspace_OrderBy {
  About = 'about',
  Bio = 'bio',
  CoverImageIpfsHash = 'coverImageIpfsHash',
  CreatedAtS = 'createdAtS',
  Id = 'id',
  LogoIpfsHash = 'logoIpfsHash',
  Members = 'members',
  MetadataHash = 'metadataHash',
  OwnerId = 'ownerId',
  Partners = 'partners',
  Socials = 'socials',
  SupportedNetworks = 'supportedNetworks',
  Title = 'title',
  Tokens = 'tokens',
  UpdatedAtS = 'updatedAtS'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type ApplicationUpdateQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
  workspaceId: Scalars['String'];
}>;


export type ApplicationUpdateQuery = { __typename?: 'Query', grants: Array<{ __typename?: 'Grant', id: string, workspace: { __typename?: 'Workspace', id: string, chain: Array<SupportedNetwork> }, applications: Array<{ __typename?: 'GrantApplication', id: string, state: ApplicationState, version: number, updatedAtS: number, feedbackDao?: string | null }> }> };

export type DaoCreatedQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
}>;


export type DaoCreatedQuery = { __typename?: 'Query', workspaces: Array<{ __typename?: 'Workspace', id: string, title: string, about: string, createdAtS: number, chain: Array<SupportedNetwork>, members: Array<{ __typename?: 'WorkspaceMember', actorId: string, accessLevel: WorkspaceMemberAccessLevel, updatedAt: number, addedBy: { __typename?: 'WorkspaceMember', actorId: string } }> }> };

export type FundSentQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
  workspaceId: Scalars['String'];
}>;


export type FundSentQuery = { __typename?: 'Query', grants: Array<{ __typename?: 'Grant', id: string, workspace: { __typename?: 'Workspace', id: string, chain: Array<SupportedNetwork> }, reward: { __typename?: 'Reward', id: string, committed: string, asset: string, token?: { __typename?: 'Token', label: string, decimal: number } | null }, fundTransfers: Array<{ __typename?: 'FundsTransfer', id: string, type: FundsTransferType, milestone?: { __typename?: 'ApplicationMilestone', id: string, title: string, amount: string, amountPaid: string } | null }> }> };

export type GrantAppliedToQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
  workspaceId: Scalars['String'];
}>;


export type GrantAppliedToQuery = { __typename?: 'Query', grants: Array<{ __typename?: 'Grant', id: string, reward: { __typename?: 'Reward', id: string, asset: string, committed: string, token?: { __typename?: 'Token', id: string, label: string, decimal: number } | null }, workspace: { __typename?: 'Workspace', id: string, chain: Array<SupportedNetwork> }, applications: Array<{ __typename?: 'GrantApplication', id: string, createdAtS: number, updatedAtS: number, createdBy: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', title: string }> }>, applicantEmail: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', email: string }> }>, milestones: Array<{ __typename?: 'ApplicationMilestone', id: string, title: string, amount: string, amountPaid: string, state: MilestoneState, feedbackFromDAO?: string | null, feedbackFromDev?: string | null }> }> }> };

export type GrantCreatedQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
  workspaceId: Scalars['String'];
}>;


export type GrantCreatedQuery = { __typename?: 'Query', grants: Array<{ __typename?: 'Grant', id: string, title: string, summary: string, creatorId: string, createdAtS: number, updatedAtS?: number | null, workspace: { __typename?: 'Workspace', id: string, chain: Array<SupportedNetwork> }, reward: { __typename?: 'Reward', id: string, committed: string, asset: string, token?: { __typename?: 'Token', id: string, label: string, decimal: number } | null } }> };

export type ReviewerAddedToGrantApplicationQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
  workspaceId: Scalars['String'];
}>;


export type ReviewerAddedToGrantApplicationQuery = { __typename?: 'Query', grants: Array<{ __typename?: 'Grant', id: string, reward: { __typename?: 'Reward', id: string, asset: string, committed: string, token?: { __typename?: 'Token', id: string } | null }, workspace: { __typename?: 'Workspace', id: string, chain: Array<SupportedNetwork> }, applications: Array<{ __typename?: 'GrantApplication', id: string, state: ApplicationState, version: number, createdAtS: number, createdBy: string, projectName: Array<{ __typename?: 'GrantFieldAnswer', values: Array<{ __typename?: 'GrantFieldAnswerItem', title: string }> }>, milestones: Array<{ __typename?: 'ApplicationMilestone', id: string, title: string, amount: string, amountPaid: string, feedbackDao?: string | null, feedbackDev?: string | null, state: MilestoneState }> }> }> };

export type ReviewerInvitedToDaoQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
  workspaceId: Scalars['String'];
}>;


export type ReviewerInvitedToDaoQuery = { __typename?: 'Query', workspaceMembers: Array<{ __typename?: 'WorkspaceMember', id: string, email?: string | null, actorId: string, updatedAt: number, workspace: { __typename?: 'Workspace', id: string, title: string, chain: Array<SupportedNetwork> } }> };

export type ReviewerSubmittedReviewQueryVariables = Exact<{
  lowerLimit: Scalars['Int'];
  upperLimit: Scalars['Int'];
  workspaceId: Scalars['String'];
}>;


export type ReviewerSubmittedReviewQuery = { __typename?: 'Query', grants: Array<{ __typename?: 'Grant', id: string, applications: Array<{ __typename?: 'GrantApplication', id: string, reviews: Array<{ __typename?: 'Review', id: string, reviewerId: string, publicReviewDataHash?: string | null, createdAtS: number, reviewer?: { __typename?: 'WorkspaceMember', actorId: string, workspace: { __typename?: 'Workspace', id: string, chain: Array<SupportedNetwork> } } | null }> }> }> };


export const ApplicationUpdateDocument = gql`
    query ApplicationUpdate($lowerLimit: Int!, $upperLimit: Int!, $workspaceId: String!) {
  grants(subgraphError: allow, where: {workspace: $workspaceId}) {
    id
    workspace {
      id
      chain: supportedNetworks
    }
    applications(
      where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, version_gt: 1, state_not_in: [submitted]}
      orderBy: updatedAtS
      orderDirection: desc
    ) {
      id
      state
      version
      updatedAtS
      feedbackDao
    }
  }
}
    `;

/**
 * __useApplicationUpdateQuery__
 *
 * To run a query within a React component, call `useApplicationUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationUpdateQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useApplicationUpdateQuery(baseOptions: Apollo.QueryHookOptions<ApplicationUpdateQuery, ApplicationUpdateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ApplicationUpdateQuery, ApplicationUpdateQueryVariables>(ApplicationUpdateDocument, options);
      }
export function useApplicationUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApplicationUpdateQuery, ApplicationUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ApplicationUpdateQuery, ApplicationUpdateQueryVariables>(ApplicationUpdateDocument, options);
        }
export type ApplicationUpdateQueryHookResult = ReturnType<typeof useApplicationUpdateQuery>;
export type ApplicationUpdateLazyQueryHookResult = ReturnType<typeof useApplicationUpdateLazyQuery>;
export type ApplicationUpdateQueryResult = Apollo.QueryResult<ApplicationUpdateQuery, ApplicationUpdateQueryVariables>;
export const DaoCreatedDocument = gql`
    query DAOCreated($lowerLimit: Int!, $upperLimit: Int!) {
  workspaces(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit}
    orderBy: createdAtS
    orderDirection: desc
  ) {
    id
    title
    about
    chain: supportedNetworks
    createdAtS
    members(
      where: {accessLevel_not: reviewer}
      orderBy: updatedAt
      orderDirection: asc
    ) {
      actorId
      addedBy {
        actorId
      }
      accessLevel
      updatedAt
    }
  }
}
    `;

/**
 * __useDaoCreatedQuery__
 *
 * To run a query within a React component, call `useDaoCreatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useDaoCreatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDaoCreatedQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
export function useDaoCreatedQuery(baseOptions: Apollo.QueryHookOptions<DaoCreatedQuery, DaoCreatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DaoCreatedQuery, DaoCreatedQueryVariables>(DaoCreatedDocument, options);
      }
export function useDaoCreatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DaoCreatedQuery, DaoCreatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DaoCreatedQuery, DaoCreatedQueryVariables>(DaoCreatedDocument, options);
        }
export type DaoCreatedQueryHookResult = ReturnType<typeof useDaoCreatedQuery>;
export type DaoCreatedLazyQueryHookResult = ReturnType<typeof useDaoCreatedLazyQuery>;
export type DaoCreatedQueryResult = Apollo.QueryResult<DaoCreatedQuery, DaoCreatedQueryVariables>;
export const FundSentDocument = gql`
    query FundSent($lowerLimit: Int!, $upperLimit: Int!, $workspaceId: String!) {
  grants(subgraphError: allow, where: {workspace: $workspaceId}) {
    id
    workspace {
      id
      chain: supportedNetworks
    }
    reward {
      id
      committed
      asset
      token {
        label
        decimal
      }
    }
    fundTransfers(
      where: {createdAtS_gt: $lowerLimit, createdAtS_lte: $upperLimit, type: funds_disbursed}
      orderBy: createdAtS
      orderDirection: desc
    ) {
      id
      type
      milestone {
        id
        title
        amount
        amountPaid
      }
    }
  }
}
    `;

/**
 * __useFundSentQuery__
 *
 * To run a query within a React component, call `useFundSentQuery` and pass it any options that fit your needs.
 * When your component renders, `useFundSentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFundSentQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useFundSentQuery(baseOptions: Apollo.QueryHookOptions<FundSentQuery, FundSentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FundSentQuery, FundSentQueryVariables>(FundSentDocument, options);
      }
export function useFundSentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FundSentQuery, FundSentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FundSentQuery, FundSentQueryVariables>(FundSentDocument, options);
        }
export type FundSentQueryHookResult = ReturnType<typeof useFundSentQuery>;
export type FundSentLazyQueryHookResult = ReturnType<typeof useFundSentLazyQuery>;
export type FundSentQueryResult = Apollo.QueryResult<FundSentQuery, FundSentQueryVariables>;
export const GrantAppliedToDocument = gql`
    query GrantAppliedTo($lowerLimit: Int!, $upperLimit: Int!, $workspaceId: String!) {
  grants(subgraphError: allow, where: {workspace: $workspaceId}) {
    id
    reward {
      id
      asset
      committed
      token {
        id
        label
        decimal
      }
    }
    workspace {
      id
      chain: supportedNetworks
    }
    applications(
      where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, version: 1}
    ) {
      id
      projectName: fields(where: {field_ends_with: "projectName"}) {
        values {
          title: value
        }
      }
      applicantEmail: fields(where: {field_ends_with: "applicantEmail"}) {
        values {
          email: value
        }
      }
      createdBy: applicantId
      createdAtS
      updatedAtS
      milestones {
        id
        title
        amount
        amountPaid
        feedbackFromDAO: feedbackDao
        feedbackFromDev: feedbackDev
        state
      }
    }
  }
}
    `;

/**
 * __useGrantAppliedToQuery__
 *
 * To run a query within a React component, call `useGrantAppliedToQuery` and pass it any options that fit your needs.
 * When your component renders, `useGrantAppliedToQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGrantAppliedToQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useGrantAppliedToQuery(baseOptions: Apollo.QueryHookOptions<GrantAppliedToQuery, GrantAppliedToQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GrantAppliedToQuery, GrantAppliedToQueryVariables>(GrantAppliedToDocument, options);
      }
export function useGrantAppliedToLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GrantAppliedToQuery, GrantAppliedToQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GrantAppliedToQuery, GrantAppliedToQueryVariables>(GrantAppliedToDocument, options);
        }
export type GrantAppliedToQueryHookResult = ReturnType<typeof useGrantAppliedToQuery>;
export type GrantAppliedToLazyQueryHookResult = ReturnType<typeof useGrantAppliedToLazyQuery>;
export type GrantAppliedToQueryResult = Apollo.QueryResult<GrantAppliedToQuery, GrantAppliedToQueryVariables>;
export const GrantCreatedDocument = gql`
    query GrantCreated($lowerLimit: Int!, $upperLimit: Int!, $workspaceId: String!) {
  grants(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, workspace: $workspaceId}
    orderBy: createdAtS
    orderDirection: desc
  ) {
    id
    title
    summary
    workspace {
      id
      chain: supportedNetworks
    }
    creatorId
    createdAtS
    updatedAtS
    reward {
      id
      committed
      asset
      token {
        id
        label
        decimal
      }
    }
  }
}
    `;

/**
 * __useGrantCreatedQuery__
 *
 * To run a query within a React component, call `useGrantCreatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGrantCreatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGrantCreatedQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useGrantCreatedQuery(baseOptions: Apollo.QueryHookOptions<GrantCreatedQuery, GrantCreatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GrantCreatedQuery, GrantCreatedQueryVariables>(GrantCreatedDocument, options);
      }
export function useGrantCreatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GrantCreatedQuery, GrantCreatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GrantCreatedQuery, GrantCreatedQueryVariables>(GrantCreatedDocument, options);
        }
export type GrantCreatedQueryHookResult = ReturnType<typeof useGrantCreatedQuery>;
export type GrantCreatedLazyQueryHookResult = ReturnType<typeof useGrantCreatedLazyQuery>;
export type GrantCreatedQueryResult = Apollo.QueryResult<GrantCreatedQuery, GrantCreatedQueryVariables>;
export const ReviewerAddedToGrantApplicationDocument = gql`
    query ReviewerAddedToGrantApplication($lowerLimit: Int!, $upperLimit: Int!, $workspaceId: String!) {
  grants(subgraphError: allow, where: {workspace: $workspaceId}) {
    id
    reward {
      id
      asset
      committed
      token {
        id
      }
    }
    workspace {
      id
      chain: supportedNetworks
    }
    applications(
      where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, version_gt: 1, reviewers_not: []}
    ) {
      id
      state
      version
      projectName: fields(where: {field_ends_with: "projectName"}) {
        values {
          title: value
        }
      }
      createdBy: applicantId
      createdAtS
      milestones {
        id
        title
        amount
        amountPaid
        feedbackDao
        feedbackDev
        state
      }
    }
  }
}
    `;

/**
 * __useReviewerAddedToGrantApplicationQuery__
 *
 * To run a query within a React component, call `useReviewerAddedToGrantApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewerAddedToGrantApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewerAddedToGrantApplicationQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useReviewerAddedToGrantApplicationQuery(baseOptions: Apollo.QueryHookOptions<ReviewerAddedToGrantApplicationQuery, ReviewerAddedToGrantApplicationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewerAddedToGrantApplicationQuery, ReviewerAddedToGrantApplicationQueryVariables>(ReviewerAddedToGrantApplicationDocument, options);
      }
export function useReviewerAddedToGrantApplicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewerAddedToGrantApplicationQuery, ReviewerAddedToGrantApplicationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewerAddedToGrantApplicationQuery, ReviewerAddedToGrantApplicationQueryVariables>(ReviewerAddedToGrantApplicationDocument, options);
        }
export type ReviewerAddedToGrantApplicationQueryHookResult = ReturnType<typeof useReviewerAddedToGrantApplicationQuery>;
export type ReviewerAddedToGrantApplicationLazyQueryHookResult = ReturnType<typeof useReviewerAddedToGrantApplicationLazyQuery>;
export type ReviewerAddedToGrantApplicationQueryResult = Apollo.QueryResult<ReviewerAddedToGrantApplicationQuery, ReviewerAddedToGrantApplicationQueryVariables>;
export const ReviewerInvitedToDaoDocument = gql`
    query ReviewerInvitedToDAO($lowerLimit: Int!, $upperLimit: Int!, $workspaceId: String!) {
  workspaceMembers(
    subgraphError: allow
    where: {updatedAt_gt: $lowerLimit, updatedAt_lte: $upperLimit, email_not: null, accessLevel: reviewer, workspace: $workspaceId}
    orderBy: updatedAt
    orderDirection: desc
  ) {
    id
    email
    workspace {
      id
      title
      chain: supportedNetworks
    }
    actorId
    updatedAt
  }
}
    `;

/**
 * __useReviewerInvitedToDaoQuery__
 *
 * To run a query within a React component, call `useReviewerInvitedToDaoQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewerInvitedToDaoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewerInvitedToDaoQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useReviewerInvitedToDaoQuery(baseOptions: Apollo.QueryHookOptions<ReviewerInvitedToDaoQuery, ReviewerInvitedToDaoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewerInvitedToDaoQuery, ReviewerInvitedToDaoQueryVariables>(ReviewerInvitedToDaoDocument, options);
      }
export function useReviewerInvitedToDaoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewerInvitedToDaoQuery, ReviewerInvitedToDaoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewerInvitedToDaoQuery, ReviewerInvitedToDaoQueryVariables>(ReviewerInvitedToDaoDocument, options);
        }
export type ReviewerInvitedToDaoQueryHookResult = ReturnType<typeof useReviewerInvitedToDaoQuery>;
export type ReviewerInvitedToDaoLazyQueryHookResult = ReturnType<typeof useReviewerInvitedToDaoLazyQuery>;
export type ReviewerInvitedToDaoQueryResult = Apollo.QueryResult<ReviewerInvitedToDaoQuery, ReviewerInvitedToDaoQueryVariables>;
export const ReviewerSubmittedReviewDocument = gql`
    query ReviewerSubmittedReview($lowerLimit: Int!, $upperLimit: Int!, $workspaceId: String!) {
  grants(subgraphError: allow, where: {workspace: $workspaceId}) {
    id
    applications {
      id
      reviews(where: {createdAtS_gt: $lowerLimit, createdAtS_lte: $upperLimit}) {
        id
        reviewerId
        reviewer {
          actorId
          workspace {
            id
            chain: supportedNetworks
          }
        }
        publicReviewDataHash
        createdAtS
      }
    }
  }
}
    `;

/**
 * __useReviewerSubmittedReviewQuery__
 *
 * To run a query within a React component, call `useReviewerSubmittedReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewerSubmittedReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewerSubmittedReviewQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useReviewerSubmittedReviewQuery(baseOptions: Apollo.QueryHookOptions<ReviewerSubmittedReviewQuery, ReviewerSubmittedReviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewerSubmittedReviewQuery, ReviewerSubmittedReviewQueryVariables>(ReviewerSubmittedReviewDocument, options);
      }
export function useReviewerSubmittedReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewerSubmittedReviewQuery, ReviewerSubmittedReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewerSubmittedReviewQuery, ReviewerSubmittedReviewQueryVariables>(ReviewerSubmittedReviewDocument, options);
        }
export type ReviewerSubmittedReviewQueryHookResult = ReturnType<typeof useReviewerSubmittedReviewQuery>;
export type ReviewerSubmittedReviewLazyQueryHookResult = ReturnType<typeof useReviewerSubmittedReviewLazyQuery>;
export type ReviewerSubmittedReviewQueryResult = Apollo.QueryResult<ReviewerSubmittedReviewQuery, ReviewerSubmittedReviewQueryVariables>;