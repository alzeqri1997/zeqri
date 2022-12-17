import React from 'react'

const Char = ({children, charClass = ''}) => {
  const chars = children.split('');
  return (
    chars.map((char, index) => {
      if (char === ' ') return ' ';
      return<div key={index} className={charClass} >{char}</div>
    })
  )
}

export default Char