import { request, requestPublic } from './request'

export function getUser() {
  return request(`/end-users/getUserDetail?_t=${Date.now()}`)
}

export async function updateUser(body: Record<string, unknown>) {
  return request('/end-users/updateMe', {
    method: 'POST',
    body,
  })
}

export async function register(body: Record<string, unknown>) {
  return requestPublic('/end-users/register', {
    method: 'POST',
    body,
  })
}

export async function resendTwoStepCode(resendToken: string) {
  return requestPublic('/end-users/resendTwostepCode', {
    method: 'POST',
    body: { resendToken },
  })
}

export async function verifyTwoStepCode(code: string, resendToken: string) {
  return requestPublic('/end-users/verifyTwostep', {
    method: 'POST',
    body: { code, resendToken },
  })
}

export async function collectEmail(email: string, token: string) {
  return requestPublic('/end-users/setUserEmail', {
    method: 'POST',
    body: { email, token },
  })
}

export async function auth(body: Record<string, unknown>) {
  return requestPublic('/end-users/auth', {
    method: 'POST',
    body,
  })
}

export async function checkPasswordFromEmail(body: Record<string, unknown>) {
  return requestPublic('/end-users/checkPasswordFromEmail', {
    method: 'POST',
    body,
  })
}

export async function handleAmazonRedemption(benefitId: string, amazonToken: string) {
  return request(`/benefits/${benefitId}/redeem`, {
    method: 'POST',
    headers: {
      'x-amazon-token': amazonToken,
    },
  })
}

export async function forgotPassword(email: string) {
  return requestPublic('/end-users/requestResetPassword', {
    method: 'POST',
    body: { email },
  })
}

export async function checkValidResetPasswordToken(token: string) {
  return requestPublic('/end-users/checkValidResetPasswordToken', {
    method: 'POST',
    body: { token },
  })
}

export async function resetPassword(token: string, password: string) {
  return requestPublic('/end-users/resetPassword', {
    method: 'POST',
    body: { token, password },
  })
}
