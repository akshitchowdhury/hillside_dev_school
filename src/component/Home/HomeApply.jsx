import React from 'react'
import { Link } from 'react-router-dom'


export default function HomeApply() {
  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top: "0" });
  };
  return (
    <div className="bg-[#f1be31] text-pink-950 p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Explore working at PET
      </h2>
      <p className="text-sm md:text-base text-gray-600 lg:text-lg mb-4">
        Great teachers love what they do and create great experiences for their students. The IHS family welcomes teachers who can open eyes and minds to innovation. Are you that kind of teacher?
      </p>
      <Link
        to="/career" onClick={handleClick}
        className="text-sm md:text-base text-white lg:text-lg underline hover:no-underline"
      >
        Apply via portal
      </Link>
    </div>
  )
}