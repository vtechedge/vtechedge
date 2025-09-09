import React, { useState } from "react";
import Clamp from "@/utils/Clamp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto URL with form data
    const mailtoUrl = `mailto:info@vtechedge.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    // Open default email client
    window.location.href = mailtoUrl;
  };

  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 mt-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
            Let&apos;s Build Something
          </h2>
          <p className="text-xl text-gray-600">We just don&apos;t build apps, we build perfect mobile experience for you</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Office Address Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Office Address</h3>
            <p className="text-gray-600">
              123 Business Street
              <br />
              Tech Valley, CA 94105
              <br />
              United States
            </p>
          </div>

          {/* Contact Us Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              Phone: +1 (555) 123-4567
              <br />
              Email: info@vtechedge.com
              <br />
              Support: support@vtechedge.com
            </p>
          </div>

          {/* Hours of Operation Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
            <p className="text-gray-600">
              Monday - Friday
              <br />
              9:00 AM - 6:00 PM
              <br />
              Weekend: Closed
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto bg-[#ececec] p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light mb-4" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
              Get In Touch
            </h2>
            <p className="text-gray-600">Have a question or want to work together? Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div>
              <button type="submit" className="w-full bg-[#415A77] text-white py-3 px-6 rounded-md transition-colors duration-300 hover:bg-[#344861]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
