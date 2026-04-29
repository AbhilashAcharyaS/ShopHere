import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'


const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer shadow-md border-gray-400 hover:scale-105 transition ease-in-out duration-500'>
        <div className="overflow-hidden">
            <img src={image[0]} alt="product image" className='w-50 h-60 object-contain rounded-2xl' />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem