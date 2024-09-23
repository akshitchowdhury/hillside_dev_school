import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import FaqHero from './FaqHero'
import NavUni from '../Nav/NavUni'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What grades does Bethel English School offer?",
      answer: "Bethel English School offers education from preschool through to Grade 12, providing a comprehensive curriculum for all ages."
    },
    {
      question: "What is the school's teaching philosophy?",
      answer: "Our teaching philosophy focuses on fostering critical thinking, creativity, and a love for learning in a nurturing environment."
    },
    {
      question: "Does the school have extracurricular activities?",
      answer: "Yes, we offer a variety of extracurricular activities, including sports, music, art, and clubs to promote holistic development."
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer: "The student-to-teacher ratio at Bethel English School is approximately 15:1, ensuring personalized attention for each student."
    },
    {
      question: "How can I enroll my child at Bethel English School?",
      answer: "Enrollment can be completed through our website or by visiting the school office. We recommend scheduling a tour to learn more about our programs."
    },
    {
      question: "What is the school's approach to technology in education?",
      answer: "We integrate technology into our curriculum through interactive lessons, digital resources, and hands-on projects to prepare students for the future."
    },
    {
      question: "Are meals provided at school?",
      answer: "Yes, Bethel English School provides nutritious meals prepared daily to ensure students have the energy they need to thrive."
    },
    {
      question: "What support services are available for students?",
      answer: "We offer a range of support services, including academic counseling, mental health resources, and tutoring programs to assist students in their educational journey."
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
    <NavUni/>
    <FaqHero/>
    <div className="max-w-3xl mx-auto my-12 p-6 bg-gradient-to-br  rounded-xl ">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-indigo-200 rounded-lg overflow-hidden">
            <button 
              className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-indigo-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="font-medium text-indigo-900">{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUp className="w-5 h-5 text-indigo-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-indigo-500" />
              )}
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
