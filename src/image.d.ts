interface ImportedImage {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
}

declare module '*.jpg' {
  const content: ImportedImage
  export default content
}

declare module '*.png' {
  const content: ImportedImage
  export default content
}
