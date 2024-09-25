import React from 'react'

export default function HomeWhyUs() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-[#3D0000] text-white p-8 md:w-1/3">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">21st Century Skills</h2>
        <p className="mb-6">Empowering students with essential tools for a fast-paced future.</p>
        <button className="border-2 border-white px-6 py-2 hover:bg-white hover:text-[#3D0000] transition-colors duration-300">
          Discover now
        </button>
      </div>
      <div className="bg-[#8B0000] text-white p-8 md:w-1/3">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why PET?</h2>
        <p className="mb-6">The answer is simple: we focus on inculcating core values and skills.</p>
        <button className="border-2 border-white px-6 py-2 hover:bg-white hover:text-[#8B0000] transition-colors duration-300">
          Explore now
        </button>
      </div>
      <div className="bg-[#FFD700] text-black p-8 md:w-1/3">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Campus</h2>
<p className="mb-6">Interested in joining our school? Discover our state-of-the-art facilities, classrooms, and more.</p>

        <button className="border-2 border-black px-6 py-2 hover:bg-black hover:text-[#FFD700] transition-colors duration-300">
          View now
        </button>
      </div>
    </div>
  )
}