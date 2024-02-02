import request, { Params } from './request'

const authRequest = (params: Params) => request('/end-users/auth', params)

export function loginWithAmazon(authData: Record<string, unknown>) {
  return authRequest({
    method: 'POST',
    body: {
      authType: 'amazon',
      authData,
    },
  })
}
