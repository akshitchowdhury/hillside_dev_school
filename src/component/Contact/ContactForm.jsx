import React from 'react'

const ContactForm = () => {
  return (
    <>
        
<div className="contact-form max-w-md">
            <h3 className="text-xl md:text-3xl text-left text-gray-600 font-medium mb-4">LEAVE A MESSAGE</h3>
            <p className="text-sm md:text-lg font-medium text-left  text-gray-600 mb-6">Please don't hesitate to contact us for more information.</p>
            <form
              action="http://techlinqs.com/html/aristotle/process.php"
              id="contact-form"
              role="form"
              method="post"
              className="leave-reply-form space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group relative">
                  <input
                    type="email"
                    className="form-control w-full p-3 border-2 border-gray-300 rounded focus:outline-none"
                    id="form-email"
                    name="form-email"
                    placeholder="Email Address"
                    required
                  />
                  <i className="fa fa-envelope absolute top-3 right-3 text-gray-500"></i>
                </div>
                <div className="form-group relative">
                  <input
                    type="text"
                    className="form-control w-full p-3 border-2 border-gray-300 rounded focus:outline-none"
                    id="form-fname"
                    name="form-fname"
                    placeholder="Your Name"
                    required
                  />
                  <i className="fa fa-user absolute top-3 right-3 text-gray-500"></i>
                </div>
              </div>
              <div className="form-group relative">
                <input
                  type="text"
                  className="form-control w-full p-3 border-2 border-gray-300 rounded focus:outline-none"
                  id="form-subject"
                  name="form-subject"
                  placeholder="Subject"
                  required
                />
                <i className="fa fa-pencil-square-o absolute top-3 right-3 text-gray-500"></i>
              </div>
              <div className="form-group relative">
                <textarea
                  className="form-control w-full p-3 border-2 border-gray-300 rounded focus:outline-none"
                  rows="2"
                  id="form-message"
                  name="form-message"
                  placeholder="Please write your message"
                  required
                ></textarea>
                <i className="fa fa-comments absolute top-3 right-3 text-gray-500"></i>
              </div>
              <div className="form-group m-0">
                <button type="submit" className="btn form-btn border-blue-800 border-2
                 text-blue-800 py-2 px-4 h-12 hover:bg-blue-700">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
    </>
  )
}

export default ContactForm


