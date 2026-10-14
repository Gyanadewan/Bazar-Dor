export async function getProducts() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  )
  const data = await res.json()
  return data
}