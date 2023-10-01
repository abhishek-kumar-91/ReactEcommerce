import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {add} from '../reducer/cartSlice'
import {Link} from 'react-router-dom'
import {fetchProducts} from '../reducer/productSlice'

import Banner from '../components/Banner'

function Home() {

  const {data, status} = useSelector(state=> state.products)
  console.log(data)
  const dispatch = useDispatch();
  // const data = useSelector(state=> state.products)
  // const fetchProductsTest = async() =>{
  //   const data = await fetch('https://fakestoreapi.com/products', {mode: 'cors'})
  //   const result = await data.json()
  //   console.log(result)
  // }
  useEffect(()=>{
    dispatch(fetchProducts());
    // fetchProductsTest()
  },[])

  const addToCart = (products) =>{
    dispatch(add(products))
  }



const textShorter = (text, maxLength)=>{
  if(text <= maxLength) return text;
  return text.slice(0, maxLength) + "......"
}


  return (
    <>
   
    <Banner />

    <div className='w-full flex flex-wrap gap-5 justify-center '>

     {
        data.map((products, idx) => (
         <div key={idx} className='h-[400px] w-[300px] border-2 border-black border-solid rounded-xl'>
          <Link to={`/productDetails/${products.id}`}><img src={products?.image}  className='w-full p-2  text-white h-56 object-cotain'/> </Link>
        <h2 className='text-gray-700 text-md font-bold px-2'>Title: {textShorter(products?.title, 40)}</h2>
      <h3 className='text-yellow-500 font-bold px-2 pb-1'>Rating: {products?.rating.rate}</h3>
       <h1 className='text-gray-800 font-bold px-2 text-xl pb-1 flex item-center '>Price: ${products?.price}</h1>
      <div className='flex w-full px-2 justify-between'>
    <Link to="/checkoutpage"> <button  className='bg-black text-white px-8 py-3 mr-2 rounded-lg'>Buy</button></Link>
     <button 
     onClick={()=> addToCart(products)}
     className='bg-black text-white px-8 py-3 rounded-lg'
     >Add To Cart</button>
          
         </div>
      </div>
      
        ))
      
     
       
      
     } 

      </div>
   
    </>
  )
}

export default Home