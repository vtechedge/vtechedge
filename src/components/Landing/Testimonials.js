import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, HealthCare Plus",
      image: "/images/pharma.jpg",
      rating: 5,
      text: "VTechEdge transformed our pharmacy operations with their RPA solutions. We've reduced manual errors by 80% and saved countless hours on invoice processing. Their team is professional, responsive, and truly understands healthcare compliance.",
    },
    {
      name: "Michael Chen",
      role: "CTO, Enterprise Solutions Inc.",
      image: "/images/deve.jpg",
      rating: 5,
      text: "Working with VTechEdge has been a game-changer for our digital transformation journey. Their custom automation solutions have streamlined our workflows and significantly improved our operational efficiency. Highly recommended!",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, Global Pharma",
      image: "/images/social.jpg",
      rating: 5,
      text: "The finance automation implemented by VTechEdge has revolutionized how we handle accounting. Real-time reconciliation, automated reporting, and seamless ERP integration - all delivered on time and within budget.",
    },
    {
      name: "David Thompson",
      role: "Managing Partner, Tech Innovations",
      image: "/images/corpo.jpg",
      rating: 5,
      text: "VTechEdge's expertise in AI and automation is unmatched. They helped us build a scalable solution that grows with our business. Their 24/7 support and proactive approach make them an invaluable partner.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 padding-x bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied clients have to say about working with VTechEdge.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Testimonial Card */}
        <div className="relative bg-gradient-to-br from-primary-50 to-accent/5 rounded-3xl p-8 md:p-12 shadow-xl">
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 text-accent/20">
            <FaQuoteLeft className="text-6xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl mx-1" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-accent font-medium">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  index === currentIndex
                    ? "w-8 h-3 bg-accent"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
