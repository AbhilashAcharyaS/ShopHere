import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between '>
        <img className='w-[max(5%,60px)]' src="https://img.freepik.com/premium-vector/technology-concept-vector-illustration-featuring-consulting-design-flat-style-elements_1226483-4088.jpg?semt=ais_hybrid&w=740&q=80" alt="admin logo" />
        <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm ml-4'>Logout</button>
    </div>
  )
}

export default Navbar