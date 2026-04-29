import React, { useContext, useEffect, useState } from 'react'
import Title from "../components/Title"
import ProductItem from '../components/ProductItem';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { currency, search, showSearch, products } = useContext(ShopContext);

  const [showFilter, setShowFilter]=useState(false);
  const [filteredProducts, setFilteredProducts]=useState([]);
  const [category, setCategory]=useState([]);
  const [subCategory, setSubCategory]=useState([]);
  const [sortType, setSortType] = useState("relavent"); 

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory((prev)=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setCategory(prev=>[...prev, e.target.value])
    }
  }

  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory((prev)=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev, e.target.value])
    }
  }

  const applyFilter=()=>{
    let productsCopy= products.slice();

    if(showSearch && search){
      // productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item?.subCategory));
    }

    setFilteredProducts(productsCopy)
  }

  const sortProducts=()=>{
    let fpCopy= filteredProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a,b)=>(a.price -b.price)))
        break;

      case 'high-low':
        setFilteredProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
        break;
    
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    setFilteredProducts(products)
  },[])

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search, showSearch])

  useEffect(()=>{
    sortProducts();
  },[sortType])



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(prev=>!prev)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 sm:hidden ${showFilter?"rotate-90":""} `}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?"":"hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Men"} onChange={toggleCategory}/> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Women"} onChange={toggleCategory}/> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Kids"} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>
        {/* Subcategory filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?"":"hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Topwear"} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Bottomwear"} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={"Winterwear"} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
          {/* Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filteredProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
        </div>
      </div>

    </div>
  )
}

export default Collection