export enum SubscriptionType {
  UNLIMITED = 'UNLIMITED',
  LIMITED = 'LIMITED',
}

export enum SubscriptionFrequency {
  MONTHLY = 'MONTHLY',
  ANNUAL = 'ANNUAL',
}

export enum SourceType {
  STRIPE = 'STRIPE',
}

export type Subscription = {
  id: number
  userId: number
  type: SubscriptionType
  frequency: SubscriptionFrequency
  createdAt: string
  expiresAt: string
  sourceId: string
  sourceType: SourceType
  sourceData: Record<string, unknown>
}
