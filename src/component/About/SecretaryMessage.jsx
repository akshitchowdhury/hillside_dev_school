import React from 'react';
import NavUni from '../Nav/NavUni';

const SecretaryMessage = () => {
  return (
    <>
      <NavUni />
      
      {/* Secretary's Message Section */}
      <div className="p-4 md:p-12 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Secretary's Message</h2>
            
            <div className="md:float-left md:mr-8 mb-4 md:mb-0 w-full md:w-1/3">
              <img
                src="https://hosabelaku.org/wp-content/uploads/2024/08/Dr.-S.-B.-Umesh-Babu-258x300.webp"
                alt="Mrs. Jalaja Das"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dear Students, Parents, and Esteemed Members of the School Community,
              </p>
              <p>
                It is with great pride and a deep sense of responsibility that I address you as the Secretary of Bethel English High School, the first English medium school sanctioned by the government in Karnataka. This school stands as a testament to our unwavering commitment to providing quality education and shaping the future of our children.
              </p>
              <p>
                At Bethel English High School, we are dedicated to fostering an environment where every student can explore their unique talents, grow intellectually, and develop the confidence needed to succeed in a rapidly changing world. Our English medium instruction, along with a comprehensive and inclusive curriculum, equips students with the language and skills required to thrive in both local and global arenas.
              </p>
              <p>
                Our dedicated team of educators works tirelessly to provide students with a well-rounded education that not only focuses on academic excellence but also nurtures creativity, critical thinking, and a strong sense of ethics. We are proud to offer an environment where traditional values meet modern educational practices, ensuring that our students are prepared for the challenges and opportunities of the future.
              </p>
              <p>
                The establishment of this school is a collective achievement, and I would like to thank our parents, teachers, staff, and the broader community for your continued trust and support. It is your belief in our vision that drives us to continually raise the bar of educational excellence.
              </p>
              <p>
                As we look ahead, I am confident that Bethel English High School will continue to be a beacon of knowledge, growth, and development for generations to come. Together, let us inspire and empower our children to dream big, achieve their goals, and contribute positively to society.
              </p>
              <p className="font-bold">
                Warm regards,<br />
                Mrs. Jalaja Das<br />
                Secretary
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecretaryMessage;