
"use client"

function SortSelect({ sort }) {
  return (
    <select
      value={sort}
      onChange={(e) => {
        window.location.href = `?sort=${e.target.value}`
      }}
      className="select rounded-2xl bg-gray-200 px-5 py-2 font-medium text-black"
    >
      <option value="default">ডিফল্ট</option>
      <option value="low">দাম কম থেকে বেশি</option>
      <option value="high">দাম বেশি থেকে কম</option>
    </select>
  )
}

export default SortSelect
