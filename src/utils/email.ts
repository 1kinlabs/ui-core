export function validateEmail(email: string): boolean {
  const regex = /^\S+@\S+\.\S+$/
  console.log('validateEmail', email, regex.test(email))
  return regex.test(email)
}
