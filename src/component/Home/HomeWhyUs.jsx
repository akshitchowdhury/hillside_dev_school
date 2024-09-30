import React from 'react'

export default function HomeWhyUs() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-[#3D0000] text-white p-8 md:w-1/3">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">VISION</h2>
        <p className="mb-6">To nurture a supportive and stimulating learning environment that inspires curiosity, creativity, and a lifelong love of learning in every child. We aim to cultivate confident, compassionate, and well-rounded individuals who are prepared to contribute positively to society.</p>
        <button className="border-2 border-white px-6 py-2 hover:bg-white hover:text-[#3D0000] transition-colors duration-300">
          Discover now
        </button>
      </div>
      <div className="bg-[#FFD700] text-black p-8 md:w-1/3">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">OVERVIEW</h2>
<p className="mb-6">Bethel English High School prepares students to contribute positively to society through a strong academic foundation and commitment to excellence. Offering a wide range of courses, the school provides an exceptional educational experience tailored to diverse learning needs.</p>

        <button className="border-2 border-black px-6 py-2 hover:bg-black hover:text-[#FFD700] transition-colors duration-300">
          View now
        </button>
      </div>
     
      <div className="bg-[#8B0000] text-white p-8 md:w-1/3">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">MISSION</h2>
        <p className="mb-6">Our mission is to provide a safe, engaging, and inclusive environment where children can develop their intellectual, social, emotional, and physical abilities.We strive to work in partnership with families and the community to build a strong foundation for each child’s future education.        .</p>
        <button className="border-2 border-white px-6 py-2 hover:bg-white hover:text-[#8B0000] transition-colors duration-300">
          Explore now
        </button>
      </div>
      
    </div>
  )
}