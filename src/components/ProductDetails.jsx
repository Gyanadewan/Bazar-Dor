
import Link from "next/link"
import {
  GoArrowLeft,
  GoTriangleDown,
  GoTriangleUp,
} from "react-icons/go"

function ProductDetailsPage({ product }) {
  const increased = product.today > product.yesterday
  const decreased = product.today < product.yesterday
  const change = product.today - product.yesterday

  const changePercent =
    product.yesterday === 0
      ? 0
      : ((change / product.yesterday) * 100).toFixed(1)

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-6xl">
       <div>
         <Link href="/" className="mb-6 inline-flex items-center gap-2 text-gray-700">
          <GoArrowLeft />
          হোম 
        </Link>
        {/* <span className="mb-6 inline-flex items-center gap-2 text-gray-700">
          <GoArrowLeft />
          {}
        </span> */}
       </div>

        <section className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#f0f5f0] text-4xl">
                {product.image}
              </div>

              <div>
                <p className="text-sm text-gray-700 ">
                  {product.categoryNameBn}
                </p>

                <h1 className="text-2xl font-bold text-black">
                  {product.nameBn}
                </h1>

                <p className="text-sm text-gray-500">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[#f0f5f0] p-5 text-center">
              <p className="text-sm text-gray-600">আজকের দাম</p>
              <p className="text-3xl font-bold text-black">৳{product.today}</p>

              <p className={`flex items-center justify-center ${
                increased ? "text-red-600" :
                decreased ? "text-green-600" : "text-gray-500"
              }`}>
                {increased ? <GoTriangleUp /> :
                 decreased ? <GoTriangleDown /> : null}
                {change > 0 ? "+" : ""}{changePercent}%
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
          <h2 className="mb-4 text-lg font-bold text-black">দামের সারসংক্ষেপ</h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500">আজকের দাম</p>
              <p className="mt-2 text-2xl font-bold text-green-600">
                ৳{product.today}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500">গতকালের দাম</p>
              <p className="mt-2 text-2xl font-bold">
                ৳{product.yesterday}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500">গত সপ্তাহের দাম</p>
              <p className="mt-2 text-2xl font-bold">
                ৳{product.lastWeek}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-[#f0f5f0] p-4">
            <p className="text-sm text-gray-600">
              গতকালের তুলনায় দামের পরিবর্তন
            </p>
            <p className={`mt-1 font-semibold ${
              increased ? "text-red-600" :
              decreased ? "text-green-600" : "text-gray-600"
            }`}>
              {increased
                ? `দাম বেড়েছে ৳${change}`
                : decreased
                  ? `দাম কমেছে ${Math.abs(change)} টাকা`
                  : "দামের কোনো পরিবর্তন হয়নি"}
            </p>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
          <h2 className="mb-4 text-lg font-bold text-black">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[550px] text-left text-sm">
              <thead className="bg-white text-gray-700">
                <tr>
                  <th className="p-4">বাজার</th>
                  <th className="p-4">বিভাগ</th>
                  <th className="p-4">সর্বনিম্ন</th>
                  <th className="p-4">সর্বোচ্চ</th>
                </tr>
              </thead>

              <tbody>
                {product.markets?.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className="border-b border-gray-100 text-gray-700 bg-gray-300"
                  >
                    <td className="p-4">{market.market}</td>
                    <td className="p-4">{market.division}</td>
                    <td className="p-4 text-green-700">৳{market.min}</td>
                    <td className="p-4 font-semibold">৳{market.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductDetailsPage