import React from 'react'
import paintSM from '../assets/images/paint.png'

const Card = ({data: {imageSM, imageBG, title, body }}) => {
  return (
    <div className='card' >
      <img className='card__image' src={imageSM} alt="" />
      <div className='card__content'>
        <span className='card__content--title'>{title}</span>
        <p className='card__content--body' >{body}
        </p>
      </div>

      <img className='imageBG' src={imageBG} alt="" />
    </div>
  )
}

export default Card