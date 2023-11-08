export const replaceLinkWithHyperlink = (text: string) => {
  if (!text) return ''

  // eslint-disable-next-line no-useless-escape
  const urlPattern = /https?:\/\/[^\s,<>\)]+/g

  const replacedText = text.replace(urlPattern, (url) => `<a style="color:#666CFF;" href="${url}" target="_blank">${url}</a>`)

  return replacedText
}
