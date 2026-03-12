import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId}=useParams();
  const {products, currency}=useContext(ShopContext);
  const [productData, setProductData]=useState(false);
  const [image, setImage]=useState('');
  const [size,setSize]=useState('');

  const fetchProduct= async()=>{ 
   console.log(productId);
   products.map((item)=>{
    if(item.id==productId){
      setProductData(item);
      setImage(item.images[0])
      console.log(item);
      return null;
    }
   })

    // const pro=products.filter((item)=>item.id==productId);
    // setProductData(pro);
    // setImage(pro.images[0])
  }

  useEffect(()=>{
    fetchProduct()
  },[productId,products])

  return productData && (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Produuct data */}
      <div className='flex gap-12 flex-col sm:flex-row'>
        {/* Product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.images.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} alt="product" className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className=' w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto' />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2 '>{productData.title}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>


            <p className='pl-2'>Rating: {productData.rating}</p>
          </div>
          <p className='mt-5 text-3xl font-medium '>{currency+" "+productData.price }</p>
          <p className='mt-5 text-gray-500 md:w-4/5 '>{productData.description }</p>
          <div className='flex flex-col gap-4 my-8'>
              <p>Select size</p>
              <div className="flex gap-2">
                {
                  productData?.sizes?.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size?'border-orange-500':""} `} key={index}>{item}</button>
                  ))
                }
              </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original product</p>
            <p>Cash On Delivery</p>
            <p>Easy Return & Exchange Policy</p>
          </div>
        </div>
      </div>

      {/* Description & Review */}
      <div className="mt-20">
        <div className="flex">
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews ({productData?.reviews?.length})</p>
        </div>
        <div className='flex flex-col gap-4 border p-6 text-sm text-gray-500'>
          {/* {
            productData?.reviews?.map((item,index)=>(
              <p> <b>{item.reviewerName}</b> : <i>({item.rating}/5)</i> {item.comment}</p>
            ))
          } */}
          <p>An e-commerce app is a mobile or web-based application designed for buying and selling goods, services, or digital products over the internet. It serves as a digital storefront, allowing users to browse catalogs, add items to a shopping cart, and securely complete purchases via payment gateways.</p>
          <p></p>
        </div>
      </div>
      {/* Related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  )
}

export default Product