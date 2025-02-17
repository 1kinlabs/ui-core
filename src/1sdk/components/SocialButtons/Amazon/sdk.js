import { rslError, timestampFromNow } from './util'

let defaultScopes = ['profile']

/**
 * Loads Amazon SDK.
 * @see https://developer.amazon.com/public/apis/engage/login-with-amazon/docs/install_sdk_javascript.html
 */
const load = ({ appId, scope }) => new Promise((resolve) => {
  // @TODO: handle errors
  if (window.document.getElementById('amazon-sdk')) {
    return resolve()
  }

  if (Array.isArray(scope)) {
    defaultScopes = defaultScopes.concat(scope)
  } else if (typeof scope === 'string' && scope) {
    defaultScopes = defaultScopes.concat(scope.split(','))
  }

  defaultScopes = defaultScopes.reduce((acc, item) => {
    if (typeof item === 'string' && acc.indexOf(item) === -1) {
      acc.push(item.trim())
    }

    return acc
  }, [])

  const firstJS = window.document.getElementsByTagName('script')[0]
  const js = window.document.createElement('script')

  js.src = 'https://api-cdn.amazon.com/sdk/login1.js'
  js.id = 'amazon-sdk'
  js.async = true

  window.onAmazonLoginReady = () => {
    window.amazon.Login.setClientId(appId)

    return resolve()
  }

  if (!firstJS) {
    window.document.appendChild(js)
  } else {
    firstJS.parentNode.appendChild(js)
  }
})

/**
 * Checks if user is logged in to app through Amazon.
 * Requires SDK to be loaded first.
 * @see https://developer.amazon.com/public/apis/engage/login-with-amazon/docs/javascript_sdk_reference.html#authorize
 */
const checkLogin = (allowedScopes = defaultScopes) => new Promise((resolve, reject) => {
  window.amazon.Login.authorize({ scope: allowedScopes }, (response) => {
    if (response.error) {
      return reject(rslError({
        provider: 'amazon',
        type: 'auth',
        description: 'Authentication failed',
        error: response,
      }))
    }

    return getProfile(response).then(resolve, reject)
  })
})

/**
 * Trigger Amazon login process.
 * Requires SDK to be loaded first.
 */
const login = (allowedScopes) => new Promise((resolve, reject) => checkLogin(allowedScopes).then(resolve, reject))

/**
 * Trigger Amazon logout.
 * Requires SDK to be loaded first.
 * @see https://developer.amazon.com/docs/login-with-amazon/javascript-sdk-reference.html#logout
 */
const logout = () => new Promise((resolve) => {
  window.amazon.Login.logout()

  return resolve()
})

/**
 * Gets currently logged in user profile data.
 * Requires SDK to be loaded first.
 * @see https://developer.amazon.com/public/apis/engage/login-with-amazon/docs/javascript_sdk_reference.html#retrieveProfile
 */
const getProfile = (authResponse) => new Promise((resolve, reject) => {
  window.amazon.Login.retrieveProfile(authResponse.access_token, (response) => {
    if (response.error) {
      return reject(rslError({
        provider: 'amazon',
        type: 'get_profile',
        description: 'Failed to get user profile',
        error: response,
      }))
    }

    return resolve({ ...authResponse, ...response })
  })
})

/**
 * Helper to generate user account data.
 * @param {Object} response
 * @see https://developer.amazon.com/public/apis/engage/login-with-amazon/docs/javascript_sdk_reference.html#retrieveProfile
 */
const generateUser = (response) => ({
  profile: {
    id: response.profile.CustomerId,
    name: response.profile.Name,
    firstName: response.profile.Name,
    lastName: response.profile.Name,
    email: response.profile.PrimaryEmail,
    profilePicURL: undefined, // No profile picture available for Amazon provider
  },
  token: {
    accessToken: response.access_token,
    expiresAt: timestampFromNow(response.expires_in),
  },
})

export default {
  checkLogin,
  generateUser,
  load,
  login,
  logout,
}
