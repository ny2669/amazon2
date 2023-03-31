"use client"
import Image from 'next/image'
import React from 'react'
import CheckOutProduct from '../component/CheckOutProduct'
import Heading from '../component/Heading'
import { useStore } from '../store/store'
import { getAuth } from 'firebase/auth'
import { loadStripe } from '@stripe/stripe-js';
import { db } from '../fireBase';
import {useRouter} from 'next/navigation'





const Checkout = () => {

const auth = getAuth();
const user = auth.currentUser;


const router = useRouter()

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);


  const cartItems = useStore(state => state.cart.items)


  const totals = cartItems.reduce((total, item) => total + item.product.price, 0);




  const checkoutsession = async () => {
    const payment = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartItems: cartItems, // change items to cartItems
        email: user.email,
      }),
    });
    const session = await payment.json();
    console.log(session);

    router.push(session.url)
  };


  return (
    <div className='bg-gray-100'>

      <Heading/>
      <main className='lg:flex max-w-[80%] mx-auto'>
      
   <div className='relative flex-grow m-5 shadow-sm'>
<Image src={'/Asset/images/amzonAd.jpg'} width={1920} height={800} alt='' className='object-contain'/>

<div className='flex flex-col p-5 space-y-10 bg-white'>

<h1 className='text-3xl bored-b pb-4'>{cartItems.length === 0? 'Your Basket is Empty' :'Your Shopping Basket'}</h1>
</div>

<div>
  {cartItems?.map((item,i) => {

return(

 <CheckOutProduct key={i} id={item.product.id}  description={item.product.description} title={item.product.title} price={item.product.price} category={item.product.category} image={item.product.image} rating={item.product.rating} hasPrime={item.product.hasPrime}/>

)})}
</div>

   



   </div>

   <div className='flex flex-col bg-white p-10 shadow-md'> 
  {cartItems.length > 0 && (

    <>
    <h2 className='whitespace-nowrap'>Subtotal ({cartItems.length} items): <span className='font-bold'>£</span>{totals}</h2>

    <button role="link" onClick={checkoutsession} className={`button mt-2 ${!user && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}` } disabled={!user}>{!user? 'Sign in to checkout': 'Proceed to checkout'}  </button>
    </>
  )}
</div>

      </main>
      
      </div>
  )
}

export default Checkout