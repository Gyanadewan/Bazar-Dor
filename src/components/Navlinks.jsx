
async function Navlinks() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  )

  const data = await res.json()
  const categories = data

  return (
    <nav className="border-y border-gray-200">
      <ul className="flex items-center justify-center gap-6 overflow-x-auto px-4 py-3">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex  cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-[16px] font-medium text-gray-600 transition hover:bg-green-50 hover:text-green-700 "
          >
            <span>{category.icon}</span>
            <span>{category.nameBn}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navlinks
