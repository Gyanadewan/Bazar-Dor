import Link from 'next/link'
import React from 'react'
import { FaHome } from 'react-icons/fa'

function  NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
<h1 className="text-8xl font-bold text-red-600">404</h1>

  <h2 className="mt-4 text-2xl font-bold text-gray-600">
    দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
  </h2>

  <p className="mt-3 text-gray-500">
    আপনি যে পেজটি খুঁজছেন, সেটি হয়তো সরানো হয়েছে অথবা লিংকটি ভুল।
  </p>

  <Link
    href="/"
    className="btn btn-primary mt-6 gap-2"
  >
    <FaHome />
    হোম পেজে ফিরে যান
  </Link>
</div>

)
}

export default  NotFoundPage
