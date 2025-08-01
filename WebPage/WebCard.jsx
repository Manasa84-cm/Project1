import React from 'react'


const WebCard = (props) => {
  return (
    <div className='bg-[#0000] h-[100vh] w-[100vw] pt-50 '>
      <div className='h-[50vh] w-[20vw] object-cover-row ml-25 bg-black'>
        <img src={props.link} alt="" className='ml-0.1'/>
      </div>
      <div> 
         <div className='mt-20  text-center text-amber-50'>
          <p className=" text-lg">Lorem Ipsum</p>
          <p className="text-sm">$200.00</p>
        </div>
      </div>

     </div>
  )
}

export default WebCard
