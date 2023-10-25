import { Icon, Props } from 'atoms/Icon'

export function StarCoin({ className, size }: Props) {
  return (
    <Icon size={size} className={className}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_4_3918)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.3333 24C42.3333 34.1252 34.1252 42.3333 24 42.3333C13.8748 42.3333 5.66667 34.1252 5.66667 24C5.66667 13.8748 13.8748 5.66667 24 5.66667C34.1252 5.66667 42.3333 13.8748 42.3333 24ZM44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM24 14.2383L26.2188 18.4438C26.7012 19.3579 27.5802 19.9966 28.5987 20.1728L33.284 20.9835L29.97 24.3933C29.2496 25.1345 28.9138 26.1679 29.061 27.191L29.7378 31.8974L25.4709 29.7993C24.5433 29.3433 23.4567 29.3433 22.5292 29.7993L18.2622 31.8974L18.9391 27.191C19.0862 26.1679 18.7504 25.1345 18.0301 24.3933L14.7161 20.9835L19.4014 20.1728C20.4198 19.9966 21.2989 19.3579 21.7812 18.4438L24 14.2383ZM22.5259 13.4606C23.1513 12.2754 24.8488 12.2754 25.4741 13.4606L27.6929 17.666C27.9341 18.1231 28.3736 18.4425 28.8828 18.5306L33.5681 19.3412C34.8886 19.5697 35.4131 21.1841 34.4791 22.1451L31.1652 25.5549C30.805 25.9255 30.6371 26.4422 30.7107 26.9537L31.3875 31.6602C31.5783 32.9866 30.205 33.9844 29.0024 33.3931L24.7354 31.295C24.2717 31.067 23.7284 31.067 23.2646 31.295L18.9977 33.3931C17.7951 33.9844 16.4218 32.9866 16.6125 31.6602L17.2894 26.9537C17.3629 26.4422 17.1951 25.9255 16.8349 25.5549L13.5209 22.1451C12.5869 21.1841 13.1115 19.5697 14.4319 19.3412L19.1172 18.5306C19.6264 18.4425 20.066 18.1231 20.3071 17.666L22.5259 13.4606Z"
            fill="#FE00FC"
          />
        </g>
        <defs>
          <filter id="filter0_d_4_3918" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.403922 0 0 0 0 0.0392157 0 0 0 0.8 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_3918" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_3918" result="shape" />
          </filter>
        </defs>
      </svg>
    </Icon>
  )
}
