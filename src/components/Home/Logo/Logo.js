import './Logo.scss'
import LogoA from '../../../assets/images/logo_a.png'
import { useRef } from 'react'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoA} />
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M 302.5 3773 L 0 3773 L 1518 0 L 1947 0 L 3465 3773 L 3146 3773 L 2706 2684 L 737 2684 L 302.5 3773 Z M 1397 1050.5 L 847 2420 L 2596 2420 L 2046 1050.5 L 1996.5 918.5 Q 1968.141 842.875 1931.657 746.941 A 59310.879 59310.879 0 0 0 1919.5 715 Q 1875.5 599.5 1828.75 478.5 Q 1782 357.5 1743.5 253 L 1699.5 253 A 13985.818 13985.818 0 0 1 1668.305 336.789 Q 1654.34 373.957 1638.764 414.885 A 26064.172 26064.172 0 0 1 1606 500.5 Q 1551 643.5 1496 789.25 A 107616.482 107616.482 0 0 1 1446.854 919.244 Q 1423.685 980.404 1402.892 1035.027 A 64047.404 64047.404 0 0 1 1397 1050.5 Z"
            vector-effect="non-scaling-stroke"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
