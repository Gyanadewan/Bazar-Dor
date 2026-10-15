
import CategoriesCard from "@/components/CategoriesCard"
import CategoryCardHeader from "@/components/CategoryCardHeader"
import SortSelect from "@/components/SortSelect"

async function page({ params, searchParams }) {
  const { categoryId } = await params
  const { sort = "default" } = await searchParams

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
  )

  const categories = await res.json()
   const sortedCategories = categories.slice().sort((a, b) => {
  if (sort === "low") return a.today - b.today
  if (sort === "high") return b.today - a.today
  return 0
})
  return (
       <div className="mx-auto max-w-7xl">
      <div className="mt-5">
        <CategoryCardHeader
          category={categories[0]}
          total={categories.length}
        />
      </div>

      <div className="flex justify-end rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
        <SortSelect sort={sort}></SortSelect>
      </div>

      <div className="grid grid-cols-1 gap-3 py-2 sm:grid-cols-2 lg:grid-cols-3">
        {sortedCategories.map((category) => (
          <CategoriesCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default page