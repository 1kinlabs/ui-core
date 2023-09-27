// ** Component Imports
import { useAbility } from 'context/acl'

function CanViewNavLink(props) {
  // ** Props
  const { children, navLink } = props

  // ** Hook
  const ability = useAbility()

  return ability && ability.can(navLink?.action, navLink?.subject) ? <>{children}</> : null
}

export default CanViewNavLink
