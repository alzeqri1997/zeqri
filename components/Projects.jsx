import React from 'react'
import Divider from './Divider'
import Project from './Project'

const Projects = () => {
  return (
    <section id='work' className='projects container relative' >
      <Divider text={"Some of Things I’ve Built"} />
      <Project />
    </section>
  )
}

export default Projects