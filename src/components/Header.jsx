
import Image from "next/image"
import Navlinks from "./Navlinks"
import Link from "next/link"

function Header() {
  const bdDate = new Date().toLocaleDateString("bn-BD", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    calendar: "bengali",
  })

  return (
    <header className=" border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
          <Link href={"/"}>
               <Image
              className="rounded-2xl bg-green-600 p-2"
              src="/images/logo-icon.png"
              width={45}
              height={45}
              alt="বাজার দর লোগো"
              priority
            />
          </Link>

            <div>
              <h1 className="text-xl font-bold text-green-700 md:text-2xl">
                বাজার দর
              </h1>
              <p className="mt-1 text-xs text-gray-500">
                {bdDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
          <Link href='/signin'>
            <button className="rounded-lg border border-green-700 px-3 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50 md:px-5">
              সাইন ইন
            </button>
          </Link>

            <Link href="/signup">
            <button className="rounded-lg bg-green-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-800 md:px-5">
              সাইন আপ
            </button>
            </Link>
          </div>
        </div>

        <div>
          <Navlinks />
        </div>
      </div>
    </header>
  )
}

export default Header

