import { useQuery, UseQueryOptions, UseQueryResult } from 'data'
import { request } from '1sdk/data/request'

type Response = {
  url: string
}

export default function useCheckout(
  opts?: UseQueryOptions,
): UseQueryResult<Response, Error> {
  return useQuery<Response, Error>({
    queryKey: ['billing-portal', opts],
    queryFn: () => request(
      '/end-users/billing/portal',
      {
        method: 'GET',
        ...opts,
      },
    ),
  })
}
