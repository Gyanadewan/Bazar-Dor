
import Link from "next/link"
import { notFound } from "next/navigation"
import { GoTriangleDown, GoTriangleUp } from "react-icons/go"
import { MdKeyboardArrowRight } from "react-icons/md"

function ProductDetailsPage({ product }) {
  if (!product) {
    notFound()
  }

  const increased = product.today > product.yesterday
  const decreased = product.today < product.yesterday
  const change = product.today - product.yesterday

  const changePercent =
    product.yesterday === 0
      ? 0
      : ((change / product.yesterday) * 100).toFixed(1)

  return (
    <main className="min-h-screen px-3 py-5 sm:px-4 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 mt-8 md:mt-0 flex flex-wrap items-center gap-1 text-sm text-gray-700 sm:gap-2 sm:text-base">
          <Link href="/" className="hover:text-green-700">
            হোম
          </Link>

          <MdKeyboardArrowRight className="shrink-0" />

          <span className="break-words">{product.categoryNameBn}</span>

          <MdKeyboardArrowRight className="shrink-0" />

          <span className="">{product.nameBn}</span>
        </div>

        <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl sm:h-20 sm:w-20 sm:rounded-2xl sm:text-4xl">
                {product.image}
              </div>

              <div className="min-w-0">
                <h1 className="break-words text-xl font-bold text-black sm:text-2xl">
                  {product.nameBn}
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}{" "}
                  {product.categoryNameBn}
                </p>

                <div className="mt-3">
                  <p className="text-xs text-gray-600 sm:text-sm">
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

            <div className="w-full shrink-0 rounded-xl bg-[#f0f5f0] p-4 text-center sm:w-auto sm:min-w-[190px] sm:p-5">
              <p className="text-sm text-gray-600">আজকের দাম</p>

              <p className="mt-1 text-2xl font-bold text-black sm:text-3xl">
                {product.today.toLocaleString("bn-BD")}{" "}
                <span className="text-lg sm:text-xl">টাকা</span>
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
                {Number(changePercent).toLocaleString("bn-BD")}%
              </p>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 sm:mt-5 sm:p-5">
          <h2 className="mb-4 text-base font-bold text-black sm:text-lg">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
              <p className="text-sm text-gray-700">আজকের দাম</p>
              <p className="mt-2 text-xl font-bold text-gray-700 sm:text-2xl">
                {product.today.toLocaleString("bn-BD")}{" "}
                <span>টাকা</span>
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
              <p className="text-sm text-gray-700">গতকালের দাম</p>
              <p className="mt-2 text-xl font-bold text-gray-700 sm:text-2xl">
                {product.yesterday.toLocaleString("bn-BD")}{" "}
                <span>টাকা</span>
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
              <p className="text-sm text-gray-700">গত সপ্তাহের দাম</p>
              <p className="mt-2 text-xl font-bold text-gray-700 sm:text-2xl">
                {product.lastWeek.toLocaleString("bn-BD")}{" "}
                <span>টাকা</span>
              </p>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 sm:mt-5 sm:p-5">
          <h2 className="mb-4 text-base font-bold text-black sm:text-lg">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-xl">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead className="bg-white text-gray-700">
                <tr>
                  <th className="p-3 sm:p-4">বাজার</th>
                  <th className="p-3 sm:p-4">বিভাগ</th>
                  <th className="p-3 sm:p-4">সর্বনিম্ন</th>
                  <th className="p-3 sm:p-4">সর্বোচ্চ</th>
                </tr>
              </thead>

              <tbody>
                {product.markets?.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className="border-b border-gray-100 bg-gray-100 text-gray-700"
                  >
                    <td className="p-3 sm:p-4">{market.market}</td>
                    <td className="p-3 sm:p-4">{market.division}</td>
                    <td className="whitespace-nowrap p-3 sm:p-4">
                      {market.min.toLocaleString("bn-BD")} টাকা
                    </td>
                    <td className="whitespace-nowrap p-3 sm:p-4">
                      {market.max.toLocaleString("bn-BD")} টাকা
                    </td>
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
