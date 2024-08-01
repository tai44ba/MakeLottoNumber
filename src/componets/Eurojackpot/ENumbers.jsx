import React from 'react'
import "./ENumbers.css"

const ENumbers = ({numbersE,additionalE}) => {
  return (
    <>
        {numbersE ? numbersE.map((num,i)=><span key={i} className='numbersE'>{num}</span>):<span></span>}
        {additionalE ? additionalE.map((num,i)=><span key={i} className='numbersE' id='additionalE'>{num}</span>):<span></span>}
    </>
  )
}

export default ENumbers