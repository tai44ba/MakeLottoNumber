import React from 'react'
import "./Numbers.css"

const Numbers = ({numbers,additional}) => {
  return (
    <>
        {numbers ? numbers.map((num,i)=><span key={i} className='numbers'>{num}</span>):<span></span>}
        {additional ? <span className='numbers' id='additional'>{additional}</span>:<span></span>}
    </>
  )
}

export default Numbers