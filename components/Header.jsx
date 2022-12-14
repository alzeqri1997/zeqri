import React from 'react'
import Button from './Button'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='header container' >
      <div className='header__logo' > < Logo /> <span className='header__logo--text' >Zeqri</span>  </div>

      <div className='navs' >
        <ul className='navs__nav-items ' >
          <li ><a className='navs__nav-items--item' href="#work">Projects</a></li>
          <li ><a className='navs__nav-items--item' href="#about">About</a></li>
          <li ><a className='navs__nav-items--item' href="#contact">Contact Me</a></li>
        </ul>
        <Button rounded classes  text={'Resume'}  />
      </div>
    </header>
  )
}

export default Header