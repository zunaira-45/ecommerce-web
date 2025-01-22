"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import Topbar from "../Components/Topbar";
import Navbar from "../Components/Navbar";
import Testimonial from "../Components/testimonials"; 
import Footer from "../Components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form submitted", formData);

  
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      <Topbar />
      <Navbar />
      <br />
      <br />
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-700">
            We're here to help! Get in touch with us for any questions, feedback, or inquiries.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center space-x-4 text-lg text-gray-600">
            <FaPhoneAlt className="text-3xl text-blue-600" />
            <p>+123 456 7890</p>
          </div>
          <div className="flex items-center space-x-4 text-lg text-gray-600">
            <FaEnvelope className="text-3xl text-blue-600" />
            <p>contact@company.com</p>
          </div>
          <div className="flex items-center space-x-4 text-lg text-gray-600">
            <FaLocationArrow className="text-3xl text-blue-600" />
            <p>123 Main St, City, Country</p>
          </div>
        </div>

      
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-600">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="flex flex-col">
              <label className="text-lg text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-3 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-3 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-3 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md mt-6 hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>

         
          {isSubmitted && (
            <div className="mt-4 text-green-600 text-center font-semibold">
              <p>Thank you for messaging us! We will contact you soon.</p>
            </div>
          )}
        </div>
      </div>

      
      <Testimonial />
      <Footer/>
    </div>
  );
};

export default ContactUs;
