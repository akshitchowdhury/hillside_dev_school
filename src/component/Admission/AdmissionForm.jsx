import React from 'react';

const AdmissionForm = () => {
  return (
    <section className="bg-zinc-900 py-10">
      <div className="container mx-auto">
        <div className="bg-zinc-900 shadow-lg  p-8">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-amber-500 mb-2">GET IN TOUCH</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6" id="application" role="form" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label htmlFor="candidate" className="block text-white">Name of the Candidate</label>
                  <input type="text" id="candidate" name="name_of_candidate" className="mt-1 block w-full border-gray-300  h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div className="col-span-1 md:col-span-1/3">
                  <label htmlFor="mobile" className="block text-white">Mobile</label>
                  <input type="text" id="mobile" name="mobile" className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div className="col-span-1 md:col-span-1/3">
                  <label htmlFor="email" className="block text-white">Email*</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div className="col-span-1 md:col-span-1/3">
                  <label htmlFor="applicationdate" className="block text-white">Application Date</label>
                  <input name="date" id="applicationdate"  className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-200" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="fathername" className="block text-white">Father name</label>
                  <input type="text" id="fathername" name="fathername" className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="reference" className="block text-white">Reference</label>
                  <input type="text" id="reference" name="reference" className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="dob" className="block text-white">Date of Birth</label>
                  <input name="date" id="dob" type="date" className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-white">City</label>
                  <input type="text" id="city" name="city" className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="state" className="block text-white">State</label>
                  <input type="text" id="state" name="state" className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-white">Country</label>
                  <input type="text" id="country" name="country" className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="courses" className="block text-white">Select Course</label>
                  <select id="inputState" name="course" className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option value="default">Choose...</option>
                    <option>BAMS</option>
                    <option>PHARM.D</option>
                    <option>M.PHARM</option>
                    <option>B.PHARM</option>
                    <option>D.PHARM</option>
                    <option>B.P.T</option>
                    <option>M.Sc (Nursing)</option>
                    <option>B.Sc (Nursing)</option>
                    <option>PB. B.Sc (Nursing)</option>
                    <option>G.N.M</option>
                    <option>B.Sc (Anaesthesia)</option>
                    <option>B.Sc (Dialysis)</option>
                    <option>B.Sc (Imaging Technology)</option>
                    <option>B.Sc (Medical Lab Technology)</option>
                    <option>Diploma (Dialysis)</option>
                    <option>Diploma (X-Ray)</option>
                    <option>Diploma (Medical Lab Technology)</option>
                    <option>MBA – Basic</option>
                    <option>MBA - Professional</option>
                    <option>MBA - Global</option>
                    <option>BBA (Basic)</option>
                    <option>BBA (Aviation)</option>
                    <option>BBA - Travel &amp; Tourism (IATA)</option>
                    <option>BBA (Digital Marketing)</option>
                    <option>BBA (Data Analytics)</option>
                    <option>B.Com (Basic)</option>
                    <option>B.Com (Logistics &amp; SCM)</option>
                    <option>B.Com- Travel &amp; Tourism (IATA)</option>
                    <option>B.Com – Digital Marketing</option>
                    <option>B.Com – Data Analytics</option>
                    <option>PUC - (B.A.S.E)</option>
                    <option>PUC - (B.A.S.Cs)</option>
                  </select>
                  <div id="inputState-error" className="text-red-600 mt-1 text-sm">This field is required.</div>
                </div>
                <div>
                  <label htmlFor="gender" className="block text-white">Gender</label>
                  <div className="mt-1 flex items-center space-x-4">
                    <div className="flex items-center">
                      <input type="radio" id="male" name="gender" value="Male" className="text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                      <label htmlFor="male" className="ml-2 text-white">Male</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="female" name="gender" value="Female" className="text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                      <label htmlFor="female" className="ml-2 text-white">Female</label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="comment" className="block text-white">Comment</label>
                <textarea name="comment" id="comment" rows="3" className="mt-1 block w-full border-gray-300 h-12 rounded-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-lg bg-amber-500 text-white px-4 py-2 h-12 rounded-sm">Register</button>
                <button type="button" onClick={() => document.getElementById('application').reset()} className="btn btn-lg bg-gray-100 text-zinc-800 px-4 py-2 h-12 rounded-none ml-4">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
