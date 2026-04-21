import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products}= useContext(ShopContext);
    const [latestProducts, setLatestProducts]= useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10))
    },[products])

  return (
    <div className='my-10'>
        <div className='text-3xl text-center py-8'>
            <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugit esse quasi accusantium iusto, magni laborum nesciunt officia. </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {latestProducts?.map((item)=>{
            return <ProductItem key={item._id} id={item._id} name={item.title} image={item.image} price={item.price} />
          })}
        </div>
    </div>
  )
}

export default LatestCollection