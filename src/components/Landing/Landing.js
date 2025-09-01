import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedText from "@/utils/AnimatedText";
import Clamp from "@/utils/Clamp";

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const textRef = useRef(null);

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
    const tl = gsap.timeline({
      defaults: { duration: 3, ease: "power2.out" },
    });

    tl.to(textRef.current, {
      y: "-100",
      opacity: 1,
      duration: 2,
      onComplete: () => {
        setCurrentSlide((prev) => (prev + 1) % slideContent.length);
      },
    }).fromTo(
      textRef.current,
      { y: "100", opacity: 0 },
      { y: "0", opacity: 1, delay: 0.5 } // Add delay to ensure text fades in after image change
    );

    return () => {
      tl.kill();
    };
  }, [currentSlide]);

  return (
    <div
      className="relative h-[90vh] w-full"
      style={{
        backgroundImage: `url('/images/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row h-full items-center padding-x">
        <div className="z-[999] pl-[50px] w-[50%]">
          <div
            ref={textRef}
            className={`flex items-center text-left absolute top-[300px] left-[50px]
            text-[#e0e1dd] z-10 w-full max-w-3xl transition-all duration-700 ease-out`}
          >
            <div className="flex flex-col justify-center items-start">
              <h3
                className="font-light mb-2"
                style={{ fontSize: `${Clamp(1, 1.65)}` }}
              >
                {slideContent[currentSlide].title}
              </h3>
              <h1
                className="mb-4 break-words font-normal"
                style={{ fontSize: `${Clamp(2, 3.5)}` }}
              >
                {slideContent[currentSlide].subTitle}
              </h1>
              <p className="text-[16px] max-w-xl w-[80%]">
                {slideContent[currentSlide].description}
              </p>
              <button className="bg-blue-600 hover:bg-blue-900 transition-all duration-300 text-white px-[20px] py-[10px] rounded-[25px] text-[18px] mt-[30px] z-50">
                {slideContent[currentSlide].cta}
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[50%] h-full">
          <img
            src={images[currentSlide]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
