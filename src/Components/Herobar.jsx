import React from 'react'
import heroImage from "../assets/hero-fashion.jpeg"
const Herobar = () => {
  return (
    <div>
      <img
  src={heroImage}
  alt="StyleNest fashion collection"
  className="w-full h-[500px] object-cover"
/>
    </div>
  )
}

export default Herobar
