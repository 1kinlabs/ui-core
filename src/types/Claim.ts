import { ClaimStatus } from 'enums/ClaimStatus'
import { Nullable } from './Nullable'

export type Claim = {
  id: number;
  uid: string;
  claim_code: string;
  status: ClaimStatus;
} & Partial<Nullable<{
  createdAt: string;
  updatedAt: string;
  created_by_id: number;
  updated_by_id: number;
}>>
