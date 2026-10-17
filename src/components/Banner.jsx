import Image from "next/image"
import Link from "next/link"

function Banner() {
  const bdDate = new Date().toLocaleDateString("bn-BD", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section className="max-w-7xl mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 bg-white rounded-2xl px-6 py-5 md:px-12 md:py-12 shadow-sm">

        <div className="flex flex-col items-start gap-5">
          <span className="bg-green-200 text-green-800 p-2 rounded-xl ">
            {bdDate}
          </span>

          <h1 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-8">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
            দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link href="/allproducts" className="btn bg-green-600 hover:bg-green-700 text-white border-none rounded-lg px-6 py-3">
            সব পণ্য দেখুন
          </Link>
        </div>

        <div className="relative flex justify-center items-center">
          <Image
            src="/images/bazar-hero.png"
            width={300}
            height={300}
            alt="নিত্যপ্রয়োজনীয় বাজারের পণ্য"
            priority
            className=""
          />
        </div>

      </div>
    </section>
  )
}

export default Banner