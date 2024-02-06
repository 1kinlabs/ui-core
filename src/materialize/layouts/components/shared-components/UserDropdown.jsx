import UserIconDropdown from './UserIconDropdown'
import UserSignInButton from './UserSignInButton'

export default function UserDropdown({ user, settings, logout }) {
  return user
    ? <UserIconDropdown user={user} settings={settings} logout={logout} />
    : <UserSignInButton />
}
