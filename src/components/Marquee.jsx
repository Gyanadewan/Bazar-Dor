import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

async function Marquee() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  )
  const data = await res.json()
  const headlines = data

  return (
    <div className="bg-green-700 py-3 text-white">
      <MarqueeText>
        {headlines.map((product) => (
          <span key={product.id} className="mx-6 whitespace-nowrap">
            {product.image} {product.nameBn} — {product.today} টাকা/
            {product.unit === "kg" ? "কেজি" : product.unit}

            {product.change?.dir === "up" ? (
              <span className="ml-2 text-red-300">
                ↑ {product.change.pct}%
              </span>
            ) : product.change?.dir === "down" ? (
              <span className="ml-2 text-green-300">
                ↓ {product.change.pct}%
              </span>
            ) : (
              <span className="ml-2">→ ০%</span>
            )}
          </span>
        ))}
      </MarqueeText>
    </div>
  )
}

export default Marquee
