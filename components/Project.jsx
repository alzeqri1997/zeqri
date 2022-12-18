import Link from 'next/link'
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import Button from './Button'
import { Behance, Github } from './icons'
import { projectDetails } from '../content'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Project = () => {
  gsap.registerPlugin(ScrollTrigger)
  const project = useRef();
  const projectImage = useRef();
  const content = useRef();
  const ProjectItem = (props) => {
    const [projectBodyHight, setProjectBodyHight] = useState(0)
    const projectBody = useRef()
    const { imageRight, image, badge, title, body, link, icons } = props.item

    useEffect(() => {
      const { current } = projectBody
      setProjectBodyHight(current.clientHeight)
    })
    useLayoutEffect(() => {
      const overlay = projectImage.current.children['1']
      const image = projectImage.current.children['0']
      const leftSide = project.current.className.split(' ')[1]
      gsap.timeline({
        scrollTrigger: {
          trigger: project.current,
          start: "top 80%",
        }
      }).fromTo(project.current, 
        {
          opacity: 0,
          x: function () {
            return leftSide ? -100 : 100 
          }
        }, {
          opacity: 1,
          x: 0
        }
      ).to(overlay, {
        duration: 0.65,
        delay:0.1,
        x: function () {
          return leftSide ? "100%" : "-100%"
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
    }, [])
    return (
      <div ref={project} className={`project ${imageRight ? 'left-side' : ''}`}>
        <Link ref={projectImage} className='project__img' href={link} >
          <img src={image} alt={"project " + { title }} />
          <div className='project__img--overlay' ></div>
        </Link>
        <div ref={content} className='project__content' >
          <span className='project__content--badge'> {badge}</span>
          <span className="project__content--title">{title}</span>
          <div dangerouslySetInnerHTML={{ __html: body }} ref={projectBody} className='project__content--body' ></div>
          <div style={{ marginTop: `${projectBodyHight + 40}px` }} className='project__content--cta' >
            <Button text={'See the Result'} isWithIcon={true} />
            <div className="icons">{icons.map((item, index) => (<Link key={index} href={item.link} > {item.icon === 'Behance' ? <Behance /> : <Github />}</Link>))}</div>
          </div>
        </div>
      </div>
    )
  }



  return (

    projectDetails.map((item, index) => (
      <ProjectItem key={index} item={item} />
    ))

  )
}

export default Project