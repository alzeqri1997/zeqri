import React, { useRef, useLayoutEffect} from 'react'
import Divider from './Divider'
import Project from './Project'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import {gsap} from 'gsap'
import { Pattern } from './icons'

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger)
  const projects = useRef();
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.top-pattern-parallax', {
        scrollTrigger: {
          trigger: '.project',
            start: '-=30% center',
            markers: true
        },
        keyframes: {
          opacity: [0, 1,0]
        },
        repeat: -1,
        duration: 2,
        repeatDelay: 0.5
      })
    }, projects)
    return () => ctx.revert();
  }, [])
  return (
    <div ref={projects} className='light-bg relative' >
      <Pattern classes='top-pattern'/>
      <Pattern classes='top-pattern top-pattern-parallax'/>
      <section id='work' className='projects container relative' >
        <Divider text={"Some of Things I’ve Built"} />
        <Project />
      </section>
      <Pattern classes='bottom-pattern'/>
    </div>
  )
}

export default Projects