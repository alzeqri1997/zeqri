import {useRef, useLayoutEffect} from 'react'
import Divider from './Divider'
import { Pattern2 } from './icons'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Char from './Char'


const AboutMe = () => {
  gsap.registerPlugin(ScrollTrigger);
  const aboutMe = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        defaults: {
          duration: 0.5,
        },
        scrollTrigger: {
          trigger: '.about-me',
          start: 'top center',
        }
      }).fromTo('.about-me__content', {
        opacity: 0,
        x: -100,
      }, {
        opacity: 1,
        x: 0
      }, "-=.5")
        .to('.about-me__content--heading-char', {
        y: 0,
        stagger: 0.03,
        delay: 0.2,
        duration: .4,
      }, "-=.3").fromTo('.about-me__content--text', {
        opacity: 0,
        x: -100,
      }, {
        opacity: 1,
        delay: 0.3,
        stagger: 0.1,
        x: 0
      }, "-=.5")
    }, aboutMe)
    return () => ctx.revert()
  },[])
  return (
    <section ref={aboutMe} id='about' className='light-bg relative '>
				<div className='container' >
          <Divider text={"About Me"} />
        </div>
      <div className='relative hidden' >
        <div className='container about-me' >
          <div className='about-me__content'>
            <h2 className='about-me__content--heading'><Char charClass='about-me__content--heading-char' >A Few Words About me</Char></h2>
            <p className='about-me__content--text'>I’m <strong>Ahmed Al-zeqri</strong>, a freelance young and passionate <strong>developer</strong> <br />
              who loves his work.</p>
            <br />
            <p className='about-me__content--text'>As a web developer, I believe that a good website or web app is about finding the <br />
              right balance between aesthetic design and functionality. I aim to create <br />
              amazing and clean web experiences to help my clients achieve their business goals. <br />
              If you're looking for or <strong>Frontend Developer</strong> who can help <br />
              you take your business to the next level, don't hesitate to get in touch. I can't <br />
              wait to get started on your project!
            </p>
          </div>
        </div>
      <Pattern2 classes={'right-pattern'} />
      <Pattern2 classes={'left-pattern'} />
      </div>
    </section>
  )
}

export default AboutMe