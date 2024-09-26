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
              <h3 className="text-amber-400 text-lg my-4">How it started for us</h3>
              <h2 className="text-4xl lg:text-6xl font-normal text-zinc-50 mb-4">
                Progressive Eduational Trust for Children
              </h2>
            </div>
            <div>
              <p className="text-lg text-justify text-gray-50">
                <span className="text-4xl text-amber-400 font-semibold">
                  Progressive Eduational Trust
                </span>{" "}
                started back in 1996 by Bheemachandra Education Trust. PET has various educational institutions ranging from Kindergarten to PG courses in and around Bangalore City. Started with healthcare education, basic schools, and added more courses in nursing, Pharmacy College, business management, and commerce. Hillside Group of Institutions is a distinguished educational institution, combining excellence with innovation.
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
