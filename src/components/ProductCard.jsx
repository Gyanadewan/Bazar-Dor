
import { GoTriangleDown, GoTriangleUp } from "react-icons/go"

function ProductCard({ product }) {
  const increased = product.today > product.yesterday
  const percentage =
    product.yesterday > 0
      ? ((product.today - product.yesterday) / product.yesterday) * 100
      : 0

  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div>
        <div className="flex items-center gap-3">
     <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 text-3xl">
         {product.image}
      </div>

        <div>
          <h3 className="font-semibold text-gray-800">
            {product.nameBn}
          </h3>
          <p className="text-sm text-gray-500">
            {product.unit}
          </p>
        </div>
      </div>
        <div className="text-black py-2">
             <h3>আজকের দাম</h3>
             <p className="text-2xl font-semibold">{product.today}</p>
         </div>
      </div>

      <div
        className={`flex flex-col items-end mt-20 bg-gray-100 rounded-xl px-4 py-1  ${
           percentage === 0
        ? "text-gray-500"
       : increased
       ? "text-red-500"
      : "text-green-600"
        }`}
      >
        <span className="flex items-center font-semibold">
          {increased ? <GoTriangleUp /> : <GoTriangleDown />}
          {Math.abs(percentage).toFixed(1)}%
        </span>
      </div>
    </div>
  )
}

export default ProductCard
