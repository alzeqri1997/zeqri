import React from 'react'
import loadingImg from '../assets/images/loading.gif'

  const Loading = () => {
  return (
    <div className='loading' >
      <img className='loading__img' src={loadingImg.src} alt="loading gif" />
      <span className='loading__text'  >just, hold up a second . . .</span>
    </div>
  )
}

export default Loading;
