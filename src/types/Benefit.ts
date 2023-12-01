import { EndUser } from './EndUser'
import { Series } from './Series'

export type Benefit = {
  amazon_id: string,
  expires_at: string,
  available: boolean | null,
  redeemed_at: string | null,
  redemption_id: string | null,
  end_user: EndUser | null,
  series: Series
}
