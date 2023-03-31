import React from 'react';
import './globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 



export default function RootLayout({ children}) {

  return (
    <html lang="en">
           
      <body className='bg-gray-100'>
     
        {children}
        
        </body>
       
     
    </html>
  )
}
