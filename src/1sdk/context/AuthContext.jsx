// ** React Imports
import {
  createContext, useEffect, useState, useContext,
} from 'react'
import { setUser as setSentryUser, captureException } from '@sentry/nextjs'

// ** Next Import
import { useRouter } from 'next/router'
import { GoogleOAuthProvider } from '@react-oauth/google'

// ** Axios Import
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios'
import { connect } from 'socket.io-client'

// ** Utils
import * as api from '1sdk/data/auth'
import { BACKEND_BASE_URL } from '1sdk/data/request'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  emailLoading: false,
  signingInWithEmail: '',
  setSigningInWithEmail: () => String,
  showLoginOptionModal: false,
  setShowLoginOptionModal: () => Boolean,
  rememberMe: false,
  setRememberMe: () => Boolean,
  showPasswordInput: false,
  setShowpasswordInput: () => Boolean,
  loginError: false,
  setUser: () => null,
  setLoading: (loading) => Boolean,
  isInitialized: false,
  showTwoStepModal: false,
  showRegisterSuccess: false,
  registerErrorMessage: '',
  authErrorMessage: '',
  missingEmail: false,
  setMissingEmail: () => Boolean,
  setShowRegisterSuccess: () => Boolean,
  setAuthErrorMessage: () => Boolean,
  setShowTwoStepModal: () => Boolean,
  registerByEmail: (obj) => Promise.resolve(),
  setupPassword: () => Promise.resolve(),
  loginByEmail: (email, password, withEmailLogin) => Promise.resolve(),
  loginByGoogle: () => Promise.resolve(),
  loginByDiscord: (eventData) => Promise.resolve(),
  loginByFacebook: () => Promise.resolve(),
  amazonLoginSuccess: (user) => Promise.resolve(),
  amazonRedemption: (benefitId, amazonUser) => Promise.resolve(),
  loginByTwitter: () => Promise.resolve(),
  loginByWallet: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  updateUser: () => Promise.resolve(),
  refreshUser: () => Promise.resolve(),
  verifyTwostep: () => Promise.resolve(),
  resendTwostepCode: () => Promise.resolve(),
  collectEmail: () => Promise.resolve(),
  cancelAuth: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
}

const AuthContext = createContext(defaultProvider)

