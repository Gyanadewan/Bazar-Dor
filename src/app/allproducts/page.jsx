import AllProducts from "@/components/AllProducts"
import { getProducts } from "@/products";


async function page() {
  const products = await getProducts();
  return (
    <div className="py-3">
       <AllProducts products ={products }></AllProducts>
    </div>
  )
}

export default page
