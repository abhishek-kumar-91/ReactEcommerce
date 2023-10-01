import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {add} from '../reducer/cartSlice'
import { useDispatch } from 'react-redux';


function ProductDescription() {
  const {id} = useParams();
 const [detailsPage, setDetailsPage] = useState([]);

 const dispatch = useDispatch();

 
  const details = async() => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setDetailsPage(response.data)
  }

  useEffect(()=>{
    details()
  },[])

  const addToCart = (product) =>{
    dispatch(add(product))
  }
  console.log(detailsPage)

  return (
    <>
    <div className='w-full flex gap-5 h-[100vh] border-solid border-2 border-black mt-14 p-10'>
      <div className='w-[40vw] h-[70vh] overflow-hidden rounded-lg'>
          <img src={detailsPage.image} className='w-[40vw] h-[70vh] object-contain ' />
      </div>

      <div className='w-[60vw] h-[70vh] p-10'>
        <h1 className='text-xl font-bold mb-2'>Product Name: {detailsPage?.title}</h1>
        <h2 className='text-lg font-bold mb-2'>Category: {detailsPage?.category}</h2>
        <h3 className='text-md font-semibold mb-2'>Description: {detailsPage?.description}</h3>
        <h3 className='mb-2 bg-green-500 text-white inline-block px-6 py-2 rounded-2xl font-bold'>{detailsPage?.rating?.rate}</h3>
        <h1 className='text-2xl font-extrabold mb-6'>Price: ${detailsPage?.price}</h1>

        <div>
        <Link to="/checkoutpage">  <button 
          className='bg-green-500 px-10 py-4 text-white font-bold text-lg mr-4 rounded-xl hover:bg-green-700 duration-300 ease-in-out hover:scale-110'  >Buy Now
          </button></Link>
          <button 
          onClick={()=>addToCart(detailsPage)}
          className='bg-orange-500 px-10 py-4 text-white font-bold text-lg rounded-xl hover:bg-orange-700 duration-300 ease-in-out hover:scale-110'>Add To Cart</button>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default ProductDescription