'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Product from './Product'





const ProductFeed = () => {

  const [products, setProducts] = useState([])



  useEffect(() => {

    const getProdcuts = async () => {

        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
    return data
    }

    getProdcuts()

  },[])




  



  return (
 <>

        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto px-5'>
            {
            products.slice(0,4)?.map(({id, title, price, description,category,image}) => {
return(

  <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image}/>
)
            })
            }

<div className='md:col-span-2'>
{
products.slice(4,5)?.map(({id, title, price, description,category,image}) => {
return(

<Product key={id} id={id} title={title} price={price} description={description} category={category} image={image}/>
)
})
}



</div>

           
        </div>


        <Image src={'/Asset/images/ad.jpg'} width={1900} height={200} className='md:cols-span-full'/>


<div className='grid grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto w-full'>
{
products.slice(5, products.length)?.map(({id, title, price, description,category,image}) => {
return(

<Product key={id} id={id} title={title} price={price} description={description} category={category} image={image}/>
)
})
}
</div>

</>
  )
}

export default ProductFeed