import React from 'react'
import i1 from '/public/Moon.jpg'
import i2 from '/public/Falls.jpg'
import i3 from '/public/Forest.jpg'
import i4 from '/public/RBeach.jpg'

function Props(props) {
  return (
      <div className='bg-amber-600 flex '>
        <div className='bg-black w-3xs'>
          <img className='h-50 w-3xs' src={props.link} alt="image" />
        </div>

        <div className=''>
          <p>{props.headline}</p>
          <p>{props.desc}</p>
        </div>
      </div>
   
  )
}

export default Props
