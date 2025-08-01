import React from 'react'

const Card = (props) => {
  return (
    <div>
         <div className='h-[30vh] w-[20vw] b-box rounded-2xl bg-[#E9A5F1]'>
         <p className='italic justify-centern text-center text-2xlm-3'>{props.tittle}<br/>{props.number}</p>
       </div>

    </div>
  )
}

export default Card
