import Link from 'next/link'
import React from 'react'
import myPic from '../assets/images/myPic.png'
import Divider from './Divider'
import {  LinkedIn, Pattern2, Twitter} from './icons'


const AboutMe = () => {
  return (
    <section id='about' className='light-bg relative '>
				<div className='container' >
          <Divider text={"About Me"} />
        </div>
      <div className='relative hidden' >
        <div className='container about-me' >
          <div className='about-me__content'>
            <h1 className='about-me__content--heading'>A Few Words About me</h1>
            <p>I’m <strong>Ahmed Al-zeqri</strong>, a freelance young and passionate <strong>developer</strong> & <strong>designer</strong> <br />
              who loves his work.</p>
            <br />
            <p>As a web designer and developer, I believe good design is about finding the <br />
              right balance between aesthetic design and functionality. I aim to create <br />
              beautiful, user-friendly designs to help my clients achieve their business goals. <br />
              If you're looking for or <strong>Web Designer</strong> or <strong>Front End Developer</strong> who can help <br />
              you take your business to the next level, don't hesitate to get in touch. I can't <br />
              wait to get started on your project!</p>
            <div className='about-me__content--icons'>
              <Link href={"#"}><LinkedIn/></Link>
              <Link href={"#"}><Twitter/></Link>
              </div>
          </div>
          <img className='about-me__img' src={myPic.src} alt="about me ahmed alzagri" />
        </div>
      <Pattern2 classes={'right-pattern'} />
      <Pattern2 classes={'left-pattern'} />
      </div>
    </section>
  )
}

export default AboutMe