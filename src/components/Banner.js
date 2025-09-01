import React from "react";

const Banner = ({
  title,
  description,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  ctaText,
  ctaLink,
  className = "",
}) => {
  return (
    <div
      className={`w-full py-12 px-4 sm:px-6 lg:px-8 ${bgColor} ${className} h-[350px] mt-[100px] flex flex-col justify-center relative`}
      style={{
        backgroundImage: 'url("/images/banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className={`text-3xl font-extrabold sm:text-4xl ${textColor}`}>
            {title}
          </h2>
          {description && (
            <p className={`mt-4 text-lg ${textColor} opacity-90`}>
              {description}
            </p>
          )}
          {ctaText && ctaLink && (
            <div className="mt-8">
              <a
                href={ctaLink}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm ${textColor} bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200`}
              >
                {ctaText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