function AuthContextProvider({ children }) {
  // ** States
  const [, setState] = useState({})
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [noRedirect, setNoRedirect] = useState(false)
  const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)
  const [registerErrorMessage, setRegisterErrorMessage] = useState()
  const [showTwoStepModal, setShowTwoStepModal] = useState()
  const [showRegisterSuccess, setShowRegisterSuccess] = useState()
  const [missingEmail, setMissingEmail] = useState(false)
  const [authErrorMessage, setAuthErrorMessage] = useState()
  const [resendToken, setResendToken] = useState()
  const [last4, setLast4] = useState()
  const [showLoginOptionModal, setShowLoginOptionModal] = useState(defaultProvider.showLoginOptionModal)
  const [loginError, setLoginError] = useState(defaultProvider.loginError)
  const [emailLoading, setEmailLoading] = useState(false)
  const [signingInWithEmail, setSigningInWithEmail] = useState('')
  const [rememberMe, setRememberMe] = useState(defaultProvider.rememberMe)
  const [showPasswordInput, setShowpasswordInput] = useState(defaultProvider.showPasswordInput)

  // ** Hooks
  const router = useRouter()

  const fetchUser = async () => {
    setLoading(true)
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const user = await api.getUser()
      setLoading(false)
      if (user) {
        const userWithDefaults = {
          ...user, role: 'admin', username: user.displayname || 'Anonymous', name: user.fullname || 'Anonymous', phone: user.contact || '',
        }
        setSentryUser(userWithDefaults)
        setUser(userWithDefaults)
        window.localStorage.setItem(
          'userData',
          JSON.stringify(userWithDefaults),
        )
        window.localStorage.setItem('isCustomer', 'true')
      } else {
        // eslint-disable-next-line no-use-before-define
        handleLogout()
      }
    } catch (e) {
      captureException(e)
      setLoading(false)
      // eslint-disable-next-line no-use-before-define
      handleLogout()
    }
  }

  useEffect(() => {
    const initAuth = async () => {
      setIsInitialized(true)
      const auth = window.localStorage.getItem(`${process.env.NEXT_PUBLIC_LS_KEY}`)
      setState({ auth })

      try {
        if (auth) {
          fetchUser()
        } else {
          setLoading(false)

          const userData = window.localStorage.getItem('userData')
          if (userData) {
            window.localStorage.removeItem('userData')
            window.location.reload()
          }
        }
      } catch (error) {
        captureException(error)
      }
    }

    initAuth()
  }, [])

  const handleRegisterByEmail = async ({ email, firstName, lastName }) => {
    try {
      const response = await api.register({ email, firstName, lastName })
      setShowRegisterSuccess(true)
      return response
    } catch (e) {
      if (e.message) {
        setRegisterErrorMessage(e.message)
      } else {
        setRegisterErrorMessage('Something went wrong')
      }
      return Promise.reject(e)
    }
  }

  const handleAuthResponse = async (res) => {
    if (res) {
      const {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        accessToken, resendToken, last4, result, message, token,
      } = res
      if (result === 'failure') {
        setLoading(false)
        if (message === 'This account is under review') {
          setShowRegisterSuccess(true)
        }
        if (message === 'This account is missing email') {
          setShowRegisterSuccess(true)
          setMissingEmail(true)
          setResendToken(token)
        }

        setAuthErrorMessage(message)
      } else if (accessToken === 'two-step-required') {
        setResendToken(resendToken)
        setLast4(last4 || 1234)
        setLoading(false)
        setShowTwoStepModal(true)
      } else {
        window.localStorage.setItem(`${process.env.NEXT_PUBLIC_LS_KEY}`, accessToken)
        setState({ auth: accessToken })
        await fetchUser()
        setLoading(false)
      }
    }
  }

  const handleCancelAuth = async () => {
    setLoading(false)
    setShowTwoStepModal(false)
  }

  // eslint-disable-next-line consistent-return
  const handleVerifyTwostep = async (code) => {
    setLoading(true)
    const res = await api.verifyTwoStepCode(code, resendToken)
    if (res) {
      const { accessToken, verification } = res
      if (verification === 'failure') {
        setLoading(false)

        return false
      }
      setShowTwoStepModal(false)
      window.localStorage.setItem(`${process.env.NEXT_PUBLIC_LS_KEY}`, accessToken)
      setState({ auth: accessToken })
      await fetchUser()

      const { returnUrl } = router.query
      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
      router.replace(redirectURL)
    }
  }

  const handleResendTwostepCode = async () => {
    setLoading(true)
    const res = await api.resendTwoStepCode(resendToken)
    if (res) {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { resendToken } = res
      if (resendToken) {
        setResendToken(resendToken)
        setLoading(false)
      } else {
        setLoading(false)
      }
    }
  }

  const handleCollectEmail = async (email) => {
    const res = await api.collectEmail(email, resendToken)
    if (res) {
      if (res.result === 'Success') {
        setResendToken('')
        setMissingEmail(false)
      }
    }
  }

  // Remember email in local storage when remember me option is selected
  const rememberEmail = (email) => {
    if (rememberMe) {
      window.localStorage.setItem('user-email', email)
    } else {
      window.localStorage.removeItem('user-email')
    }
  }

  const connectSocketForEmailLogin = (ret, email) => {
    setSigningInWithEmail(email)
    setLoading(false) // To show waiting screen on login page

    const socket = connect(BACKEND_BASE_URL)

    socket.emit('subscribe', ret.token)

    socket.on(ret.token, async (data) => {
      socket.close()

      setSigningInWithEmail('')
      rememberEmail(email)
      handleAuthResponse(data)
    })
  }

  // eslint-disable-next-line consistent-return
  const handleLoginByEmail = async (email, password, withEmailLogin) => {
    if (password) {
      setEmailLoading(true)

      const ret = await api.auth({
        authType: 'email',
        authData: {
          email,
          password,
        },
      })

      if (ret) {
        if (ret.result === 'failure') {
          setEmailLoading(false)
          setAuthErrorMessage(ret.message)
          setLoginError(true)

          return false
        }
        if (ret.accessToken) {
          setEmailLoading(false)
          setLoginError(false)
          rememberEmail(email)
          handleAuthResponse(ret)
        } else {
          setLoading(false)

          return false
        }
      }
    } else {
      setEmailLoading(true)
      if (withEmailLogin) {
        setLoading(true)

        const ret = await api.auth({
          authType: 'email',
          authData: {
            email,
          },
        })
        if (ret.token) {
          setEmailLoading(false)

          connectSocketForEmailLogin(ret, email)
        } else {
          setLoading(false)

          return false
        }
      } else {
        const ret = await api.checkPasswordFromEmail({
          email,
        })
        if (ret.has_password === false) {
          setLoading(true)
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const ret = await api.auth({
            authType: 'email',
            authData: {
              email,
            },
          })

          if (ret.result === 'failure') {
            setLoading(false)
            setEmailLoading(false)
            setLoginError(true)
            setAuthErrorMessage(ret.message)
            return false
          }
          if (ret.result === 'Success') {
            setLoading(false)
            setEmailLoading(false)
            setLoginError(false)
            setAuthErrorMessage(ret.message)
            router.replace('/setup-password')
            return false
          }
          if (ret.token) {
            setEmailLoading(false)

            connectSocketForEmailLogin(ret, email)
          } else {
            setLoading(false)

            return false
          }
        } else {
          setEmailLoading(false)
          setLoading(false)
          // setShowLoginOptionModal(true)
          setShowpasswordInput(true)

          return false
        }
      }
    }
  }

  const handleLoginByGoogle = async (tokenResponse) => {
    setLoading(true)

    const userInfo = await axios
      .get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      })
      .then((res) => res.data)

    const ret = await api.auth({
      authType: 'google',
      authData: userInfo,
    })

    handleAuthResponse(ret)
  }

  const handleLoginByDiscord = async (tokenResponse) => {
    setLoading(true)

    const userInfo = await axios
      .get('https://discord.com/api/users/@me', {
        headers: { Authorization: `${tokenResponse.tokenType} ${tokenResponse.accessToken}` },
      })
      .then((res) => res.data)

    const ret = await api.auth({
      authType: 'discord',
      authData: userInfo,
    })

    handleAuthResponse(ret)
  }

  const handleLoginByTwitter = async (resp) => {
    setLoading(true)

    const userInfo = resp

    const ret = await api.auth({
      authType: 'twitter',
      authData: {
        image: userInfo.profile_image_url,
        name: userInfo.name,
        username: userInfo.screen_name,
      },
    })

    handleAuthResponse(ret)
  }

  const handleLoginByFacebook = async (resp) => {
    setLoading(true)

    const userInfo = resp

    const ret = await api.auth({
      authType: 'facebook',
      authData: userInfo,
    })

    handleAuthResponse(ret)
  }

  const handleAmazonLoginSuccess = async (resp) => {
    setLoading(true)

    const userInfo = resp

    const ret = await api.auth({
      authType: 'amazon',
      authData: userInfo,
    })

    handleAuthResponse(ret)
  }

  const handleAmazonRedemption = async (benefitId, amazonUser) => {
    setNoRedirect(true)
    setLoading(true)

    const ret = await api.auth({
      authType: 'amazon',
      authData: amazonUser.profile,
    })

    window.localStorage.setItem(`${process.env.NEXT_PUBLIC_LS_KEY}`, ret.accessToken)
    setState({ auth: ret.accessToken })
    await fetchUser()
    setLoading(false)

    await api.handleAmazonRedemption(benefitId, amazonUser.token.accessToken)

    router.replace('/')
  }

  const handleLoginByWallet = async (wallet, address) => {
    setLoading(true)

    const ret = await api.auth({
      authType: 'wallet',
      authData: {
        chainId: wallet.chainId,
        address,
      },
    })

    handleAuthResponse(ret)
  }

  const handleLogout = async () => {
    window.localStorage.removeItem('userData')
    setUser(null)
    window.localStorage.removeItem(`${process.env.NEXT_PUBLIC_LS_KEY}`)
    setState({ auth: undefined })
    setLoading(false)
    setIsInitialized(false)
  }

  const updateUser = async (userData) => {
    api.updateUser(userData)
      .then((response) => {
        if (response) {
          setUser({
            ...user,
            ...userData,
            username: response.displayname,
            name: response.fullname,
            phone: response.contact,
          })
        }
      })
  }

  const refreshUser = async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    api.getUser().then((user) => {
      if (user) {
        setUser({
          ...user, role: 'admin', username: user.fullname || 'Anonymous', name: user.fullname || 'Anonymous',
        })
        window.localStorage.setItem(
          'userData',
          JSON.stringify({
            ...user, role: 'admin', username: user.fullname || 'Anonymous', name: user.fullname || 'Anonymous',
          }),
        )
      } else {
        handleLogout()
      }
    })
      .catch(() => {
        handleLogout()
      })
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    user,
    loading,
    noRedirect,
    emailLoading,
    last4,
    signingInWithEmail,
    setSigningInWithEmail,
    showLoginOptionModal,
    setShowLoginOptionModal,
    rememberMe,
    setRememberMe,
    showPasswordInput,
    setShowpasswordInput,
    loginError,
    showTwoStepModal,
    showRegisterSuccess,
    registerErrorMessage,
    setShowTwoStepModal,
    setShowRegisterSuccess,
    missingEmail,
    setMissingEmail,
    authErrorMessage,
    setAuthErrorMessage,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    registerByEmail: handleRegisterByEmail,
    loginByEmail: handleLoginByEmail,
    setupPassword: handleAuthResponse,
    loginByGoogle: handleLoginByGoogle,
    loginByDiscord: handleLoginByDiscord,
    loginByTwitter: handleLoginByTwitter,
    loginByFacebook: handleLoginByFacebook,
    amazonLoginSuccess: handleAmazonLoginSuccess,
    amazonRedemption: handleAmazonRedemption,
    loginByWallet: handleLoginByWallet,
    verifyTwostep: handleVerifyTwostep,
    resendTwostepCode: handleResendTwostepCode,
    collectEmail: handleCollectEmail,
    cancelAuth: handleCancelAuth,
    logout: handleLogout,
    updateUser,
    refreshUser,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children, clientId }) {
  return (
    <GoogleOAuthProvider clientId={clientId || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
    </GoogleOAuthProvider>
  )
}

export { AuthContext, AuthProvider }
