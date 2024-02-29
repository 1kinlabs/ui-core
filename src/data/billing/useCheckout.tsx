import { useMutation, UseMutationOptions, UseMutationResult } from 'data'
import { PricingPlan } from 'types/PricingPlan'
import { request } from '1sdk/data/request'

type Response = {
  url: string
}

export default function useCheckout(
  plan: PricingPlan,
  opts?: UseMutationOptions,
): UseMutationResult<Response, Error, unknown> {
  return useMutation<Response, Error, unknown>({
    mutationFn: () => request(
      '/end-users/checkout',
      {
        method: 'POST',
        body: {
          plan,
        },
        ...opts,
      },
    ),
  })
}
