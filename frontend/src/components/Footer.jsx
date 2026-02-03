import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-center sm:text-left'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div> 
              <Link to="/"><h1 className="text-3xl font-bold mb-6">ShopHere</h1></Link>
              <p className='w-full md:w-2/3 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero labore laborum est velit cumque aspernatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, veniam</p>
            </div>
            <div>
              <p className='text-xl font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 9876543210</li>
                <li>ShopHere@email.com</li>
              </ul>
            </div>
        </div>
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2026@ ShopHere.com - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer