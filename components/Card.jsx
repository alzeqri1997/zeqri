import Image from 'next/image';
import React from 'react'
import Char from './Char';

const Card = ({ data: { imageSM, imageBG, title, body } }) => {
  
  return (
    <div className='card' >
      <Image className='card__image' src={imageSM} alt="design figma ui-ux front end react vue " />
      <div className='card__content'>
        <span className='card__content--title'><Char charClass='card__content--title--char' >{title}</Char></span>
        <p className='card__content--body' >{body}</p>
      </div>

      <Image className='imageBG' src={imageBG} alt="design figma ui-ux front end react vue " />
    </div>
  )
}

export default Card