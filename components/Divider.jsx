import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Divider = ({ text }) => {
  const dividerRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const line1 = dividerRef.current.children[0];
    const text = dividerRef.current.children[1];
    const line2 = dividerRef.current.children[2];
    gsap.timeline({
      defaults: {
        duration: 0.5
      },
      scrollTrigger: {
        trigger: dividerRef.current,
        start: 'bottom 70%'
      }
    }).fromTo(dividerRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
    }).to(line1, {
      delay: .2,
      clipPath: 'inset(0 100%  0 100%)' 
    }, "<").to(text, {
      clipPath: 'inset(0 100%  0 100%)' 
    }).to(line2, {
      duration:2,
      clipPath: 'inset(0 100%  0 100%)' 
    })
  }, [])
  return (
    <div ref={dividerRef} className='divider'>
      <div className='divider__line1' ></div>
      <span className='divider__text'>{text}</span>
      <div className='divider__line2' ></div>
    </div>
  )
}

export default Divider