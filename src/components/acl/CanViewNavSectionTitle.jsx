// ** React Imports
import { useContext } from 'react'

// ** Component Imports
import { AbilityContext } from 'context/acl'

const CanViewNavSectionTitle = props => {
  // ** Props
  const { children, navTitle } = props

  // ** Hook
  const ability = useContext(AbilityContext)

  return ability && ability.can(navTitle?.action, navTitle?.subject) ? <>{children}</> : null
}

export default CanViewNavSectionTitle
