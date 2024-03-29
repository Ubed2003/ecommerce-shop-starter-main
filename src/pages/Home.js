import React, {useContext} from 'react';

// import product context
import {ProductContext} from '../contexts/ProductContext'
// import component 
import Product from '../components/Product';
import Hero from '../components/hero/Hero'

const Home = () => {
  // get products from product context 
  const products = useContext(ProductContext)


  // get only men's nd women clothing category


  return <> 
  <Hero/>
  <section className='py-16'>
    <div className=" container mx-auto">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
       {products.length > 0 ?
       products.map(product =><Product product={product} key={product.id}/>)
       :
       <div className="font-gray-200 font-bold text-2xl"> Please Search </div>

        }
      </div>
    </div>
    </section>
    </>;

};

export default Home;
