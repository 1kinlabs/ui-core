import { IconSize } from 'enums/IconSize'

type Props = { className?: string, size?: IconSize }

export function CollectibleTotal({ className, size = IconSize.L }: Props): JSX.Element {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1196_12356)">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.8333 12C19.8333 16.0501 16.5501 19.3333 12.5 19.3333C8.44991 19.3333 5.16667 16.0501 5.16667 12C5.16667 7.94991 8.44991 4.66667 12.5 4.66667C16.5501 4.66667 19.8333 7.94991 19.8333 12ZM20.5 12C20.5 16.4183 16.9183 20 12.5 20C8.08172 20 4.5 16.4183 4.5 12C4.5 7.58172 8.08172 4 12.5 4C16.9183 4 20.5 7.58172 20.5 12ZM12.5 8.09534L13.3875 9.77751C13.5805 10.1432 13.9321 10.3987 14.3395 10.4691L16.2136 10.7934L14.888 12.1573C14.5999 12.4538 14.4655 12.8672 14.5244 13.2764L14.7951 15.159L13.0883 14.3197C12.7173 14.1373 12.2827 14.1373 11.9117 14.3197L10.2049 15.159L10.4756 13.2764C10.5345 12.8672 10.4002 12.4538 10.112 12.1573L8.78644 10.7934L10.6605 10.4691C11.0679 10.3987 11.4196 10.1432 11.6125 9.77751L12.5 8.09534ZM11.9104 7.78424C12.1605 7.31015 12.8395 7.31015 13.0896 7.78424L13.9772 9.46642C14.0736 9.64925 14.2494 9.77699 14.4531 9.81223L16.3272 10.1365C16.8554 10.2279 17.0653 10.8736 16.6917 11.258L15.3661 12.622C15.222 12.7702 15.1548 12.9769 15.1843 13.1815L15.455 15.0641C15.5313 15.5947 14.982 15.9938 14.501 15.7572L12.7942 14.918C12.6087 14.8268 12.3913 14.8268 12.2058 14.918L10.4991 15.7572C10.018 15.9938 9.46872 15.5947 9.54502 15.0641L9.81575 13.1815C9.84518 12.9769 9.77802 12.7702 9.63395 12.622L8.30836 11.258C7.93477 10.8736 8.14459 10.2279 8.67278 10.1365L10.5469 9.81223C10.7506 9.77699 10.9264 9.64925 11.0229 9.46642L11.9104 7.78424Z" fill="#FE00FC" />
      </g>
      <defs>
        <filter id="filter0_d_1196_12356" x="0.5" y="0" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0 0 0 0 0 0.988235 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1196_12356" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1196_12356" result="shape" />
        </filter>
      </defs>
    </svg>

  )
}
