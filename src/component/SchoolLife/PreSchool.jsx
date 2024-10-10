import React from 'react'
import Preschool from '../../assets/preSchool.avif'
import { CheckCircle2 } from 'lucide-react'


export default function PreSchool() {
  return (
    <>
    
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 bg-white">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src={Preschool}
          alt="Preschool children playing"
          
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Preschool</h1>
        <p className="mb-4 text-justify text-gray-600">
          The human brain develops most rapidly between birth and age five, making the
          preschool years a crucial part of a child's education. At Innisfree House School, we help
          children make the most of these years—academically, socially, physically and
          emotionally.
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Life at preschool:</h2>
        <p className="mb-4 text-justify text-gray-600">
          Each day starts with circle time, an activity that involves sharing feelings, stories and
          positive affirmations. Learning begins with Montessori activities and exploratory, hands-
          on learning activities in language, number work and general awareness; pre-reading
          and reading sessions enhance listening, comprehension, and focus. Play time involves
          both a structured curriculum for motor-skill development as well as free play in
          dedicated indoor and outdoor play areas with safe equipment and cognitive/sensory
          play material. Other activities include art and craft, rhymes and music, and story time
          with puppet theatre. Preparatory students enjoy computer classes, reading, and life skills
          classes that teach them how to fold and button shirts, lace shoes, brush teeth, eat
          healthy, and be polite.
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Highlights</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <CheckCircle2 className="text-green-500 mr-2" />
            <span>Stress free learning: no-homework policy and no formal assessments</span>
          </li>
          <li className="flex items-center">
            <CheckCircle2 className="text-green-500 mr-2" />
            <span>Trilingual exposure</span>
          </li>
        </ul>
      </div>
    </div>
    </>
  )

}