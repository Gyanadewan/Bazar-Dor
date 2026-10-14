import ProductCard from "@/components/ProductCard"


async function page({params}) {
    const {categoryId} = await params
    const res = await fetch (`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`)
    const products= await res.json()
  return (
    <div className=" max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-3  py-2">
        {
            products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
        }
    </div>
    </div>
  )
}

export default page
