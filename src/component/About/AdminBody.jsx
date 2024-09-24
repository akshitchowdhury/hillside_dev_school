import React from 'react';

const AdminBody = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4 lg:px-16 py-10">
      {/* Left Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:w-1/2">
        <img
          src="https://ihs.edu.in/wp-content/uploads/2023/06/vice-principal.jpg"
          alt="Mrs. Vidya Sriraman"
          className="w-full h-auto"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Mrs. Vidya Sriraman, Dean</h2>
          <p className="text-gray-700 mb-4">
            Mrs. Vidya Sriraman holds an M.Sc in Biochemistry from Haffkine Institute, Mumbai.
            She began her teaching career in 1984, and joined IHS in 1993.
          </p>
          <p className="text-gray-700">
            From the start, Mrs. Sriraman has been passionate about sustainability, and worked
            closely with Alternative Industries Development to install a paper recycling unit at
            the school.
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:w-1/2">
        <img
          src="https://ihs.edu.in/wp-content/uploads/2019/08/suman-bolar.jpg"
          alt="Ms. Suman Bolar"
          className="w-full h-auto"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Ms. Suman Bolar, School Administrator</h2>
          <p className="text-gray-700 mb-4">
            Ms. Suman Bolar is a founding trustee of the Bolar Education Trust, which runs
            Innisfree House School. Ms. Bolar graduated from St. Joseph’s College of Commerce
            in 1991, and embarked on a corporate writing career that has spanned close to 30
            years.
          </p>
          <p className="text-gray-700">
            She thinks of herself as an eternal learner, believing that a person’s ability to
            grow and evolve defines their success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminBody;
