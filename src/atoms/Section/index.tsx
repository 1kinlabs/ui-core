import { styled } from 'styled-components'
import { NonCollapsibleProps, CollapsibleProps } from 'types/Section'
import CollapsibleSection from './Collapsible'
import NonCollapsibleSection from './NonCollapsible'

export type Props = NonCollapsibleProps | CollapsibleProps;

const Section = styled(({
  children, className, title, collapsible, defaultExpanded = true,
} : Props) => (collapsible ? (
  <CollapsibleSection title={title} className={className} defaultExpanded={defaultExpanded}>
    {children}
  </CollapsibleSection>
) : (
  <NonCollapsibleSection title={title} className={className}>
    {children}
  </NonCollapsibleSection>
)))``

export default Section
