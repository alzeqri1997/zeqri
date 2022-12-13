import Link from 'next/link'
import React, {useEffect, useRef, useState} from 'react'
import projectImage from '../assets/images/projects/HalaBK.png'
import projectImage2 from '../assets/images/projects/Titanex.png'
import Button from './Button'
import { Behance, Github } from './icons'
import { projectDetails } from '../content'

const Project = () => {   
  const ProjectItem = (props) => {
    const [projectBodyHight, setProjectBodyHight] = useState(0)
    const projectBody = useRef()
    const { imageRight, image, badge, title, body,link, icons } = props.item

    useEffect(() => {
      const { current } = projectBody
      console.log(current.clientHeight)
      setProjectBodyHight(current.clientHeight)
    })
    return (
      <div className={`project ${imageRight ? 'left-side' : ''}`}>
      <Link className='project__img' href={link} ><img  src={image} alt="" /></Link>
      <div className='project__content' >
        <span className='project__content--badge'> {badge}</span>
        <span className="project__content--title">{title}</span>
        <div dangerouslySetInnerHTML={{ __html: body }} ref={projectBody} className='project__content--body' ></div>
        <div style={{ marginTop: `${projectBodyHight + 40}px` }} className='project__content--cta' >
          <Button text={'See the Result'} isWithIcon={true} />
          <div className="icons">{icons.map(item => (<Link href={item.link} > {item.icon === 'Behance' ? Behance : Github} </Link>))}</div>
        </div>
      </div>
    </div>
    )
  }



  return (
    
      projectDetails.map(item => (
      <ProjectItem item={item}  />
      ))
    
  )
}

export default Project