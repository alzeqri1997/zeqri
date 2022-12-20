import Link from 'next/link'
import React from 'react'


const Arrow = () => (
  <span>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0A192F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path opacity="0.4" d="M10.74 15.53L14.26 12L10.74 8.46997" stroke="#0A192F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  </span>
)
const Button = ({ rounded = false, text, classes="", isWithIcon = false, link="#", target = '_self' }) => {
  const isRounded = rounded ? 'rounded-button' : 'full-button'

  return (
    <Link target={target} href="/" >
      <div className={`${classes} button ${isRounded} `}>
        <span>{text}</span> {isWithIcon && <Arrow />}
      </div>
    </Link>
  )
}

export default Button