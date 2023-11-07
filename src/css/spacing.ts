const eightPxSpaces = Array.from({ length: 10 }, (_, i) => 8 * i).slice(1)
export const spacing = [
  0,
  4,
  ...eightPxSpaces,
].map((n) => `${n}px`)
