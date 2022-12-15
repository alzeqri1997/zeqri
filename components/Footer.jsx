import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { Behance, LinkedIn, Github, Twitter } from './icons'


const Footer = () => {
  const Heart = <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 4.19254C14 2.15319 12.2708 0.5 10.1382 0.5C8.84344 0.5 7.70098 1.11106 7 2.04504C6.29902 1.11106 5.15656 0.5 3.86223 0.5C1.72916 0.5 0 2.15281 0 4.19254C0 4.48142 0.0383562 4.76131 0.10411 5.0311C0.640313 8.21661 4.34481 11.5772 7 12.5C9.6548 11.5772 13.3597 8.21661 13.8951 5.03148C13.9616 4.76169 14 4.48179 14 4.19254Z" fill="#DD2E44"/>
  </svg>
  const currentYear = new Date().getFullYear().toString()
  
  return (
    <footer className='container footer' >
      <div className='footer__info' >
        <div className='footer__info--logo' > < Logo /> <span className='footer__info--logo-text' >Zeqri</span>  </div>
        <div className='footer__info--icons' >
          <Link href="#">
            <Behance />
          </Link>
          <Link href="#">
            <Github />
          </Link>
          <Link href="#">
            <Twitter />
          </Link>
          <Link href="#">
            <LinkedIn />
          </Link>
        </div>
      </div>
      <div className='line'></div>
      <span className='footer__copyright' >© {currentYear}. Built with {Heart} by Ahmed Al-zeqri. All Rights reserved</span>
    </footer>
  )
}

export default Footer