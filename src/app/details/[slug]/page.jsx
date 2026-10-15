import ProductDetails from "@/components/ProductDetails"
import { getProducts } from "@/products"


 async function page({params}) {
    const {slug} = await params
    const products = await getProducts()
    const product = products.find((item) => item.slug === slug)

  return (
    <div>
       <ProductDetails product={product}></ProductDetails>
    </div>
  )
}

export default page
