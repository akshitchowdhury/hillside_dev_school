// 
import React from 'react'
import Preschool from '../../assets/overView4.jpg'
import { CheckCircle2 } from 'lucide-react'


export default function ClassOne() {
  return (
    <>

      <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto p-6 bg-white">

        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Classes 1-4</h1>
          <p className="mb-4 text-gray-600">
            We believe that learning should be a joyful experience and that childhood should be about exploration and play. That’s why we do not assign students homework until Class 4. Built on the foundation of quality education,  our Primary school program offers students an experiential learning environment that ensures all-round development.
          </p>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Life at Primary school:</h2>
          <p className="mb-4 text-gray-600">
            Circle time continues to strengthen the bonds formed at preschool. At the primary level, most learning is activity-based, with students working individually or in groups. Daily fun on the field involves learning the skills required to excel at  specific sports and games. Life skills, discussion of news and bonding with senior buddies during lunch hour round out the day. Weekly art and craft, computer, and library sessions hone creativity, technology, and informational skill sets.
          </p>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Highlights</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" />
              <span>No homework policy for the students of classes 1-3</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" />
              <span>Minimal homework in two subjects for Class 4, to be completed over the weekend</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={Preschool}
            alt="Preschool children playing"

            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  )

}