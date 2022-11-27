import Link from 'next/link'
import React from 'react'

const Button = ({ rounded = false , text, classes }) => {
  const isRounded = rounded ? 'rounded-button' : 'full-button'
  return (
    <Link className={`${classes} button ${isRounded} `}  href="#" >{text}</Link>
  )
}

export default Button