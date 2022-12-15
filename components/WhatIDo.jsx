import React from 'react'
import Card from './Card'
import { cards } from '../content'
import Divider from './Divider'

const WhatIDo = () => {
  return (
    <section className='what-i-do container' >
      <Divider text={"What I do exactly"} />
      {cards.map( (card, index)=> <Card data={card} key={index}  />  )}
    </section>
  )
}

export default WhatIDo