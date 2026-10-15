import Link from "next/link"


function CategoriesCard({category}) {
  return (
  <Link href={`/details/${category.slug}`}>
    <div>
       <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div>
        <div className="flex items-center gap-3">
     <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 text-3xl">
         {category.image}
      </div>

        <div>
          <h3 className="font-semibold text-gray-800">
            {category.nameBn}
          </h3>
          <p className="text-sm text-gray-500">
            {category.unit}
          </p>
        </div>
      </div>
        <div className="text-black py-2">
             <h3>আজকের দাম</h3>
             <p className="text-2xl font-semibold">{category.today}</p>
         </div>
      </div>
    </div>
    </div>
   </Link>
    
  )
}

export default CategoriesCard
