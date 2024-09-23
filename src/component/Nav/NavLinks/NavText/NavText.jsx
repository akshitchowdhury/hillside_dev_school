import React from 'react';

const NavText = () => {
  return (
    <div className="absolute top-20 left-0 z-40 bg-white bg-opacity-70 p-8 max-w-xl  mt-20 md:mt-32 lg:mt-40 ">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-pink-950 mb-4">Welcome</h2>
      
      {/* Description */}
      <p className="text-amber-950 text-lg md:text-xl">
        We offer an environment replete with all the tools students need in order to learn and grow.
      </p>
    </div>
  );
}

export default NavText;
