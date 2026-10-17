import { GoTriangleDown} from "react-icons/go"
import ProductCard from "./ProductCard"


function DecreasedProducts({products}) {
   const decreasedProducts =products.filter(product=> product.change.dir ==="down")
     .sort((a, b) => a.change.pct - b.change.pct)
     .slice(0, 6)
  return (
      <div className=' max-w-7xl mx-auto'>
            <h3 className='flex items-center'><GoTriangleDown className='text-green-600 text-2xl' /><span className='font-semibold text-black text-xl'> আজ দাম আজ দাম কমেছে</span></h3>
            <div className='grid grid-cols-3 gap-3  py-2'>
             {
            decreasedProducts.map(product =><ProductCard key={product.id} product={product}></ProductCard>  )
            }
            </div>
         </div>
  )
}

export default DecreasedProducts
