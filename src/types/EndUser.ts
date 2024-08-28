import { Nullable } from './Nullable'
import { Subscription } from './Subscription'

export type EndUser = {
  id: number;
} & Partial<Nullable<{
  email: string;
  username: string;
  availableCredits: number;
  nonce: string;
  token: string;
  image: string;
  contact: string;
  country: string;
  twostep_number: string;
  password: string;
  enable_twostep: boolean;
  fullname: string;
  displayname: string;
  created_at: string;
  updated_at: string;
  created_by_id: number;
  updated_by_id: number;
  source_type: string;
  city: string;
  state: string;
  postal_code: string;
  firstname: string;
  lastname: string;
  score: number;
  user_level: number;
  referral_user_id: number;
  referral_code: string;
  referred_by: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  enabled: boolean;
  prefinery_status: string;
  email_verified: boolean;
  twitter_handle: string;
  discord_handle: string;
  twitch_handle: string;
  instagram_handle: string;
  waitlist_position: number;
  shares: number;
  email_verification_sent: boolean;
  subscription: Subscription
}>>
