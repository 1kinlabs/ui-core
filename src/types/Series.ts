export type Reward = {
  image: string,
  description: string
}

export type Series = {
  amazon_id: string,
  amazon_asin: string,
  logo: string,
  rewards: Reward[],
  claim_instructions: string | null
}
