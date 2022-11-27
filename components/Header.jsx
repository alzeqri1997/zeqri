import React from 'react'
import Button from './Button'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='header container' >
      <div className='header__logo' > < Logo /> <span className='header__logo--text' >Zeqri</span>  </div>

      <div className='navs' >
        <ul className='navs__nav-items ' >
          <li ><a className='navs__nav-items--item' href="#">Home</a></li>
          <li ><a className='navs__nav-items--item' href="#">Work</a></li>
          <li ><a className='navs__nav-items--item' href="#">About</a></li>
          <li ><a className='navs__nav-items--item' href="#">Contact</a></li>
        </ul>
        <Button rounded classes  text={'Resume'}  />
      </div>
    </header>
  )
}

export default Header