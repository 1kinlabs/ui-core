import { Nullable } from './Nullable'

export type Reward = {
  image: string,
  description: string
}

export type Series = {
  name: string,
  amazon_id: string,
  amazon_asin: string,
  logo: string,
  rewards: Reward[],
} & Partial<Nullable<{
  claim_instructions: string
}>>
