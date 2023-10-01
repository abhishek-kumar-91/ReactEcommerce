import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import  {FaShoppingCart, FaHome, FaStore,FaWarehouse, FaSearch, FaArrowRight} from 'react-icons/fa'
import Home from '../pages/Home'
import {useDispatch, useSelector} from 'react-redux'
import {add} from '../reducer/cartSlice'


function Header() {
    const items = useSelector(item=> item.cart)
    const [resultShow, setResultShow] = useState([])
    const dispatch = useDispatch();
    const [search, setSearch] = useState([])
    const [input, setInput] = useState("");
    
    useEffect(()=>{
        const fetApi = () =>{
            fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((data)=> setSearch(data))
        }

        fetApi()
    },[])

   
    const searchFilter = (value) =>{
        try{
            const result = search.filter(item=>(
                value && item && item.title && item.title.toLowerCase().includes(value)
             ))
                console.log(result)
             setResultShow(result);
        }catch(err){
            console.log(err)
        }
    }
    
    console.log("resultShow", resultShow)

    const handleChange = (value)=>{

        if(value === 0){
            console.log("type something")
        }else{
            setInput(value)
        searchFilter(value)
        }
        
    }

    
  const addToCart = (products) =>{
    dispatch(add(products))
  }



const textShorter = (text, maxLength)=>{
  if(text <= maxLength) return text;
  return text.slice(0, maxLength) + "......"
}

  return (
    <>
    <div className='bg-black w-full h-14 md:flex md:justify-between items-center md:px-10 fixed top-0'>
       <Link to="/"> <div> <h2 className='text-white cursor-pointer hover:text-orange-500 duration-300 ease-in-out'>ReactEcommerce</h2></div></Link>
        <div className='flex text-gray-500 justify-center items-center px-5 rounded-lg bg-white'><FaSearch/>
        <input type='search'
        placeholder='Search products......' 
        value={input}
        onChange={(e)=>handleChange(e.target.value)}
        className='w-[300px] h-10 px-2 text-gray-500 font-bold focus:outline-none'/>
    </div>
   

       
        <div>
            <ul className='text-white flex gap-8'>
                <Link to="/"><li className='flex gap-2 items-center justify-center hover:text-orange-500 duration-300 ease-in-out'><FaHome />Home</li></Link>
                <Link to="/products"><li className='flex gap-2 items-center justify-center hover:text-orange-500 duration-300 ease-in-out'><FaStore />Products</li></Link>
                <Link to="/categories"><li className='flex gap-2 items-center justify-center hover:text-orange-500 duration-300 ease-in-out'><FaWarehouse/>Categories</li></Link>
            </ul>
        </div>
        <div >
            <Link to="/cart"><h2 className='text-white flex justify-center items-center gap-2 hover:text-orange-500 duration-300 ease-in-out'><FaShoppingCart/>Cart: {items.length}</h2></Link>
        </div>
        <div >
            <button className='text-white flex gap-2 justify-center items-center hover:text-orange-500 duration-300 ease-in-out'><FaArrowRight/>LogIn/SignUp</button>
        </div>
    </div>

{ input === null? <Home />: 


resultShow.map((products, idx) =>(
    <div className='w-full h-auto justify-center bg-white z-50 items-center mt-16 flex flex-col '>
        <div>
        <h1 className='mt-16 text-black'>Search result: {input}</h1>
        </div>


        <div  key={idx} className='h-[400px] w-[300px] border-2 border-black border-solid rounded-xl'>
          <Link to={`/productDetails/${products.id}`}><img src={products?.image}  className='w-full p-2  text-white h-56 object-cotain'/> </Link>
        <h2 className='text-gray-700 text-md font-bold px-2'>Title: {textShorter(products?.title, 40)}</h2>
      <h3 className='text-yellow-500 font-bold px-2 pb-1'>Rating: {products?.rating.rate}</h3>
       <h1 className='text-gray-800 font-bold px-2 text-xl pb-1 flex item-center '>Price: ${products?.price}</h1>
      <div className='flex w-full px-2 justify-between'>
    <button  className='bg-black text-white px-8 py-3 mr-2 rounded-lg'>Buy</button>
     <button 
     onClick={()=> addToCart(products)}
     className='bg-black text-white px-8 py-3 rounded-lg'
     >Add To Cart</button>
          
         </div>
      </div>
        
    </div>
   )) 
   
   

    }

   
    </>
  )
}

export default Header