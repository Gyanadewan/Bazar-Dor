import { GoTriangleDown, GoTriangleUp } from "react-icons/go"
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

async function Marquee() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  )
  const data = await res.json()
  const headlines = data

  return (
    <div className="  bg-white py-3 border-b border-gray-300">
      <MarqueeText direction="right" duration={20}>
        {headlines.map((product) => (
         <span
    key={product.id}
    className="mx-6 inline-flex items-center"
   >
  {product.image}  
  <span className="text-black">
     {product.nameBn}  {product.today} টাকা/ 
     {product.unit === "kg" ? "কেজি" : product.unit}
    </span>   
 

     {product.change?.dir === "up" ? (
    <span className="ml-2 inline-flex items-center whitespace-nowrap text-red-500">
      <GoTriangleUp  className="text-2xl"/>
      {product.change.pct}%
    </span>
    ) : product.change?.dir === "down" ? (
    <span className="ml-2 inline-flex items-center whitespace-nowrap text-green-500">
      <GoTriangleDown className="text-2xl" />
      {product.change.pct}%
    </span>
  ) : (
    <span className="ml-2 whitespace-nowrap">→ ০%</span>
  )}
   </span>
        ))}
      </MarqueeText>
    </div>
  )
}

export default Marquee