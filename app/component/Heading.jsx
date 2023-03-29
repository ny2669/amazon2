import Image from 'next/image'
import React from 'react'

const Heading = () => {
  return (
  <header >
    <div className='flex flex-grow py-2 bg-[rgb(19,25,33)] items-center'>
<div className='relative mt-2 flex flex-grow items-center sm:flex-grow-0 '>
    <Image src={'/Asset/images/removebg.png'} alt='' width={150} height={40} className='object-contain cursor-pointer' />
</div>

{/* search */}

<div className='hidden sm:flex h-10 rounded-md cursor-pointer flex-grow lg:flex-shrink items-center border bg-yellow-500 hover:bg-yellow-400 ml-4'>

<input type="text" placeholder='Search Amazon.co.uk' className='p-2 focus:outline-none h-full w-6 flex-grow flex-shrink rounded' />
{/* search icon */}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  text-center p-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>



</div>

<div className='flex text-white  items-center text-xs space-x-6 mx-6 whitespace-nowrap'>

    <div className='link'>
        <p>Hello, Ny</p>
        <p className='font-extrabold md:text-xs'>Account & lists</p>
    </div>
    <div className='link'>
        <p>Returns</p>
        <p className='font-extrabold md:text-xs'>& Orders</p>
    </div>
    <div className='link relative flex items-center'>
       <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-extrabold'>0</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

<p className='font-extrabold md:text-xs hidden md:inline mt-2'>Basket</p>
    </div>


</div>


</div>

{/* rightside */}
<div className='bg-[rgb(35,47,63)] text-white text-sm  flex space-x-3 p-2 pl-6 items-center'>
    <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
 All</p>
 <p>Spring Sale</p>
 <p>Best Sellers</p>
 <p>Gift ideas</p>
 
 <p className='hidden lg:inline-flex'>New Releases</p>
 <p className='hidden lg:inline-flex'>Customer Service</p>
</div>

  </header>
  )
}

export default Heading