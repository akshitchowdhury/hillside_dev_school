import React from 'react';
import infra from "../../assets/infrastruc.jpg"
import tech from "../../assets/tech.jpg"
import transport from "../../assets/transport.webp"
// Sample data for each facility card
const facilities = [
  {
    title: "Infrastructure",
    subtitle: "Creating learning-friendly spaces",
    description: `Our building features spacious, well-lit, and -ventilated classrooms equipped with Smart screens for 21st-century learning. Supported learning sessions take place in a spacious Learning Lab. Four computer labs and fully-equipped science laboratories give students hands-on experience and the technological expertise required for a digital world. Our preschoolers have fun in dedicated play areas, while students of Classes 1-10 enjoy using the basketball court and the varied fields for games access. A 4000 sq.ft. multi-purpose indoor arena serves as a stage for school functions.`,
    image: infra,
    bgColor: "bg-[#4b1c1c]", // Adjust this color as per the exact design
  },
  {
    title: "Transport",
    subtitle: "Safe and convenient travel for students.",
    description: `Innisfree House School owns and operates a fleet of buses equipped with all safety measures mandated by law, including correctly displayed signage, GPS, fire extinguishers, CCTV cameras, a first-aid box, and speed governors. Our transport team has devised structured emergency policies and procedures, and all our drivers and attendants are police-verified. Bus routes cover many key areas of South Bangalore.`,
    image: transport,
    bgColor: "bg-[#770606FF]", // Adjust this color as per the exact design
  },
  {
    title: "Technology",
    subtitle: "Enhanced learning with smart classrooms.",
    description: `Every classroom from Class 1 to 10 is tech-enabled with a plasma SmartScreen featuring advanced audio/visual learning capabilities, networking, and assistive learning and response technology. Four computer labs with a total of 125 firewall-protected systems help students use technology with ease and confidence; our staff rooms are also computer-equipped with chrome books. Students are given hands-on experience learning web design, computer ethics, and how to use software like Python, Dreamweaver, BlueJ, and animation software.`,
    image: tech,
    bgColor: "bg-[#C58907FF]", // Adjust this color as per the exact design
  },
];

const HomeFacilities = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 md:p-8">
      {facilities.map((facility, index) => (
        <div
          key={index}
          className={`w-full md:w-[30%] p-4 rounded-none ${facility.bgColor} text-white shadow-lg`}
        >
          {/* Title and Subtitle */}
          <div className="p-4">
            <h3 className="text-3xl font-bold">{facility.title}</h3>
            <p className="italic">{facility.subtitle}</p>
          </div>

          {/* Image */}
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />

          {/* Description */}
          <p className="text-justify text-lg leading-6 px-4">{facility.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeFacilities;
