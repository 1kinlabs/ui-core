export const viewports = {
  mobileSmall: 600,
  mobile: 900,
  tablet: 1200,
}

type MediaQueries = {
  [Key in keyof typeof viewports]: string;
} & {
  desktop: string;
}

const getMaxWidthQueries = (type: 'media' | 'container') => Object.keys(viewports).reduce<MediaQueries>((acc, label) => {
  const key = label as keyof typeof viewports
  acc[key] = `@${type} (max-width: ${viewports[key]}px)`
  return acc
}, {} as MediaQueries)

const mediaQueries: MediaQueries = {
  ...getMaxWidthQueries('media'),
  desktop: '@media (min-width: 1201px)',
}

export const container: MediaQueries = {
  ...getMaxWidthQueries('container'),
  desktop: '@container (min-width: 1201px)',
}

const {
  mobileSmall, mobile, tablet, desktop,
} = mediaQueries
export {
  mobileSmall, mobile, tablet, desktop,
}
