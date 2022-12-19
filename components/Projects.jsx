import React, { useRef, useLayoutEffect, useEffect } from 'react'
import Divider from './Divider'
import Project from './Project'
import { Pattern } from './icons'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Projects = () => {
  const projects = useRef()
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    const project = gsap.utils.toArray('.project')
      project.forEach((el, index) => {
        const overlay = el.children[0].children[1];
        const image = el.children[0].children[0]
        gsap.timeline({
          onStart() {
            console.log('scroll called')
            ScrollTrigger.refresh()
          },
          scrollTrigger: {
            trigger: el,
            start: 'top center',
          }
        }).fromTo(el, {
          opacity: 0,
          x: function () {
            return index % 2 === 0 ? -100 : 100
          }
        }, {
          opacity: 1,
          x: 0
        }).to(overlay, {
          duration: 0.65,
          delay:0.1,
          x: function () {
            return index % 2 ===0 ? "100%" : "-100%"
          },
          ease: "power2.out"
        }, "<").fromTo(image,{
          scale: 1.2,
          ease: "power2.out"
        }, {
          scale: 1,
          delay:0.1,
          ease: "power2.out"
        }, "<")
      })
    }, projects)
    return () => { ctx.revert() };
  }, [])

  return (
    <div ref={projects} className='light-bg relative' >
      <Pattern classes='top-pattern' />
      <section id='work' className='projects container relative' >
        <Divider text={"Some of Things I’ve Built"} />
        <Project />
      </section>
      <Pattern classes='bottom-pattern' />
    </div>
  )
}

export default Projects