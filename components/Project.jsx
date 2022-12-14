import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { Behance, Github } from './icons'
import { projectDetails } from '../content'

const Project = () => {
  const ProjectItem = (props) => {
    const [projectBodyHight, setProjectBodyHight] = useState(0)
    const projectBody = useRef()
    const { imageRight, image, badge, title, body, link, icons } = props.item

    useEffect(() => {
      const { current } = projectBody
      setProjectBodyHight(current.clientHeight);
    })
    return (
      <div  className={`project ${imageRight ? 'left-side' : ''}`}>
        <Link target="_blank"  className='project__img' href={link} >
          <img src={image} alt={"project " + { title }} />
          <div className='project__img--overlay' ></div>
        </Link>
        <div  className='project__content' >
          <span className='project__content--badge'> {badge}</span>
          <span className="project__content--title">{title}</span>
          <div dangerouslySetInnerHTML={{ __html: body }} ref={projectBody} className='project__content--body' ></div>
          <div style={{ marginTop: `${projectBodyHight + 40}px` }} className='project__content--cta' >
            <Button target='_blank' link={link} text={'See the Result'} isWithIcon={true} />
            {icons && <div className="icons">{icons.map((item, index) => (<Link target='_blank' key={index} href={item.link} > {item.icon === 'Behance' ? <Behance /> : <Github />}</Link>))}</div>}
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