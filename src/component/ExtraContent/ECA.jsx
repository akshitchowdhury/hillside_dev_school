import React from 'react';

const ECA = () => {
  return (
    <div className="font-sans max-w-[1200px]  mx-auto p-5">
      <h1 className="font-serif text-4xl text-center mb-8">Beyond Academics</h1>
      <div className="flex flex-col gap-8 md:flex-row md:gap-10">
        <div className="flex-1">
          <img 
            src="https://ihs.edu.in/wp-content/uploads/2023/05/enrichment-1.jpg" 
            alt="Enrichment" 
            className="w-full h-auto mb-5" 
          />
          <h2 className="text-2xl mb-4">Enrichment</h2>
          <p className="text-base text-justify leading-[1.6] mb-4">
            Cultural and literary activities are an integral part of school life at PET. We do not view such activities as "extra-curricular;" they are integral to learning. These co-curricular activities are therefore built into the curriculum to ensure 360° learning and all-round development of our students. Co-curricular activities include:
          </p>
          <ul className="list-none p-0">
            {['Art', 'Craft', 'Book Fairs', 'Music'].map((item, index) => (
              <li key={index} className="mb-2 flex items-center">
                <span className="text-green-500 mr-2">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <img 
            src="https://ihs.edu.in/wp-content/uploads/2023/05/play.jpg" 
            alt="Play" 
            className="w-full h-auto mb-5" 
          />
          <h2 className="text-2xl mb-4">Play</h2>
          <p className="text-base text-justify leading-[1.6]">
            Studies show that active kids do better in school. At PET, curriculum-based sport education is provided at all levels, including our preschool, by trained professionals. Our in-house structured sports program focuses on inculcating age-appropriate motor skills as well as important concepts such as teamwork; form and posture; and game-specific rules, techniques, and etiquette. We offer daily PE for preschoolers, and a minimum of three physical education classes each week for other classes. Our basketball court is always in use, and generations of alumni return each year to participate in the Inter-batch House Basketball Playoffs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ECA;
