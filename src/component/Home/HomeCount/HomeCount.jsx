import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import countImg from '../../../assets/homeExtra.jpg';
AOS.init();

const useIntersection = (callback, options) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, options]);

  return ref;
};

const CountUpAnimation = ({ initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const duration = 4000; // 4 seconds

  const startAnimation = () => {
    if (hasAnimated) return; // Do not animate again if already animated
    setHasAnimated(true); // Mark as animated
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);
  };

  const ref = useIntersection(() => {
    startAnimation();
  });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl font-bold text-indigo-950">
        {count >= targetValue ? `${targetValue}+` : count}
      </span>
      <span className="text-lg md:text-lg text-zinc-950 mt-2">{text}</span>
    </div>
  );
};

function HomeCount() {
  return (
    <>
    <div className="flex flex-col md:p-12 lg:flex-row items-center justify-between w-full p-4 md:gap-2 gap-6">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
        <img
          src={countImg}
          className="w-full lg:w-[80%] h-auto object-cover rounded-md"
          alt="count"
        />
        <p className="text-left lg:text-left text-xl mt-4 px-9 lg:px-0 text-zinc-900">
          Our school is dedicated to providing a nurturing environment that
          fosters academic excellence and personal growth, preparing students
          for a bright future.
        </p>
      </div>

      {/* Count Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center bg-white p-4 rounded-md ">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <CountUpAnimation
            initialValue={0}
            targetValue={500}
            text="Students Enrolled"
          />
          <CountUpAnimation
            initialValue={0}
            targetValue={400}
            text="Satisfied Parents"
          />
          <CountUpAnimation
            initialValue={0}
            targetValue={7}
            text="Years of Excellence"
          />
          <CountUpAnimation
            initialValue={0}
            targetValue={30}
            text="Experienced Faculty Members"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center h-full">
  {/* <div className="h-[2px] w-full max-w-[1000px] bg-black"></div> */}
</div>

    </>
  );
}

export default HomeCount;
