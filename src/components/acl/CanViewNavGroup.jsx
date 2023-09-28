// ** React Imports
import { useContext } from 'react'

// ** Component Imports
import { AbilityContext } from 'context/acl'

function CanViewNavGroup(props) {
  // ** Props
  const { children, navGroup } = props

  // ** Hook
  const ability = useContext(AbilityContext)

  const checkForVisibleChild = (arr) => arr.some((i) => {
    if (i.children) {
      return checkForVisibleChild(i.children)
    }
    return ability?.can(i.action, i.subject)
  })

  const canViewMenuGroup = (item) => {
    const hasAnyVisibleChild = item.children && checkForVisibleChild(item.children)
    if (!(item.action && item.subject)) {
      return hasAnyVisibleChild
    }

    return ability && ability.can(item.action, item.subject) && hasAnyVisibleChild
  }

  return navGroup && canViewMenuGroup(navGroup) ? <>{children}</> : null
}

export default CanViewNavGroup
