import Link from "next/link";
import Image from "next/image";
import React, { useState, Fragment } from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { validateEmail } from '@/utils/formValidation';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [showContactEmailOptions, setShowContactEmailOptions] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validate email
    const validation = validateEmail(email);
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }

    setLoading(true);

    try {
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300));

      // Store email and show options modal
      setSubscriberEmail(email);
      setShowEmailOptions(true);
      setLoading(false);
    } catch (err) {
      console.error('Subscription error:', err);
      setError("Failed to process subscription. Please try again.");
      setLoading(false);
    }
  };

  const getEmailContent = () => {
    const subject = "New Newsletter Subscription - VTechEdge";
    const body = `New subscriber alert!
    
Email: ${subscriberEmail}
Subscribed on: ${new Date().toLocaleString()}

Please add this email to your newsletter distribution list.

---
This is an automated notification from VTechEdge website.`;
    return { subject, body };
  };

  const openDefaultClient = () => {
    const { subject, body } = getEmailContent();
    const bodyEncoded = body.replace(/\n/g, '%0D%0A');
    const mailtoUrl = `mailto:info@vtechedge.com?subject=${encodeURIComponent(subject)}&body=${bodyEncoded}`;
    window.location.href = mailtoUrl;
    setShowEmailOptions(false);
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 5000);
  };

  const openGmail = () => {
    const { subject, body } = getEmailContent();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@vtechedge.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
    setShowEmailOptions(false);
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 5000);
  };

  const openOutlookWeb = () => {
    const { subject, body } = getEmailContent();
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=info@vtechedge.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(outlookUrl, '_blank');
    setShowEmailOptions(false);
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 5000);
  };

  // Handler for opening address in maps
  const handleAddressClick = () => {
    const address = "78 Braemar Dr Unit#1209, Brampton, ON L6T 2M2, Canada";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  // Handler for phone click
  const handlePhoneClick = () => {
    window.location.href = 'tel:+16478640847';
  };

  // Handler for contact email click
  const handleContactEmailClick = () => {
    setShowContactEmailOptions(true);
  };

  // Contact email handlers
  const openContactEmailDefault = () => {
    window.location.href = 'mailto:info@vtechedge.com';
    setShowContactEmailOptions(false);
  };

  const openContactEmailGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@vtechedge.com`;
    window.open(gmailUrl, '_blank');
    setShowContactEmailOptions(false);
  };

  const openContactEmailOutlook = () => {
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=info@vtechedge.com`;
    window.open(outlookUrl, '_blank');
    setShowContactEmailOptions(false);
  };

  return (
    <>
      <div
        className="relative w-full text-white flex items-start justify-start xl:justify-around padding-x py-[100px] gap-[100px] flex-wrap xl:flex-nowrap"
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text contrast - same as Landing */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col justify-between h-full gap-[20px]">
          <Link href="/" className="flex items-end relative">
            <div className="relative w-[70px] h-[70px]">
              <Image src="/images/logo-black.png" alt="VTech logo" fill className="object-contain" priority />
            </div>
            <div>
              <h1 className="text-[24px] absolute left-[70px] bottom-[30px]">techEdge</h1>
              <h1 className="text-[16px] absolute left-[130px] bottom-[15px] font-thin">inc.</h1>
            </div>
          </Link>
          <p className="w-[80%]">At VTechEdge, we are committed to being more than just a tech provider — we are a strategic partner in your digital transformation journey.</p>

          {/* Subscribe Form */}
          <form onSubmit={handleSubscribe} className="w-[350px]">
            <div
              className={`bg-white rounded-[30px] border-2 overflow-hidden pl-[15px] pr-[1px] py-[1px] w-full h-[45px] flex items-center justify-between transition-all duration-300 ${error ? 'border-red-500' : success ? 'border-green-500' : 'border-transparent focus-within:border-accent'
                }`}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setSuccess(false);
                }}
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-500"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-primary-800 hover:bg-accent transition-all duration-300 h-full rounded-[30px] py-2 px-5 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
            {error && (
              <p className="text-red-400 text-sm mt-2 ml-3">{error}</p>
            )}
            {success && (
              <p className="text-green-400 text-sm mt-2 ml-3 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Thank you for subscribing!
              </p>
            )}
          </form>
        </div>
        <div className="relative z-10 flex flex-col gap-[20px] w-[450px]">
          <h1 className="text-[24px] font-bold">Services</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/services">All Services</Link>
            </li>
            <li>
              <Link href="/services/custom-solution-development">Enterprise Software Development</Link>
            </li>
            <li>
              <Link href="/services/website-app-development">Custom Web Application Development</Link>
            </li>
            <li>
              <Link href="/services/mobile-commerce-mcommerce">Mobile App Development</Link>
            </li>
            <li>
              <Link href="/services/process-assessment-design">Business Intelligence & Process Automation</Link>
            </li>
            <li>
              <Link href="/services/custom-ai-model-development">AI Software Development</Link>
            </li>
            <li>
              <Link href="/services/logo-visual-design">Graphic Design</Link>
            </li>
            <li>
              <Link href="/services/digital-marketing-campaigns">Digital Marketing</Link>
            </li>
          </ul>
        </div>
        <div className="relative z-10 flex flex-col gap-[20px] w-[300px]">
          <h1 className="text-[24px] font-bold">Address</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex items-start gap-3 cursor-pointer hover:text-accent transition-colors" onClick={handleAddressClick}>
              <MdLocationOn className="text-accent text-xl mt-1 flex-shrink-0" />
              <span>78 Braemar Dr Unit#1209, Brampton, ON L6T 2M2, Canada</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors" onClick={handlePhoneClick}>
              <MdPhone className="text-accent text-xl flex-shrink-0" />
              <span>+1 647-864-0847</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors" onClick={handleContactEmailClick}>
              <MdEmail className="text-accent text-xl flex-shrink-0" />
              <span>info@vtechedge.com</span>
            </li>
          </ul>
        </div>
        <div className="relative z-10 flex flex-col gap-[20px] w-[300px]">
          <h1 className="text-[24px] font-bold">Socials</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="https://www.linkedin.com/company/vtechedge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <FaLinkedin className="text-2xl" />
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/vtechedge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <FaTwitter className="text-2xl" />
                <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/vtechedge/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <FaFacebook className="text-2xl" />
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.pinterest.com/vtechedge/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <FaPinterest className="text-2xl" />
                <span>Pinterest</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Email Options Modal */}
      {showEmailOptions && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Choose Email Service</h3>
            <p className="text-sm text-gray-600 mb-6">Select how you'd like to send your subscription:</p>

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

      {/* Contact Email Options Modal */}
      {showContactEmailOptions && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Choose Email Service</h3>
            <p className="text-sm text-gray-600 mb-6">Select how you'd like to contact us:</p>

            <div className="space-y-3">
              {/* Gmail Option */}
              <button
                onClick={openContactEmailGmail}
                className="w-full flex items-center gap-3 bg-white border-2 border-gray-300 hover:border-red-500 hover:bg-red-50 text-gray-700 py-3 px-4 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
                </svg>
                <span className="font-medium">Open in Gmail</span>
              </button>

              {/* Outlook Web Option */}
              <button
                onClick={openContactEmailOutlook}
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
                onClick={openContactEmailDefault}
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
              onClick={() => setShowContactEmailOptions(false)}
              className="w-full mt-4 text-gray-600 hover:text-gray-800 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
