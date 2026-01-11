import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaTimes, FaComments } from "react-icons/fa";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Contact Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 bg-gradient-to-r from-accent to-primary-500 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center text-white hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent/50"
          aria-label="Contact options"
        >
          {isExpanded ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaComments className="text-2xl animate-pulse" />
          )}
        </button>

        {/* Expanded Options */}
        {isExpanded && (
          <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 animate-fadeIn">
            <div className="space-y-3">
              {/* Quick Contact Form Link */}
              <Link
                href="/contact"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Send Message</p>
                  <p className="text-xs text-gray-500">Get in touch with us</p>
                </div>
              </Link>

              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaPhone />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-xs text-gray-500">+1 (234) 567-890</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@vtechedge.com"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-xs text-gray-500">info@vtechedge.com</p>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-white border-2 border-accent rounded-full shadow-lg hover:shadow-xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-accent/50"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FloatingCTA;
