import React from 'react'
import Card from './Card'
import { cards } from '../content'

const WhatIDo = () => {
  return (
    <section className='what-i-do container' >
      {cards.map( (card, index)=> <Card data={card} key={index}  />  )}
    </section>
  )
}

export default WhatIDo