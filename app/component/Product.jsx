import Image from 'next/image'
import React, { useState } from 'react'

const Product = ({id, title, price, description,category,image}) => {

    const max_rating = 5
    const min_rating = 1

const [rating] = useState(

    Math.floor(Math.random() * (max_rating - min_rating + 1) + min_rating))


    const [hasPrime] = useState(Math.random() < 0.5)
  return (
    <div className='relative bg-white z-30 m-5 p-10 flex flex-col '>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <div className='relative '>

            <Image src={image} width={200} height={200} className='object-contain mx-auto '/>
        </div>

        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
         {Array(rating).fill().map((_,i) =>(

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
</svg>

         ))}
    
        </div>
      
<p className='text-xs my-2 line-clamp-2'>{description}</p>

<div className='my-5'>£{price}</div>

<div className='flex item-center space-x-2 -mt-5'>
    {hasPrime &&
<Image src={'/Asset/images/primeDelivery.png'} className='object-contain' width={50} height={20} />

}
<p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
</div>
<button className='button my-5'>Add to basket</button>

    </div>
  )
}

export default Product