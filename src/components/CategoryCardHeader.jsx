import { notFound } from "next/navigation";

async function CategoryCardHeader({ category, total }) {
  if (!category) {
    notFound();
  }

  return (

    <div className="mb-5 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 text-3xl">
        {category?.categoryIcon}
      </div>

      <div>
        <h2 className="font-semibold text-gray-800">
          {category?.categoryNameBn}
        </h2>

        <p className="text-sm text-gray-500">
          {total.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও পরিবর্তন
        </p>
      </div>
    </div>
  )
    
}

export default CategoryCardHeader