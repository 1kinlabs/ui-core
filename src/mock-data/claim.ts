import { ClaimStatus } from 'enums/ClaimStatus'
import { Claim } from 'types/Claim'

export const inProgressClaim : Claim = {
  id: 12,
  uid: '05abd583-8f35-445b-854a-1b7cca8215db',
  claim_code: 'f3cafc32-020b-424e-944a-c48f0a1c8e30',
  status: ClaimStatus.IN_PROGRESS,
}

export const completedClaim : Claim = {
  id: 12,
  uid: '50b095e8-b09e-42f1-82ae-4cd77686c47f',
  claim_code: 'dfjWEJFKwka20=-fe',
  status: ClaimStatus.COMPLETED,
}
