import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaProjectDiagram, FaAward, FaClock } from "react-icons/fa";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    support: 0,
  });

  const statsRef = useRef(null);

  const stats = [
    {
      icon: FaUsers,
      end: 150,
      suffix: "+",
      label: "Happy Clients",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaProjectDiagram,
      end: 300,
      suffix: "+",
      label: "Projects Completed",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaAward,
      end: 98,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaClock,
      end: 24,
      suffix: "/7",
      label: "Support Available",
      color: "from-orange-500 to-orange-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = stats.map((stat, index) => {
      const increment = stat.end / steps;
      let currentCount = 0;

      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.end) {
          currentCount = stat.end;
          clearInterval(intervals[index]);
        }

        setCounts((prev) => ({
          ...prev,
          [Object.keys(prev)[index]]: Math.floor(currentCount),
        }));
      }, stepDuration);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [isVisible]);

  const countValues = Object.values(counts);

  return (
    <div ref={statsRef} className="py-20 padding-x bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Trusted by Businesses Worldwide
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our track record speaks for itself. We've helped hundreds of organizations transform their operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="text-3xl text-white" />
              </div>

              {/* Count */}
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {countValues[index]}
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
              </div>

              {/* Decorative element */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
