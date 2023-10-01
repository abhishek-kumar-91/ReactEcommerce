import React from 'react'
import bg from '../assets/banner.jpg'
function Banner() {
  return (
    <div className='flex mt-14'>
      <div className='w-full h-[450px]'>
         <img src={bg} className='h-[400px] w-[100vw] object-cover object-center'/>
         
      </div>
    </div>
  )
}

export default Banner