import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {currency, delivery_fee}= useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

    const fetchProducts=async()=>{
      const res=await fetch("https://dummyjson.com/products");
      const json=await res.json(); 
      setLatestProduct(json.products)
    }

    useEffect(()=>{
      fetchProducts();
    },[])

  return (
    <div className='my-10'>
        <div className='text-3xl text-center py-8'>
            <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugit esse quasi accusantium iusto, magni laborum nesciunt officia. </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {latestProduct.map((item)=>{
            return <ProductItem key={item.id} id={item.id} name={item.title} images={item.images} price={item.price} />
          })}
        </div>
    </div>
  )
}

export default LatestCollection