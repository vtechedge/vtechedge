import React, { useState } from "react";
import Head from "next/head";
import Clamp from "@/utils/Clamp";
import { validateEmail, validatePhone, validateName, validateMessage } from "@/utils/formValidation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let validationResult;

    switch (name) {
      case 'name':
        validationResult = validateName(value);
        break;
      case 'email':
        validationResult = validateEmail(value);
        break;
      case 'phone':
        validationResult = validatePhone(value);
        break;
      case 'message':
        validationResult = validateMessage(value);
        break;
      default:
        return;
    }

    if (!validationResult.isValid) {
      setErrors((prev) => ({
        ...prev,
        [name]: validationResult.error,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const nameValidation = validateName(formData.name);
    const emailValidation = validateEmail(formData.email);
    const phoneValidation = validatePhone(formData.phone);
    const messageValidation = validateMessage(formData.message);

    const newErrors = {
      name: nameValidation.isValid ? "" : nameValidation.error,
      email: emailValidation.isValid ? "" : emailValidation.error,
      phone: phoneValidation.isValid ? "" : phoneValidation.error,
      message: messageValidation.isValid ? "" : messageValidation.error,
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== "");

    if (!hasErrors) {
      setShowEmailOptions(true);
    }
  };

  const getEmailContent = () => {
    const subject = `Contact Request from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    return { subject, body };
  };

  const openDefaultClient = () => {
    const { subject, body } = getEmailContent();
    const bodyEncoded = body.replace(/\n/g, '%0D%0A');
    const mailtoUrl = `mailto:info@vtechedge.com?subject=${encodeURIComponent(subject)}&body=${bodyEncoded}`;
    window.location.href = mailtoUrl;
    setShowEmailOptions(false);
  };

  const openGmail = () => {
    const { subject, body } = getEmailContent();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@vtechedge.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
    setShowEmailOptions(false);
  };

  const openOutlookWeb = () => {
    const { subject, body } = getEmailContent();
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=info@vtechedge.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(outlookUrl, '_blank');
    setShowEmailOptions(false);
  };



  return (
    <>
      <Head>
        <title>Contact Us - VTech</title>
        <meta name="description" content="Get in touch with VTech for professional IT consulting and automation services. We're here to help transform your business." />
        <meta property="og:title" content="Contact VTech - IT Solutions" />
      </Head>
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
              78 Braemar Dr Unit#1209
              <br />
              Brampton, ON L6T 2M2
              <br />
              Canada
            </p>
          </div>

          {/* Contact Us Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              Phone: +1 647-864-0847
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
                onBlur={handleBlur}
                placeholder="Enter your name"
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                required
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
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
                onBlur={handleBlur}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
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
                onBlur={handleBlur}
                placeholder="Enter your mobile number"
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                required
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
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
                onBlur={handleBlur}
                rows="4"
                placeholder="Enter your message"
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                required
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div>
              <button type="submit" className="w-full bg-primary-500 text-white py-3 px-6 rounded-md transition-colors duration-300 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Submit
              </button>
            </div>
          </form>

          {/* Email Options Modal */}
          {showEmailOptions && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Choose Email Service</h3>
                <p className="text-sm text-gray-600 mb-6">Select how you'd like to send your message:</p>

                <div className="space-y-3">
                  {/* Gmail Option */}
                  <button
                    onClick={openGmail}
                    className="w-full flex items-center gap-3 bg-white border-2 border-gray-300 hover:border-red-500 hover:bg-red-50 text-gray-700 py-3 px-4 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
                    </svg>
                    <span className="font-medium">Open in Gmail</span>
                  </button>

                  {/* Outlook Web Option */}
                  <button
                    onClick={openOutlookWeb}
                    className="w-full flex items-center gap-3 bg-white border-2 border-gray-300 hover:border-accent hover:bg-accent/5 text-gray-700 py-3 px-4 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0078D4">
                      <path d="M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm0 2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
                      <path d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 1.5c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z" />
                    </svg>
                    <span className="font-medium">Open in Outlook Web</span>
                  </button>

                  {/* Default Email Client Option */}
                  <button
                    onClick={openDefaultClient}
                    className="w-full flex items-center gap-3 bg-white border-2 border-gray-300 hover:border-green-500 hover:bg-green-50 text-gray-700 py-3 px-4 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span className="font-medium">Open Default Email App</span>
                  </button>

                </div>

                {/* Cancel Button */}
                <button
                  onClick={() => setShowEmailOptions(false)}
                  className="w-full mt-4 text-gray-600 hover:text-gray-800 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
