import { getStringifiedFeatureFlagOverrides } from 'flags/utils'

export const BACKEND_BASE_URL = (
  typeof window !== 'undefined' && window.localStorage.getItem('BACKEND_BASE_URL')
) || process.env.NEXT_PUBLIC_BACKEND_URL

export const BACKEND_BASE_API_URL = `${BACKEND_BASE_URL}/v1`

export type Params = {
  method: string
  body?: Record<string, unknown>
  headers?: Record<string, string>
}

export type ResponseError = {
  error: {
    status: number
    statusText: string
  }
}

export async function requestPublic<T = unknown>(url: string, params: Params = { method: 'GET' }): Promise<T> {
  const { method, body, headers } = params

  const response = await fetch(BACKEND_BASE_API_URL + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (response.ok) {
    return response.json() as T
  }

  throw new Error(`Error making request to ${url}: ${response.status} ${response.statusText}`)
}

export async function request<T = unknown>(url: string, params: Params = { method: 'GET' }) {
  const { method, body, headers } = params
  const auth = window.localStorage.getItem(`${process.env.NEXT_PUBLIC_LS_KEY}`)
  const featureFlagOverrides = getStringifiedFeatureFlagOverrides()

  if (!auth) {
    throw new Error('No auth token found')
  }

  return requestPublic<T>(url, {
    method,
    headers: {
      Authorization: auth,
      ...headers,
      ...(featureFlagOverrides ? { FeatureFlagOverrides: featureFlagOverrides } : {}),
    },
    body,
  })
}
