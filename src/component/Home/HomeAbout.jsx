import React from "react";
import aboutmain from "../../assets/homeEca.jpg";

const HomeAbout = () => {
  return (
    <div className="bg-blue-950">
      <div className="container mx-auto px-12  lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left side: Title and Paragraph */}
          <div className="lg:w-1/2 w-full lg:pr-8 space-y-8">
            <div>
              <h3 className="text-amber-400 text-lg my-4">How did we begin?</h3>
              <h2 className="text-4xl lg:text-6xl font-normal text-zinc-50 mb-4">
              Bethel English High School
              </h2>
            </div>
            <div>
              <p className="text-lg text-justify text-gray-50">
                <span className="text-4xl text-amber-400 font-semibold">
                Bethel English High School
                </span>{" "}
                 was established in 1983 with Primary English Medium School and with the mission of providing high-quality education to the students of our community. Over the years, Bethel has grown into a well-respected institution known for its commitment to academic excellence, holistic development, and fostering a nurturing environment.

              </p>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="lg:w-1/2 w-full lg:pl-8">
            <img
              src={aboutmain}
              alt="Hillside School"
              className="w-full h-full  object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
