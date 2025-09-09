import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Clamp from "@/utils/Clamp";

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/landing-1.png",
    "/images/bg-2.jpg",
    "/images/bg-3.jpg",
  ];

  const slideContent = [
    {
      title: "Accelerate Your Digital Transformation",
      subTitle: " Future-Ready Software & IT Solutions for Scalable Growth.",
      description:
        " VTechEdge empowers businesses with custom software development, AI, and automation tools that modernize workflows and enhance operational efficiency.",
      cta: "Get a Free Consultation ",
    },
    {
      title: "Specialists in Healthcare & Pharma IT Solutions",
      subTitle: "Compliance-Focused Technology Built for Critical Industries",
      description:
        "We deliver end-to-end tech infrastructure, regulatory software, and digital transformation services for clinics, labs, pharmacies, and life sciences brands.",
      cta: "Discover Our Healthcare Solutions",
    },
    {
      title: "Your Tech Partner from Idea to Execution",
      subTitle: "Custom Software. Cloud Solutions. Seamless Integration.",
      description:
        "From startups to enterprises, VTechEdge offers full-cycle development services — from strategy and UI/UX to backend, cloud, AI, and managed IT.",
      cta: "Start Your Project Today",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slideContent.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url('/images/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Mobile Layout - Image full width with content overlay (320px, 375px, 425px, 768px) */}
      <div className="block lg:hidden relative z-0 h-full">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

        {/* Mobile Content - Centered overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-ping"></span>
              {slideContent[currentSlide].title}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {slideContent[currentSlide].subTitle
                .split(" ")
                .map((word, index) => (
                  <span
                    key={index}
                    className={index % 3 === 1 ? "text-blue-400" : ""}
                  >
                    {word}{" "}
                  </span>
                ))}
            </h1>

            <p className="text-lg text-gray-300 max-w-md mx-auto leading-relaxed">
              {slideContent[currentSlide].description}
            </p>

            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-900 transition-all duration-300 text-white px-6 py-3 rounded-[25px] text-lg font-medium">
                {slideContent[currentSlide].cta}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by side (above 768px) */}
      <div className="hidden lg:flex relative z-10  mx-auto padding-x h-full items-center">
        <div className="grid grid-cols-2 gap-16 items-center w-full">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-ping"></span>
                {slideContent[currentSlide].title}
              </div>

              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight">
                {slideContent[currentSlide].subTitle
                  .split(" ")
                  .map((word, index) => (
                    <span
                      key={index}
                      className={index % 3 === 1 ? "text-blue-400" : ""}
                    >
                      {word}{" "}
                    </span>
                  ))}
              </h1>

              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                {slideContent[currentSlide].description}
              </p>

              <div className="pt-4">
                <button className="bg-blue-600 hover:bg-blue-900 transition-all duration-300 text-white px-[20px] py-[10px] rounded-[25px] text-[18px] font-medium">
                  {slideContent[currentSlide].cta}
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-2xl shadow-black/50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slideContent.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 ${
              idx === currentSlide
                ? "w-12 h-3 bg-blue-500 rounded-full"
                : "w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
