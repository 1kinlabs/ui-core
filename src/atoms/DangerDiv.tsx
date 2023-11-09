/*
  DangerDiv!

  Despite its spooky name, it's actually a SAFE div!

  This handy friend takes any html you may want to display wholesale and safely sanatizes
  and wraps anchor tags around anything that may need it. It also applies our styling to the a tags.
*/

/* eslint-disable react/no-danger */
import { styled, useTheme } from 'theme'
import sanitizeHTML from 'sanitize-html'
import linkifyHtml from 'linkify-html'

const convertHyperlinksWithStyling = (text: string) => {
  const theme = useTheme()

  /*
    linkifyHtml has the ability to add properties but it will only add properties to the ones it modifies.
    So rather than using it, we just add it always to make sure link styles are consistent.
  */
  return linkifyHtml(text).replace(/<a /g, `<a style="color:${theme.text.link}" `)
}

const sanitizeHTMLWithOptions = (dirtyText: string) => sanitizeHTML(dirtyText, {
  allowedTags: sanitizeHTML.defaults.allowedTags.concat(['img']),
})

export type Props = {
  className?: string,
  htmlString: string
}

const DangerDiv = styled(({ htmlString, className } : Props) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: convertHyperlinksWithStyling(sanitizeHTMLWithOptions(htmlString)) }}
  />
))`
  white-space: pre-line;
`

export default DangerDiv
