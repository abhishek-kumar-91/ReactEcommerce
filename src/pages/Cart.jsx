import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {remove} from '../reducer/cartSlice'
import  {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Cart() {
  const items = useSelector(item=> item.cart);
  const dispatch = useDispatch();

  const shortTitle = (item, maxLength) =>{
    if(item <= maxLength) return item;
    return item.slice(0, maxLength) + "....."; 
  }

  const removeCart = (id) =>{
    dispatch(remove(id))
  }

  if(items.length === 0){
    return <div className='text-2xl font-extrabold flex items-center justify-center w-full h-[90vh] border-solid border-2 border-black gap-3'><FaShoppingCart className='text-6xl'/><h1>Cart is Empty</h1></div>
  }
  return (
    <>
    <div className='w-full h-[100vh] border-solid border-2 border-black flex '>

    
    <div className='w-[70vw] h-[90vh] p-10 mt-14 overflow-y-scroll scrollbar-hide '>
      {
       
          items.map((cartItems, idx)=>(
            <div key={idx} className='flex justify-between items-center px-10 w-full mb-3 h-16 border-2 border-solid border-gray-500'>
           <div><img src={cartItems?.image} className='w-[70px] h-14' /></div> 
           <div><h1>{shortTitle(cartItems?.title, 25)}</h1></div>
           <div><h1>{cartItems?.category}</h1></div>
           <div><h1>${cartItems?.price}</h1></div>
           <div>
            <button onClick={()=> removeCart(cartItems.id)} className='bg-black text-white px-8 py-2 rounded-xl'>Remove</button>
           </div>
            
          </div>
            ))
        }
    
    </div>

    <div className='w-[30vw] h-32  mt-24 p-5 '>
          <h1 className='text-md font-bold '>Total Items: {items.length}</h1>
          <h1 className='text-black font-bold mb-2 text-lg'>Total Price: ${
            items.reduce((acc, currentValue) =>{
              return Math.floor(acc + currentValue.price)
            },0)
            }</h1>

       <Link to= "/checkoutpage">     <button
             className='bg-orange-500 text-white w-full py-3 rounded-xl hover:bg-orange-700 hover:scale-105 font-bold text-lg duration-300 ease-in-out'>Checkout
             </button>
             </Link>
    </div>
    </div>
    </>
  )
}

export default Cart