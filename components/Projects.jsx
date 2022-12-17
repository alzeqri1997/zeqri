import React, { useRef, useLayoutEffect} from 'react'
import Divider from './Divider'
import Project from './Project'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import {gsap} from 'gsap'

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = useRef();
  const projects = useRef();
  
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     tl.current = gsap
  //       .timeline({ defaults: { duration: 0.5 }, scrollTrigger: {
  //         trigger: '.project',
  //         start: 'top center',
  //         markers: true
  //       }
  //       }).from('.project', {
  //         opacity:0,
  //       })
  //   }, projects)
  //   return () => ctx.revert();
  // }, [])
  return (
    <section ref={projects} id='work' className='projects container relative' >
      <Divider text={"Some of Things I’ve Built"} />
      <Project />
    </section>
  )
}

export default Projects