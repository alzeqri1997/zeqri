import React from 'react'

const Divider = ({ text }) => {

  return (
    <div className='divider'>
      <div className='divider__line1' ></div>
      <span className='divider__text'>{text}</span>
      <div className='divider__line2' ></div>
    </div>
  )
}

export default Divider