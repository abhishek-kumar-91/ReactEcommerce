import React from 'react'
import {FaCheck} from 'react-icons/fa'
import { useSelector } from 'react-redux'

function CheckoutPage() {

  let items = useSelector(state=> state.cart)
  items = []
  console.log(items)
 

  return (
    <div className='text-2xl font-extrabold flex items-center justify-center w-full h-[90vh] border-solid border-2 border-black gap-3'><FaCheck className='text-6xl'/><h1>Thank You for the checkout product</h1></div>
  )
}

export default CheckoutPage