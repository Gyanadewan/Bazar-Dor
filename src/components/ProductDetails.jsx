
import Link from "next/link"
import {
  GoTriangleDown,
  GoTriangleUp,
} from "react-icons/go"
import { MdKeyboardArrowRight } from "react-icons/md"

function ProductDetailsPage({ product }) {
  console.log(product)
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
       <div className="flex gap-2">
         <Link href="/" className="mb-6  items-center gap-2 text-gray-700">
          হোম 
        </Link>
       <div>
          <span className="mb-6 inline-flex items-center text-gray-700">
            <MdKeyboardArrowRight/>
          {product.categoryNameBn}
          </span>
            </div>
       <div>
           <span className="mb-6 inline-flex items-center text-gray-700">
            <MdKeyboardArrowRight/>
          {product.nameBn}
        </span>
       </div>
       </div>

              <section className="rounded-2xl border border-gray-200 bg-white p-6">
  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
    <div className="flex items-center gap-4">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-4xl">
        {product.image}
      </div>

      <div className="min-w-0">
    
        <h1 className="text-2xl font-bold text-black">
          {product.nameBn}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          প্রতি {product.unit === "kg" ? "কেজি" : product.unit} {product.categoryNameBn}
        </p>

        <div className="mt-3">
          <p className="text-sm text-gray-600">
            গতকালের তুলনায় আজ দাম
          </p>

          <p
            className={`mt-1 text-sm font-semibold ${
              increased
                ? "text-red-600"
                : decreased
                  ? "text-green-600"
                  : "text-gray-600"
            }`}
          >
            {increased
              ? `বেড়েছে · ${change.toLocaleString("bn-BD")} টাকা`
              : decreased
                ? `কমেছে · ${Math.abs(change).toLocaleString("bn-BD")} টাকা`
                : "কোনো পরিবর্তন হয়নি"}
          </p>
        </div>
      </div>
    </div>

    <div className="w-full shrink-0 rounded-xl bg-[#f0f5f0] p-5 text-center sm:w-auto sm:min-w-[190px]">
      <p className="text-sm text-gray-600">আজকের দাম</p>

      <p className="mt-1 text-3xl font-bold text-black">
        {product.today.toLocaleString("bn-BD")}{" "}
        <span className="text-xl">টাকা</span>
      </p>

      <p className="mt-1 text-sm text-black">
        টাকা/{product.unit === "kg" ? "কেজি" : product.unit}
      </p>

      <p
        className={`mt-2 flex items-center justify-center gap-1 ${
          increased
            ? "text-red-600"
            : decreased
              ? "text-green-600"
              : "text-gray-500"
        }`}
      >
        {increased ? (
          <GoTriangleUp />
        ) : decreased ? (
          <GoTriangleDown />
        ) : null}

        {change > 0 ? "+" : ""}
        {changePercent.toLocaleString("bn-BD")}%
      </p>
    </div>
    </div>
      </section>

        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
          <h2 className="mb-4 text-lg font-bold text-black">দামের সারসংক্ষেপ</h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-700">আজকের দাম</p>
              <p className="mt-2 text-2xl text-gray-700  font-bold space-x-2 ">
                 {product.today.toLocaleString("bn-BD")}<span>টাকা</span>
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-700">গতকালের দাম</p>
              <p className="mt-2 text-2xl text-gray-700  font-bold  space-x-2">
               {product.yesterday.toLocaleString("bn-BD")}<span>টাকা</span>
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-700">গত সপ্তাহের দাম</p>
              <p className="mt-2 text-2xl text-gray-700 font-bold  space-x-2">
                {product.lastWeek.toLocaleString("bn-BD")}<span>টাকা</span>
              </p>
            </div>
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
                    <td className="p-4 space-x-2">{market.min.toLocaleString("bn-BD")}<span>টাকা</span></td>
                    <td className="p-4 space-x-2">{market.max.toLocaleString("bn-BD")} <span>টাকা</span></td>
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