import { BenefitErrorCode } from 'enums/BenefitErrorCode'
import { Nullable } from './Nullable'
import { EndUser } from './EndUser'
import { Series } from './Series'

export type Benefit = {
  amazon_id: string,
  expires_at: string,

  series: Series
} & Partial<Nullable<{
  available: boolean,
  redeemed_at: string,
  redemption_id: string,
  end_user: EndUser,
}>>

export type BenefitErrorDetails = {
  code: BenefitErrorCode
}

export type BenefitError = {
  details: BenefitErrorDetails,
  message: string,
  name: string,
  status: number
}
