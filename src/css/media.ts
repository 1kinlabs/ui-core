export const viewports = {
  mobileSmall: 600,
  mobile: 900,
  tablet: 1200,
  desktop: 1200,
}

type MediaQueries = {
  [Key in keyof typeof viewports]: string;
}
const mediaQueries: MediaQueries = Object.keys(viewports).reduce<MediaQueries>((acc, label) => {
  const key = label as keyof typeof viewports
  acc[key] = `@media (max-width: ${viewports[key]}px)`
  return acc
}, {} as MediaQueries)

export default mediaQueries

const {
  mobileSmall, mobile, tablet, desktop,
} = mediaQueries
export {
  mobileSmall, mobile, tablet, desktop,
}
