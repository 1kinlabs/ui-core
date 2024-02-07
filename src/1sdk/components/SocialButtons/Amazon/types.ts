export type AmazonProfile = {
  email: string,
  firstName: string,
  id: string,
  lastName: string,
  name: string,
  porfilePicURL: string
}

export type AmazonToken = {
  accessToken: string,
  expiresAt: number
}

export type AmazonUser = {
  profile: AmazonProfile,
  token: AmazonToken
}
