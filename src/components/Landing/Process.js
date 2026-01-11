import React from "react";
import { FaSearch, FaLightbulb, FaCog, FaRocket, FaCheckCircle } from "react-icons/fa";

const Process = () => {
  const steps = [
    {
      icon: FaSearch,
      title: "Discovery & Analysis",
      description: "We start by understanding your business needs, current processes, and pain points through detailed consultation and analysis.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaLightbulb,
      title: "Strategy & Planning",
      description: "Our experts design a customized solution roadmap with clear milestones, timelines, and ROI projections tailored to your goals.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaCog,
      title: "Development & Testing",
      description: "We build and rigorously test your solution using agile methodologies, ensuring quality and seamless integration with existing systems.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: FaRocket,
      title: "Deployment & Training",
      description: "We deploy your solution smoothly and provide comprehensive training to ensure your team can leverage the new system effectively.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaCheckCircle,
      title: "Support & Optimization",
      description: "Ongoing 24/7 support, monitoring, and continuous optimization ensure your solution evolves with your business needs.",
      color: "from-accent to-primary-500",
    },
  ];

  return (
    <div className="py-20 padding-x bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Proven Process
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We follow a structured approach to ensure successful project delivery and maximum ROI for your investment.
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden lg:block max-w-7xl mx-auto">
        <div className="relative pt-16">
          {/* Steps */}
          <div className="relative flex justify-between items-start">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative" style={{ width: `${100 / steps.length}%` }}>
                {/* Step Label */}
                <div className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-md mb-4 border-2 border-gray-200">
                  Step {index + 1}
                </div>

                {/* Icon Circle */}
                <div className={`relative w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300 z-10`}>
                  <step.icon className="text-4xl" />
                </div>

                {/* Connecting Line (between icons) */}
                {index < steps.length - 1 && (
                  <div className={`absolute left-1/2 top-[102px] w-full h-1 bg-gradient-to-r ${step.color} z-0`}></div>
                )}

                {/* Content */}
                <div className="text-center max-w-xs mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden max-w-2xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 via-green-500 to-accent"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Icon Circle */}
                <div className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg z-10`}>
                  <step.icon className="text-2xl" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-xs font-bold text-accent mb-2">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-accent to-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Start Your Transformation Journey
        </a>
      </div>
    </div>
  );
};

export default Process;
