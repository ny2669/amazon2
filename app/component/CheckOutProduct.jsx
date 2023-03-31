import Image from 'next/image'
import React from 'react'
import { useStore } from '../store/store'


const CheckOutProduct = ({id, title, price, description,category,image, rating, hasPrime}) => {


    const cartItem = useStore(state => state.addToCart)
const productItem = useStore(state => state.cart.items)
const removeItem = useStore(state => state.removeItem)




const addItemToBasket = () => {

    const product = {
        id,
         title,
         price,
         description,
        category,
        image,
        rating,
        hasPrime
    
        }
        cartItem({...productItem, product})
}



const removeItemFromBasket = () => {

    removeItem(id)

}



  return (
    <div className='grid grid-cols-5 '>
{/* right */}

<Image src={image} width={200} height={200} alt='' className='object-contain'/>

{/* left */}
<div className='col-span-3 mx-5'>
<p>{title}</p>

<div className='flex'>
{Array(rating).fill().map((_,i) =>(

<svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
</svg>

         ))}
    
</div>

<p className='text-xs my-5 line-clamp-3 '>{description}</p>
<p>£{price}</p>

{hasPrime && (

    <div>
<Image src={'/Asset/images/primeDelivery.png'} width={50} height={20}/>
<p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
    </div>

)}
</div>

<div className='flex flex-col space-y-2 my-auto justify-self-end'>
<button className='button' onClick={addItemToBasket}>Add to Baskett</button>
<button className='button' onClick={removeItemFromBasket}>Remove from Basket</button>
</div>


    </div>
  )
}

export default CheckOutProduct