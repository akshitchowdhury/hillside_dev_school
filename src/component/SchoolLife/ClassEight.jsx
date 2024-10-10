// 
import React from 'react'
import Preschool from '../../assets/highSchool.jpg'
import { CheckCircle2 } from 'lucide-react'


export default function ClassEight() {
  return (
    <>

      <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto p-6 bg-white">

        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Classes 8-10</h1>
          <p className="mb-4 text-justify text-gray-600">
          During the high school years, the focus shifts to academic rigour and life skills. we provide students with opportunities to sharpen their leadership skills, offering sufficient guidance programs in career opportunities along with other life skills classes.
          </p>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Life at High School:</h2>
          <p className="mb-4 text-justify text-gray-600">
          Morning assembly features prayers from different religions, followed by a student-led, school-wide presentation (topical, relevant to global issues like sustainability, conservation, bullying, stigma, and more). Subject-wise conceptual learning occurs through interaction, discussion, presentations, peer learning, teacher-led and self-directed initiatives. Restorative Justice circles continue to help them strengthen their mental resolve to face future challenges confidently. High-schoolers have a buddy system where every student eats lunch with their junior buddies in the classroom. These are opportunities for them to bond with their schoolmates and instill healthy eating habits, sort out interpersonal concerns and bullying issues.  Fun on the field helps hone their skills in various sports and games to help create the perfect physical and mental balance.
          </p>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Highlights</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" />
              <span>Homework in only two subjects each day</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" />
              <span>Continuous and comprehensive evaluation</span>
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