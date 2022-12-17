import React, { useRef, useLayoutEffect } from 'react'
import Card from './Card'
import { cards } from '../content'
import Divider from './Divider'
import { gsap } from 'gsap';
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';


const WhatIDo = () => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = useRef();
  const whatIDo = useRef();
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ defaults: { duration: 0.5 }, scrollTrigger: {
          trigger: '.card',
          start: 'top center',
          markers: true
        }})
        .from('.card', {
          opacity: 0,
          transformOrigin: 'left center',
          duration: 0.5,
          x: function (index) {
            if (index % 2 === 0) return -300
            else return 300
          },
          scale: 1.5,
        })
        .from('.card__image', {
          opacity: 0,
          duration: 0.5,
          y: 30,
        }, "-=")
        .from('.card__content--body', {
          opacity: 0,
          duration: 0.5,
          y: 30
        })
        .to('.card__content--title--char', {
          y: 0,
          stagger: 0.03,
          delay: 0.2,
          duration: .4,
        }, "<")
        .from('.imageBG', {
          duration: 2,
          y: 300,
          stagger: 0.1,
          delay: 0.2,
        }, "-=2")
    }, whatIDo)
    return () => ctx.revert();
  }, [])
  return (
    <section ref={whatIDo} className='what-i-do container' >
      <Divider text={"What I do exactly"} />
      {cards.map((card, index) => <Card data={card} key={index} />)}
    </section>
  )
}

export default WhatIDo