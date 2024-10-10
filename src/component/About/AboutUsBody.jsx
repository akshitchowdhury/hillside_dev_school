import React from 'react';
import { FaChild, FaGamepad, FaUserAlt, FaShieldAlt, FaComments, FaUsers, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import VisionMission from './VisonMission/VisionMission';
import approach from "../../assets/midSchool.jpg"
export default function AboutUsBody() {
    const objectives = [
        { title: "Holistic Development", icon: FaChild },
        { title: "Learning through Play", icon: FaGamepad },
        { title: "Individual Attention", icon: FaUserAlt },
        { title: "Safe Environment", icon: FaShieldAlt },
        { title: "Language and Communication Skills", icon: FaComments },
        { title: "Collaboration with Parents", icon: FaUsers },
        { title: "Respect and Inclusion", icon: FaHandsHelping },
        { title: "Foundation for Lifelong Learning", icon: FaGraduationCap }
      ];
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-800 text-white py-8">
        <div className="container text-justify mx-auto px-4">
          <h1 className="text-4xl font-bold">Bethel English High School</h1>
          <p className="mt-2 text-xl">Established 1983 - Nurturing Excellence Since Inception</p>
        </div>
      </header>

      <main className="container text-justify mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
              <img src="/placeholder.svg?height=300&width=400" alt="Bethel English High School Building" className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed">
                Bethel English High School was established in 1983 as a Primary English Medium School, with the mission of providing high-quality education to our community. We are proud to be the first English medium school sanctioned by the government of Karnataka, marking a significant moment in the state's educational history.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
              To nurture a supportive and stimulating learning environment that inspires curiosity, creativity, and a lifelong love of learning in every child. We aim to cultivate confident, compassionate, and well-rounded individuals who are prepared to contribute positively to society.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide a safe, engaging, and inclusive environment where children can develop their intellectual, social, emotional, and physical abilities. Through a play-based and child-centered approach, we foster independence, critical thinking and a love for learning in each child. We strive to work in partnership with families and the community to build a strong foundation for each child's future education.
            </p>
          </div>
        </section> */}

            <VisionMission/>


        <section className="mb-12 text-justify">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Objectives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg text-justify shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="p-6 flex flex-col items-center ">
                  <objective.icon className="text-4xl text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
                  <p className="text-gray-700 text-sm">
                    We are committed to achieving excellence in this area to ensure the best outcomes for our students.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
  <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
  <div className="flex flex-col md:flex-row items-start">
    <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
      <p className="text-gray-700 leading-relaxed text-base md:text-xl">
        At Bethel, we emphasize a strong foundation in both academic and extracurricular activities. Our curriculum is designed to cater to the overall development of each student, ensuring they are well-prepared for future challenges. With a dedicated team of experienced educators, we create a learning environment that encourages critical thinking, creativity, and a passion for lifelong learning.
      </p>
      <p className="text-gray-700 leading-relaxed my-4 text-base md:text-xl">
      This is the first English medium school sanctioned by the government of Karnataka, this would be a landmark moment in the history of education in Karnataka. Government-sanctioned English medium schools are significant because they often provide access to quality education in English, which is seen as a global language, while still being accessible to a broader population.

      </p>
    </div>
    <div className="md:w-1/2">
      <img src={approach} alt="Students in a classroom" className="rounded-lg shadow-md w-full h-auto object-cover" />
    </div>
  </div>
</section>



        {/* <section>
          <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-800 leading-relaxed mb-4">
              Bethel English High School is more than just an educational institution; it's a community dedicated to nurturing the leaders of tomorrow. We invite you to be a part of our journey in shaping bright futures.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </section> */}
      </main>

  
    </div>
  );
}