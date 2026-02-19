import React, { useContext, useEffect, useState } from 'react'
import Title from "../components/Title"
import ProductItem from '../components/ProductItem';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { currency, search, showSearch } = useContext(ShopContext);
  const products=[{
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 10.48,
      rating: 2.56,
      stock: 99,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "BEA-ESS-ESS-001",
      weight: 4,
      dimensions: {
        width: 15.14,
        height: 13.08,
        depth: 22.99,
      },
      warrantyInformation: "1 week warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 3,
          comment: "Would not recommend!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Eleanor Collins",
          reviewerEmail: "eleanor.collins@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Lucas Gordon",
          reviewerEmail: "lucas.gordon@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Eleanor Collins",
          reviewerEmail: "eleanor.collins@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 48,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "5784719087687",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 18.19,
      rating: 2.86,
      stock: 34,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "BEA-GLA-EYE-002",
      weight: 9,
      dimensions: {
        width: 9.26,
        height: 22.47,
        depth: 27.67,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great product!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Savannah Gomez",
          reviewerEmail: "savannah.gomez@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Awesome product!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Christian Perez",
          reviewerEmail: "christian.perez@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Poor quality!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Nicholas Bailey",
          reviewerEmail: "nicholas.bailey@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 20,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "9170275171413",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      discountPercentage: 9.84,
      rating: 4.64,
      stock: 89,
      tags: ["beauty", "face powder"],
      brand: "Velvet Touch",
      sku: "BEA-VEL-POW-003",
      weight: 8,
      dimensions: {
        width: 29.27,
        height: 27.93,
        depth: 20.59,
      },
      warrantyInformation: "3 months warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Would buy again!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Alexander Jones",
          reviewerEmail: "alexander.jones@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Elijah Cruz",
          reviewerEmail: "elijah.cruz@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very dissatisfied!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Avery Perez",
          reviewerEmail: "avery.perez@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 22,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "8418883906837",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category: "beauty",
      price: 12.99,
      discountPercentage: 12.16,
      rating: 4.36,
      stock: 91,
      tags: ["beauty", "lipstick"],
      brand: "Chic Cosmetics",
      sku: "BEA-CHI-LIP-004",
      weight: 1,
      dimensions: {
        width: 18.11,
        height: 28.38,
        depth: 22.17,
      },
      warrantyInformation: "3 year warranty",
      shippingInformation: "Ships in 1 week",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Great product!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great product!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Ruby Andrews",
          reviewerEmail: "ruby.andrews@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Would buy again!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Clara Berry",
          reviewerEmail: "clara.berry@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 40,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "9467746727219",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    },
    {
      id: 5,
      title: "Red Nail Polish",
      description:
        "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      category: "beauty",
      price: 8.99,
      discountPercentage: 11.44,
      rating: 4.32,
      stock: 79,
      tags: ["beauty", "nail polish"],
      brand: "Nail Couture",
      sku: "BEA-NAI-NAI-005",
      weight: 8,
      dimensions: {
        width: 21.63,
        height: 16.48,
        depth: 29.84,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 2,
          comment: "Poor quality!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Benjamin Wilson",
          reviewerEmail: "benjamin.wilson@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great product!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Liam Smith",
          reviewerEmail: "liam.smith@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very unhappy with my purchase!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Clara Berry",
          reviewerEmail: "clara.berry@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 22,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "4063010628104",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    }];

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
      productsCopy=productsCopy.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
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
            id={item.id}
            name={item.title}
            images={item.images}
            price={item.price}
          />
        ))}
        </div>
      </div>

    </div>
  )
}

export default Collection