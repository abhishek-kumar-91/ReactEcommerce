import React, { useEffect, useState } from 'react'
import {  useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import {add} from '../reducer/cartSlice'
function Categories() {
  const {data, status} = useSelector(state=> state.products)
  const [itemData, setItemData] = useState([])
 const [showData, setShowData] = useState([]);

  useEffect(()=>{
   setItemData(data)
   allProduct()
  }, [data, itemData])

  console.log(itemData)
  const dispatch = useDispatch()
  const addToCart = (products) =>{
    dispatch(add(products))
  }



const textShorter = (text, maxLength)=>{
  if(text <= maxLength) return text;
  return text.slice(0, maxLength) + "......"
}

const allProduct = ()=>{
  console.log("clicked")
  const result = itemData.filter(item => item)
  setShowData(result)
}

const getElectronics = () =>{
  const result = itemData.filter(item=> item.category === 'electronics')
  console.log(result)
  console.log("clicked by electronics store")
  setShowData(result)
}

const getJewelery = () =>{
  const result = itemData.filter(item=> item.category === 'jewelery')
  console.log(result)
  console.log("clicked by electronics store")
  setShowData(result)
}
const getMensCloth = () =>{
  const result = itemData.filter(item=> item.category === "men's clothing")
  console.log(result)
  console.log("clicked by electronics store")
  setShowData(result)
}
const getWomensCloth = () =>{
  const result = itemData.filter(item=> item.category === "women's clothing")
  console.log(result)
  console.log("clicked by electronics store")
  setShowData(result)
}
  return (
    <>
    <div className='  w-full mt-14 p-10'>
      <div className='flex w-full items-center '>
        <h1 className='font-bold text-gray-500 text-lg mr-2'>Filters</h1>
      <div><button onClick={()=>allProduct()} className= ' mr-3 bg-black text-white px-5 py-3 font-semibold hover:scale-105 duration-300 ease-linear'>All</button></div>
        <div><button onClick={()=>getElectronics()} className= ' mr-3 bg-black text-white px-5 py-3 font-semibold hover:scale-105 duration-300 ease-linear'>Electronics</button></div>
        <div><button onClick={()=>getJewelery()} className=' mr-3 bg-black text-white px-5 py-3 font-semibold hover:scale-105 duration-300 ease-linear'>Jewelery</button></div>
        <div><button onClick={()=>getMensCloth()} className=' mr-3 bg-black text-white px-5 py-3 font-semibold hover:scale-105 duration-300 ease-linear'>Men's clothing</button></div>
        <div><button onClick={()=>getWomensCloth()} className='  mr-3 bg-black text-white px-5 py-3 font-semibold hover:scale-105 duration-300 ease-linear'>Women's clothing</button></div>
        
      </div>

     
    </div>

    <div className='w-full flex flex-wrap gap-5  justify-center  mb-10'>

{
   showData.map((products, idx) => (
    <div key={idx} className='h-[400px] w-[300px] border-2  border-black border-solid rounded-xl'>
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

export default Categories