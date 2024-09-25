import React from 'react';

const FaqText = () => {
  return (
    <div className="md:absolute md:top-20 md:left-0 md:z-40 bg-white bg-opacity-70 p-8 max-w-[500px]  mt-4 md:mt-32 lg:mt-40 ">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-pink-950 mb-4">FAQs</h2>
      
      {/* Description */}
      <p className="text-amber-950 text-lg md:text-xl">
      The knowledge and insights you gain here will be invaluable, helping you navigate and succeed at every step of your path.</p>
    </div>
  );
}

export default FaqText;
