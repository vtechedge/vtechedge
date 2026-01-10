import Link from "next/link";
import React from "react";
import { FaMoneyBillWave, FaShieldAlt, FaUserFriends, FaRocket } from 'react-icons/fa';
import Clamp from "@/utils/Clamp";

const Service = () => {
  const services = [
    {
      title: " Substantial Cost Reduction",
      description: "Organizations working with us have seen operational costs drop by up to 50%, thanks to automation and streamlined digital workflows.",
      icon: FaMoneyBillWave,
    },
    {
      title: "Stronger Regulatory Compliance",
      description: " We help healthcare, pharma, and regulated industries achieve up to 80% improvement in audit-readiness and compliance accuracy.",
      icon: FaShieldAlt,
    },
    {
      title: "Enhanced Customer Experience",
      description: " Faster response times, seamless digital touchpoints, and intelligent systems deliver up to 50% better user satisfaction and retention.",
      icon: FaUserFriends,
    },
    {
      title: "Higher Team Productivity",
      description: "By eliminating repetitive tasks, teams can focus on high-value work — boosting productivity by as much as 60%.",
      icon: FaRocket,
    },
  ];

  return (
    <div className="py-[100px] padding-x">
      <div className="text-left mb-[50px]">
        <h2 className="font-light mb-4" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
          Delivering Measurable Results with Every Solution
        </h2>
        <p className="text-[16px] text-gray-600 w-full md:w-[80%]">
          Our technology-driven approach is built to generate real outcomes — not just promises. With VTechEdge, you’ll experience transformative benefits that fuel sustainable
          growth and compliance.
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-[20px] justify-around">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full w-full xl:w-[49%]">
            <div className="w-[60px] h-[60px] bg-accent rounded-full flex items-center justify-center mb-6 text-white text-[28px]">
              {React.createElement(service.icon)}
            </div>
            <h3 className="text-[24px] font-bold mb-4">{service.title}</h3>
            <p className="text-[16px] text-gray-600 mb-6 flex-1">{service.description}</p>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center gap-2 text-accent font-semibold hover:underline group"
            >
              Learn More
              <svg
                className="w-5 h-5 text-[#274c77] group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-[50px]">
        <Link href="/rpa" className="inline-block bg-accent hover:bg-accent/90 transition-all duration-300 text-white px-8 py-3 rounded-full text-[18px] font-semibold shadow-lg hover:shadow-xl">See How It Works.</Link>
      </div>
    </div>
  );
};

export default Service;
