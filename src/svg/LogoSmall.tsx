type Props = { className?: string }

export function LogoSmall({ className }: Props): JSX.Element {
  return (
    <svg className={className} width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_10680_8369)">
        <path d="M64.99 5.85C97.65 5.85 124.12 32.31 124.12 64.94C124.12 97.57 97.65 124.03 64.99 124.03C32.33 124.03 5.86 97.58 5.86 64.95C5.86 32.32 32.33 5.85 64.99 5.85ZM64.99 0C56.22 0 47.71 1.72 39.69 5.11C31.95 8.38 25 13.06 19.03 19.03C13.06 24.99 8.38 31.94 5.1 39.67C1.72 47.68 0 56.18 0 64.95C0 73.72 1.72 82.22 5.11 90.23C8.38 97.97 13.07 104.91 19.04 110.87C25.01 116.83 31.96 121.51 39.7 124.79C47.72 128.18 56.23 129.9 65 129.9C73.77 129.9 82.28 128.18 90.3 124.79C98.04 121.52 104.99 116.84 110.96 110.87C116.93 104.91 121.61 97.96 124.89 90.23C128.28 82.22 130 73.71 130 64.95C130 56.19 128.28 47.68 124.89 39.67C121.62 31.93 116.93 24.99 110.96 19.03C104.99 13.07 98.04 8.39 90.3 5.11C82.29 1.72 73.77 0 65 0L64.99 0Z" fill="url(#paint0_linear_10680_8369)" />
        <path d="M44.38 33.81L23.11 54.95L33.97 65.81L41.97 57.76V95.64H59.1V33.81H44.38ZM79.37 33.81L59.11 64.72L79.37 95.63H100.24L79.24 64.72L100.24 33.81H79.37Z" fill="url(#paint1_linear_10680_8369)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_10680_8369" x1="16.26" y1="110.95" x2="110.75" y2="21.75" gradientUnits="userSpaceOnUse">
          <stop offset="0.06" stopColor="#00C5F8" />
          <stop offset="0.51" stopColor="#8A5EFF" />
          <stop offset="1" stopColor="#FF00F4" />
        </linearGradient>
        <linearGradient id="paint1_linear_10680_8369" x1="33.66" y1="88.32" x2="102.35" y2="46.4" gradientUnits="userSpaceOnUse">
          <stop offset="0.06" stopColor="#00C5F8" />
          <stop offset="0.51" stopColor="#8A5EFF" />
          <stop offset="1" stopColor="#FF00F4" />
        </linearGradient>
        <clipPath id="clip0_10680_8369">
          <rect width="129.98" height="129.89" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
