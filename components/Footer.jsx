import Link from 'next/link'
import { useRef, useLayoutEffect } from 'react'
import { Behance, LinkedIn, Github, Twitter, Upwork } from './icons'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


const Footer = () => {
  const Heart = <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4.19254C14 2.15319 12.2708 0.5 10.1382 0.5C8.84344 0.5 7.70098 1.11106 7 2.04504C6.29902 1.11106 5.15656 0.5 3.86223 0.5C1.72916 0.5 0 2.15281 0 4.19254C0 4.48142 0.0383562 4.76131 0.10411 5.0311C0.640313 8.21661 4.34481 11.5772 7 12.5C9.6548 11.5772 13.3597 8.21661 13.8951 5.03148C13.9616 4.76169 14 4.48179 14 4.19254Z" fill="#DD2E44" />
  </svg>
  const currentYear = new Date().getFullYear().toString()

  const footer = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const logo = footer.current.children[0].children[0];
    const icons = footer.current.children[0].children[1].children;
    const line = footer.current.children[1];
    const copyright = footer.current.children[2];
    gsap.timeline({
      defaults: {
        duration: 0.5
      },
      scrollTrigger: {
        trigger: footer.current,
        start: 'top bottom',
      }
    }).fromTo(footer.current, {
      opacity: 0,
    }, {
      opacity: 1,
    }).fromTo(logo, {
      delay: .2,
      x: -100
    }, {
      x: 0
    }, "<").fromTo(icons, {
      opacity: 0,
      x: 100
    }, {
      x: 0,
      opacity: 1,
      stagger: 0.2
    }).fromTo(line, {
      scale: 0
    }, {
      scale: 1
    }, "-=0.5").fromTo(copyright, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0
    })
  }, [])


  return (
    <footer ref={footer} className='container footer hidden'>
      <div className='footer__info' >
        <div className='footer__info--icons' >
          <Link target={'_blank'} href="https://www.behance.net/ahmedal-zagri">
            <Behance />
          </Link>
          <Link target={'_blank'} href="https://github.com/alzeqri1997">
            <Github />
          </Link>
          <Link target={'_blank'} href="https://twitter.com/A_Zagri">
            <Twitter />
          </Link>
          <Link target={'_blank'} href="https://www.linkedin.com/in/alzeqri1997/">
            <LinkedIn />
          </Link>
          <Link target={'_blank'} href="https://www.upwork.com/fl/zeqri">
            <Upwork />
          </Link>
        </div>
      </div>
      <div className='line'></div>
      <span className='footer__copyright' >© {currentYear}. Built with {Heart} by Ahmed Al-zeqri. All Rights reserved</span>
    </footer>
  )
}

export default Footer