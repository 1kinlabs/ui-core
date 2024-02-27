/* eslint-disable react/jsx-props-no-spreading */
import { SVGProps } from 'react'

export function OnePassLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="144" height="40" viewBox="0 0 144 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path d="M56.5578 3.49121C58.9832 5.82291 60.196 8.97196 60.196 12.9574C60.196 15.5235 59.647 17.7919 58.5556 19.7497C57.4641 21.7076 55.8812 23.2409 53.8068 24.3498C51.7324 25.4522 49.2814 26.0035 46.4538 26.0035H38.2136V39.1953H30.1841V0H46.5751C50.8069 0 54.1323 1.16585 56.5578 3.49121ZM50.092 17.2976C51.2345 16.0748 51.809 14.5668 51.809 12.7736C51.809 11.2213 51.2473 9.86536 50.1239 8.71218C49.0005 7.55901 47.3283 6.98242 45.1007 6.98242H38.2136V19.1351H44.9794C47.2453 19.1351 48.9495 18.5205 50.092 17.2976ZM90.8716 11.7915V39.1953H83.5314V35.7041C82.5868 37.0157 81.2592 38.0611 79.5294 38.8405C77.8061 39.6198 75.9231 40.0063 73.8743 40.0063C71.3275 40.0063 69.068 39.4171 67.0958 38.2322C65.1235 37.0474 63.5788 35.3746 62.481 33.214C61.3768 31.0534 60.8279 28.5443 60.8279 25.674C60.8279 22.8037 61.4023 20.1679 62.5448 17.9249C63.6873 15.6883 65.3086 13.9522 67.4021 12.7293C69.4957 11.5064 71.8765 10.8918 74.5445 10.8918C76.587 10.8918 78.4124 11.234 80.0145 11.9246C81.6166 12.6089 82.9187 13.61 83.9272 14.9216L84.5271 11.7852H90.8716V11.7915ZM81.1443 30.971C82.4974 29.5707 83.174 27.7016 83.174 25.3762C83.174 23.0508 82.5102 21.1817 81.1762 19.7814C79.8422 18.3811 78.0805 17.6778 75.8976 17.6778C73.7147 17.6778 71.9084 18.3875 70.6063 19.8131C69.3042 21.2387 68.6532 23.0952 68.6532 25.3825C68.6532 27.6699 69.317 29.5264 70.651 30.952C71.985 32.3776 73.7147 33.0873 75.8402 33.0873C77.9656 33.0873 79.7975 32.384 81.1507 30.9837L81.1443 30.971ZM97.6821 37.5543C95.5055 35.9195 94.3184 33.7399 94.1205 31.0154H101.697C101.735 32.0735 102.169 32.8909 102.993 33.4801C103.816 34.0694 104.856 34.3608 106.12 34.3608C107.301 34.3608 108.246 34.1264 108.948 33.6575C109.65 33.1887 110.001 32.5297 110.001 31.6743C110.001 30.8189 109.733 30.2043 109.203 29.8368C108.673 29.4693 107.952 29.1842 107.052 28.9878L102.482 27.9423C99.8586 27.3277 97.9182 26.3266 96.6608 24.9454C95.4098 23.5641 94.7843 21.8723 94.7843 19.8828C94.7843 17.1963 95.8247 15.0293 97.8991 13.3756C99.9735 11.7218 102.693 10.8981 106.063 10.8981C109.433 10.8981 112.031 11.7155 114.105 13.3439C116.179 14.9786 117.258 17.1139 117.335 19.7624H109.816C109.777 18.7866 109.407 18.0136 108.705 17.4307C108.003 16.8541 107.058 16.5626 105.878 16.5626C104.856 16.5626 104.033 16.7844 103.414 17.2343C102.795 17.6841 102.482 18.3114 102.482 19.1288C102.482 19.9461 102.724 20.4594 103.216 20.7888C103.707 21.1183 104.473 21.4035 105.514 21.6379L110.805 22.8608C113.231 23.4374 115.018 24.4258 116.16 25.8324C117.303 27.2327 117.877 28.9118 117.877 30.8633C117.877 33.6322 116.811 35.8435 114.673 37.5036C112.535 39.1636 109.707 39.9937 106.178 39.9937C102.648 39.9937 99.8586 39.1763 97.6821 37.5479V37.5543ZM123.635 37.5543C121.458 35.9195 120.271 33.7399 120.073 31.0154H127.649C127.688 32.0735 128.122 32.8909 128.945 33.4801C129.768 34.0694 130.809 34.3608 132.073 34.3608C133.253 34.3608 134.198 34.1264 134.9 33.6575C135.602 33.1887 135.953 32.5297 135.953 31.6743C135.953 30.8189 135.685 30.2043 135.155 29.8368C134.626 29.4693 133.904 29.1842 133.004 28.9878L128.434 27.9423C125.811 27.3277 123.871 26.3266 122.613 24.9454C121.362 23.5641 120.737 21.8723 120.737 19.8828C120.737 17.1963 121.777 15.0293 123.852 13.3756C125.926 11.7218 128.645 10.8981 132.015 10.8981C135.385 10.8981 137.983 11.7155 140.057 13.3439C142.132 14.9786 143.211 17.1139 143.287 19.7624H135.768C135.73 18.7866 135.36 18.0136 134.658 17.4307C133.955 16.8541 133.011 16.5626 131.83 16.5626C130.809 16.5626 129.985 16.7844 129.366 17.2343C128.747 17.6841 128.434 18.3114 128.434 19.1288C128.434 19.9461 128.677 20.4594 129.168 20.7888C129.66 21.1183 130.426 21.4035 131.466 21.6379L136.758 22.8608C139.183 23.4374 140.97 24.4258 142.113 25.8324C143.255 27.2327 143.83 28.9118 143.83 30.8633C143.83 33.6322 142.764 35.8435 140.625 37.5036C138.487 39.1636 135.66 39.9937 132.13 39.9937C128.6 39.9937 125.811 39.1763 123.635 37.5479V37.5543Z" fill="url(#paint0_linear_227_33907)" />
        <path d="M14.1634 0L0 13.9965L6.93171 20.8712L12.6315 15.1687V39.17H23.5653V0H23.5589H14.1634Z" fill="url(#paint1_linear_227_33907)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_227_33907" x1="86.7739" y1="0.095042" x2="87.0443" y2="41.3243" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="0.28" stopColor="#F7F7F7" />
          <stop offset="0.71" stopColor="#E2E3E4" />
          <stop offset="1" stopColor="#D0D2D3" />
        </linearGradient>
        <linearGradient id="paint1_linear_227_33907" x1="4.5254" y1="28.2718" x2="29.4777" y2="12.9276" gradientUnits="userSpaceOnUse">
          <stop offset="0.06" stopColor="#00C5F8" />
          <stop offset="0.51" stopColor="#8A5EFF" />
          <stop offset="1" stopColor="#FF00F4" />
        </linearGradient>
        <clipPath id="clip0_227_33907">
          <rect width="143.83" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
