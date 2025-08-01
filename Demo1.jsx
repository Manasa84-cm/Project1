import React from 'react'
import img1 from '/im1.png'
import img2 from '/im2.jpg'
import img3 from '/im3.png'
import img4 from '/im4.png'


function Demo1() {
  return (
    <div>
      <div className='text-8xl text-green-600 text-center'>
        Choose your tour
      </div>

      <div className='flex justify-around items-center my-40'>
        <div className=' w-3xs h-80 bg-center bg-cover border-b-black border-2 rounded-lg'  >
          <img className='h-60 rounded-lg' src={img1} alt="img1" />
          <p className='text-2xl text-black text-center'>Ganesha</p>
        </div>

        <div className=' w-3xs h-80 bg-center bg-cover border-b-black border-2 rounded-lg ' >
          <img className='h-60 rounded-lg' src={img2} alt="img2" />
          <p className='text-2xl text-black text-center'>Karnataka</p>
        </div>

        <div className=' w-3xs h-80 bg-center bg-cover border-b-black border-2 rounded-lg' >
          <img className='h-60 rounded-lg' src={img3} alt="img3" />
          <p className='text-2xl text-black text-center'>Nature</p>
        </div>

        <div className=' w-3xs h-80 bg-center bg-cover border-b-black border-2 rounded-lg' >
          <img className='h-60 w-3xs rounded-lg' src={img4} alt="img4" />
          <p className='text-2xl text-black text-center'>Mothu-Pathlu</p>
        </div>
      </div>
    </div>
  )
}

export default Demo1
