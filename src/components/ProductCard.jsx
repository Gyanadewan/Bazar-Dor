
import Link from "next/link"
import { GoTriangleDown, GoTriangleUp } from "react-icons/go"

function ProductCard({ product }) {
  const increased = product.today > product.yesterday

  const percentage =
    product.yesterday > 0
      ? ((product.today - product.yesterday) / product.yesterday) * 100
      : 0

  return (
    <Link href={`/details/${product.slug}`}>
      <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3 shadow-sm md:p-5">
        <div className="min-w-0">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-2xl md:h-14 md:w-14 md:text-3xl">
              {product.image}
            </div>

            <div className="min-w-0">
              <h3 className="truncate font-semibold text-gray-800">
                {product.nameBn}
              </h3>

              <p className="text-sm text-gray-500">
                {product.unit}
              </p>
            </div>
          </div>

          <div className="py-2 text-black">
            <h3 className="text-sm md:text-base">আজকের দাম</h3>

            <p className="text-xl font-semibold md:text-2xl">
              {product.today}
            </p>
          </div>
        </div>

        <div
          className={`mt-20 flex shrink-0 flex-col items-end rounded-xl bg-gray-100 px-2 py-1 md:px-4 ${
            percentage === 0
              ? "text-gray-500"
              : increased
                ? "text-red-500"
                : "text-green-600"
          }`}
        >
          <span className="flex items-center text-sm font-semibold md:text-base">
            {increased ? <GoTriangleUp /> : <GoTriangleDown />}
            {Math.abs(percentage).toFixed(1)}%
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
