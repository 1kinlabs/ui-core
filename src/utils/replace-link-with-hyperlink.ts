import { useTheme } from 'theme'

export const replaceLinkWithHyperlink = (text: string) => {
  if (!text) return ''

  const theme = useTheme()

  // This pattern matches all <a> tags.
  const anchorPattern = /<a [^>]+>(.*?)<\/a>/g

  // First, style all existing <a> tags without mutating `text`
  const styledText = text.replace(anchorPattern, (match) => match.replace('<a ', `<a style="color:${theme.text.link}" `))

  // This pattern matches a URL that is not inside quotes or already wrapped in an <a> tag.
  const urlPattern = /https?:\/\/[^\s,<>)]+(?![^<>]*<\/a>)(?![^<>]*>)/g

  // Then, replace plain URLs with hyperlinks in the styled text
  return styledText.replace(urlPattern, (url) => `<a style="color:${theme.text.link}" href="${url}" target="_blank">${url}</a>`)
}
