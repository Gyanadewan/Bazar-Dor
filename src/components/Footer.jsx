function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-6">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 text-sm text-gray-500 md:flex-row md:items-center">
        <p>
          <span className="font-semibold text-gray-800">বাজার দর</span>
          {" "}— প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  )
}

export default Footer