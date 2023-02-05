import React, { useState, useEffect, useLayoutEffect } from 'react'
import Button from './Button'
import Logo from './Logo'
import {gsap} from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

const Header = () => {
  
  const [element, setElement] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  gsap.registerPlugin(ScrollToPlugin);




  const handleMenu = (val) => {
    val === true ? setIsMenuOpen(true) : setIsMenuOpen(false)
  }
  useEffect(() => {
    document.addEventListener('scroll', () => setIsMenuOpen(false))
  }, [isMenuOpen])
  
  useLayoutEffect(() => {
    function scrollToElement() {
      if (element) {
        gsap.to(window, { duration: 2, scrollTo: { y: element, offsetY: 100 }, ease: "circ.inOut" })
      }
    }
    scrollToElement()

    return ()=> setElement('')
  }, [element])
  return (
    <header className='header container' >
      <div className='header__logo' > < Logo /> <span className='header__logo--text' >Zeqri</span>  </div>

      <div className='navs nav-desktop' >
        <ul className='navs__nav-items ' >
          <li ><button onClick={()=> setElement('#work')} className='navs__nav-items--item btn'>Projects</button></li>
          <li ><button onClick={()=> setElement('#contact')} className='navs__nav-items--item btn'>Contact Me</button></li>
          <li ><button onClick={()=> setElement('#about')} className='navs__nav-items--item btn'>About</button></li>
        </ul>
        <Button target="_blank" link="https://drive.google.com/file/d/1gkvV1lu2AWkVtZ4wU-IzV-OZqJMhD4ZF/view?usp=share_link" rounded classes text={'Resume'} />
      </div>
      <div className='navs navs__mobile' >
        <button className='btn navs__mobile--menu' onClick={()=>handleMenu(true)} >
          <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H25" stroke="#D5E3F6" strokeWidth="1.5" strokeLinecap="round" />
            <path opacity="0.34" d="M1 7.66666H25" stroke="#D5E3F6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M1 14.3333H25" stroke="#D5E3F6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>


        { isMenuOpen && <div className='navs__mobile--items container'>
          <div className='navs__mobile--items-head' >
            <div className='header__logo' > < Logo /> <span className='header__logo--text' >Zeqri</span>  </div>
            <button onClick={()=>handleMenu(false)} className='btn' ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.51465 1.51471L18.4852 18.4853" stroke="#112240" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M1.51465 18.4853L18.4852 1.51473" stroke="#112240" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            </button>
          </div>
          <ul className='navs__nav-items  ' >
            <li ><button onClick={()=> setElement('#work')} className='navs__nav-items--item btn'>Projects</button></li>
            <li ><button onClick={()=> setElement('#contact')} className='navs__nav-items--item btn' href="#contact">Contact Me</button></li>
            <li ><button onClick={()=> setElement('#about')} className='navs__nav-items--item btn' href="#about">About</button></li>
            <Button target="_blank" link="https://drive.google.com/file/d/1dk02ndMAf0X4UkBmTkYI7BJd-TbL-54w/view" rounded classes={'text-center'} text={'Resume'} />
          </ul>
        </div>}
      </div>
    </header>
  )
}

export default Header