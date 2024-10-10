// 
import React from 'react'
import Preschool from '../../assets/midSchool.jpg'
import { CheckCircle2 } from 'lucide-react'


export default function ClassFive() {
  return (
    <>

      <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto p-6 bg-white">

      <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={Preschool}
            alt="Preschool children playing"

            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Classes 5-8</h1>
          <p className="mb-4 text-justify text-gray-600">
          Our program for Classes 5-7 provides students with real-life experiences and authentic learning opportunities. Whether it’s a classroom-based lesson, differentiated learning, or a digital experience, we ensure that the students are able to engage with purpose in learning experiences that stimulate thought and result in deeper understanding and improved achievement.
          </p>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Life at Middle school:</h2>
          <p className="mb-4 text-justify text-gray-600">
          The day begins with a morning assembly featuring prayers from different religions. A daily Restorative Justice circle helps build community within the classroom and empowers students to understand, address and repair harm through dialogue. In terms of academics, subject-specific classes are designed to seamlessly integrate the 4Cs of learning. A structured sports curriculum teaches students specific skills required for various team games. Weekly music, cooking, art and library classes keep the school week interesting. 
          </p>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Highlights</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" />
              <span>Home work is assigned not more than in two subjects per day</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" />
              <span>Continuous and Comprehensive Evaluation (CCE)</span>
            </li>
          </ul>
        </div>
        
      </div>
    </>
  )

}