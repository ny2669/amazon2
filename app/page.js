
import Banner from './component/Banner'
import Heading from './component/Heading'
import ProductFeed from './component/ProductFeed'



export default function Home() {



  return (
<>
<Heading/>

    <main className='max-w-[80%] mx-auto'>
 
      {/* <Banner/> */}

<Banner/>
<ProductFeed/>
     
    </main>
    </>
  )
}
