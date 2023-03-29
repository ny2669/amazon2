"use client"
import React from 'react'
import Image from 'next/image';
import Carousel from 'better-react-carousel'






const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'></div>
      
    <div className='relative'>
        <Carousel autoplay={5000} loop={true} cols={1} rows={1} hideArrow={true} showDots={false} containerStyle={{width:'100%'}}>

  <Carousel.Item>
  <div className='relative'>
<Image src={'/Asset/images/Deals.jpg'} alt='' width={1920}height={800} className='object-cover'/>
</div>
</Carousel.Item>

<Carousel.Item>
<div className='relative'>
<Image src={'/Asset/images/fashion.jpg'} alt='' width={1520}height={600}/>
</div>
</Carousel.Item>
<Carousel.Item>
<div className='relative'>
<Image src={'/Asset/images/spring.jpg'} alt='' width={1520}height={600}/>

</div>
</Carousel.Item>
        </Carousel>
        </div>
    </div>
  )
}

export default Banner