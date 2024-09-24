import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CareerExp = () => {
  const images = [
    'https://ihs.edu.in/wp-content/uploads/2019/08/stats-2f.png',
    'https://ihs.edu.in/wp-content/uploads/2023/08/stats-2023.png'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, // Adjusts height to fit the current slide
  };

  return (
    <div className='w-full bg-yellow-400 flex items-center justify-center p-12'>
      <Slider {...settings} className="w-full max-w-3xl">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <img src={src} alt={`Career Experience ${index + 1}`} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CareerExp;
