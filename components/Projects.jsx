import React, { useRef, useLayoutEffect} from 'react'
import Divider from './Divider'
import Project from './Project'
import { Pattern } from './icons'

const Projects = () => {
  return (
    <div className='light-bg relative' >
      <Pattern classes='top-pattern'/>
      <section id='work' className='projects container relative' >
        <Divider text={"Some of Things I’ve Built"} />
        <Project />
      </section>
      <Pattern classes='bottom-pattern'/>
    </div>
  )
}

export default Projects