
import React from 'react'
import ProductCard from './ProductCard'
function AllProducts({products}) {
  return (
    <div  className=' max-w-7xl mx-auto'>
       <h3 className='text-xl font-semibold text-black'>সব পণ্য</h3>
       <h4 className='text-lg font-semibold text-gray-500'>মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</h4>
       <div className='grid grid-cols-3 gap-3  py-2'>
        {
        products.map(product =><ProductCard key={product.id} product={product}></ProductCard>  )
       }
       </div>
    </div>
  )
}

export default AllProducts
