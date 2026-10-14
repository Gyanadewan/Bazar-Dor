import React from 'react'
import ProductCard from './ProductCard'
import { GoTriangleUp } from 'react-icons/go'
function IncreasedProducts({products}) {
    const increasedProducts =products.filter(product=> product.change.dir ==="up")
     .sort((a, b) => b.change.pct - a.change.pct)
     .slice(0, 6)
  return (
    <div className=' max-w-7xl mx-auto'>
       <h3 className='flex items-center'><GoTriangleUp className='text-red-500 text-xl' /><span className='font-semibold text-black text-2xl'> আজ দাম বেড়েছে</span></h3>
       <div className='grid grid-cols-3 gap-3  py-2'>
        {
        increasedProducts.map(product =><ProductCard key={product.id} product={product}></ProductCard>  )
       }
       </div>
    </div>
  )
}

export default IncreasedProducts
