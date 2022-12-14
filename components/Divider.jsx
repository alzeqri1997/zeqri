import React, { useEffect, useRef, useState } from 'react'

const Divider = ({ text }) => {
  const dividerWidth = useRef()
  const [left, setLeft] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      const { current:{ clientWidth } } = dividerWidth;
      const fullScreenWidth = window.innerWidth;

      const leftSide = (fullScreenWidth - clientWidth) / 2 - 9
      setLeft(leftSide)
    }
    if( left === null ) handleResize()
    window.addEventListener('resize', handleResize)
  }, [])
  
  return (
      <>
      {/* <div className='divider__line1' ></div> */}
      <div ref={dividerWidth} style={{ left:`${left}px`}} className='divider container '>
      <span className='divider__text'>{text}</span>
      <div className='divider__line2' ></div>
    </div>
    </>
  )
}

export default Divider