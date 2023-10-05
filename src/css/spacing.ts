export const spacing = [
  0,
  4,
  ...Array.from({ length: 10 }, (_, i) => 8 * i),
].map((n) => `${n}px`)
