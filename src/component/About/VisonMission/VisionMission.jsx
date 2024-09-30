import React from 'react';
import { 
  FaGraduationCap, FaBook, FaChalkboardTeacher, FaChild, 
  FaPuzzlePiece, FaHeartbeat, FaBrain, FaHandsHelping, 
  FaLightbulb, FaSeedling, FaUsers, FaGlobe 
} from 'react-icons/fa';
import visMis from "../../../assets/vision.jpg";
import visMis2 from "../../../assets/mission.jpg";

const VisionMission = () => {
  return (
    <div className="p-8 lg:p-0 space-y-12 lg:space-y-0">
      {/* Our Mission Section */}
      <div className="mission lg:bg-gray-950">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <img
            src={visMis}
            alt="Our Mission"
            className="w-full lg:w-1/2 lg:rounded-none object-cover lg:object-fill lg:max-h-[500px]"
          />
          <div className="flex flex-col lg:py-12 items-center space-y-10 lg:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-600 flex items-center space-x-2">
              <FaGraduationCap className="text-4xl" />
              <span>Our Mission</span>
            </h2>
            <div className="w-[200px] lg:w-[400px] h-1 bg-indigo-300 mt-2 mb-4"></div>
            <p className="lg:text-gray-200">
            Our mission is to provide a safe, engaging, and inclusive environment where children can develop their intellectual, social, emotional, and physical abilities. Through a play-based and child-centered approach, we foster independence, critical thinking and a love for learning in each child. We strive to work in partnership with families and the community to build a strong foundation for each child's future education.
            </p>
            <div className="flex justify-around w-full space-x-4 ">
              <FaBook className="text-2xl text-indigo-600" title="Academic Excellence" />
              <FaChalkboardTeacher className="text-2xl text-indigo-600" title="Quality Teaching" />
              <FaChild className="text-2xl text-indigo-600" title="Child-Centered Approach" />
              <FaPuzzlePiece className="text-2xl text-indigo-600" title="Play-Based Learning" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="vision lg: md:bg-indigo-50">
        <div className="flex flex-col lg:flex-row-reverse 
  items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <img
            src={visMis2}
            alt="Our Vision"
            className="w-full lg:p-10 lg:w-1/2 lg:rounded-none object-cover lg:object-fill lg:max-h-[500px]"
          />
          <div className="flex flex-col items-center lg:py-12 space-y-10 lg:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-600 flex items-center space-x-2">
              <FaLightbulb className="text-4xl" />
              <span>Our Vision</span>
            </h2>
            <div className="w-[200px] lg:w-[400px] h-1 bg-indigo-300 mt-2 mb-4"></div>
            <p className="text-gray-600">
            To nurture a supportive and stimulating learning environment that inspires curiosity, creativity, and a lifelong love of learning in every child. We aim to cultivate confident, compassionate, and well-rounded individuals who are prepared to contribute positively to society.
            </p>
            <div className="flex justify-around w-full space-x-4 mt-4">
              <FaBrain className="text-2xl text-indigo-600" title="Critical Thinking" />
              <FaHeartbeat className="text-2xl text-indigo-600" title="Emotional Development" />
              <FaSeedling className="text-2xl text-indigo-600" title="Personal Growth" />
              <FaGlobe className="text-2xl text-indigo-600" title="Global Citizens" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;