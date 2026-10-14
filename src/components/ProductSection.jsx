import { getProducts } from "@/products"
import IncreasedProducts from "./IncreasedProducts"
import DecreasedProducts from "./DecreasedProducts"
import AllProducts from "./AllProducts"

 async function ProductSection() {
const products = await getProducts()
  return (
    <div>
     <IncreasedProducts products={products} />
      <DecreasedProducts products={products} />
      <AllProducts products={products} />
    </div>
  )
}

export default ProductSection
