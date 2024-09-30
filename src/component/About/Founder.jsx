import React from 'react';
import NavUni from '../Nav/NavUni';

const Founder = () => {
  return (
    <>
      <NavUni />
      
      {/* President's Message Section */}
      <div className="p-4 md:p-12 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">President's Message</h2>
            
            <div className="md:float-left md:mr-8 mb-4 md:mb-0 w-full md:w-1/3">
              <img
                src="https://hosabelaku.org/wp-content/uploads/2024/08/Dr.-S.-B.-Umesh-Babu-258x300.webp"
                alt="Dr. S. B. Umesh Babu"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dear Parents, Students, and Well-Wishers,
              </p>
              <p>
                It gives me immense pleasure to welcome you to Bethel English High School, the first English medium school sanctioned by the government in Karnataka. This institution stands as a beacon of our commitment to providing world-class education and fostering the holistic development of young minds in a rapidly evolving world.
              </p>
              <p>
                At Bethel English High School, we believe that education is the foundation upon which individuals and societies grow and thrive. As the President of this esteemed institution, I am proud to see our school contribute to nurturing confident, curious, and compassionate learners. Our aim is to blend academic excellence with strong moral values, preparing our students to become responsible global citizens.
              </p>
              <p>
                The introduction of an English medium curriculum reflects our vision of equipping students with the tools they need to succeed in a globalized world, where proficiency in English opens doors to endless opportunities. Our dedicated faculty, innovative teaching methods, and state-of-the-art facilities create a stimulating environment where every student can unlock their full potential.
              </p>
              <p>
                While we are committed to excellence in education, we also emphasize the importance of character building, cultural heritage, and community involvement. We are determined to ensure that every child in our care not only achieves academic success but also grows into a well-rounded individual with the ability to make a positive impact on society.
              </p>
              <p>
                I extend my heartfelt gratitude to the parents, teachers, staff, and the broader community for your unwavering support in making Bethel English High School a pillar of quality education. Together, we are shaping the future, one student at a time.
              </p>
              <p className="font-bold">
                Warm regards,<br />
                Dr. S. B. Umesh Babu<br />
                President
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;