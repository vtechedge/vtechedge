import React from "react";
import Link from "next/link";

const ComingSoon = ({
  title = "Coming Soon",
  message = "We're building something amazing for you!",
  showHomeButton = true
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-800 to-dark-700 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-dark-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-dark-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-dark-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Animated rocket SVG */}
        <div className="mb-12 relative">
          <div className="animate-float">
            <svg
              className="w-48 h-48 mx-auto mb-8 drop-shadow-2xl"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Rocket body */}
              <path
                d="M100 20 L130 150 L100 140 L70 150 Z"
                fill="#e0e1dd"
                stroke="#778da9"
                strokeWidth="2"
              />
              {/* Rocket window */}
              <circle cx="100" cy="70" r="15" fill="#415a77" />
              <circle cx="100" cy="70" r="10" fill="#1b263b" opacity="0.6" />
              {/* Rocket fins */}
              <path d="M70 120 L50 140 L70 140 Z" fill="#778da9" />
              <path d="M130 120 L150 140 L130 140 Z" fill="#778da9" />
              {/* Rocket nose */}
              <path d="M100 20 L85 50 L115 50 Z" fill="#778da9" />

              {/* Animated fire/thrust */}
              <g className="animate-pulse">
                <path d="M85 150 L80 170 L90 165 Z" fill="#ff6b6b" opacity="0.8" />
                <path d="M100 140 L95 165 L105 165 Z" fill="#ffd93d" opacity="0.9" />
                <path d="M115 150 L110 165 L120 170 Z" fill="#ff6b6b" opacity="0.8" />
              </g>
            </svg>
          </div>

          {/* Stars */}
          <div className="absolute top-0 left-1/4 animate-twinkle">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="#ffd93d" />
            </svg>
          </div>
          <div className="absolute top-10 right-1/4 animate-twinkle animation-delay-1000">
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="#e0e1dd" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-1/3 animate-twinkle animation-delay-2000">
            <svg width="12" height="12" viewBox="0 0 20 20">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="#778da9" />
            </svg>
          </div>
        </div>

        {/* Title with gradient text */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-dark-100 via-dark-600 to-dark-100 bg-clip-text text-transparent animate-gradient">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-dark-100 mb-4 opacity-90">
          {message}
        </p>

        {/* Progress indicator text */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex gap-1">
            <span className="inline-block w-2 h-2 bg-dark-600 rounded-full animate-bounce"></span>
            <span className="inline-block w-2 h-2 bg-dark-600 rounded-full animate-bounce animation-delay-200"></span>
            <span className="inline-block w-2 h-2 bg-dark-600 rounded-full animate-bounce animation-delay-400"></span>
          </div>
          <p className="text-dark-600 text-lg">We're on the way</p>
        </div>

        {/* Call to action button */}
        {showHomeButton && (
          <Link href="/">
            <button className="group relative px-8 py-4 bg-dark-700 text-dark-100 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-dark-600 hover:shadow-2xl hover:scale-105 overflow-hidden">
              <span className="relative z-10">Back to Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-dark-600 to-dark-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        )}
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
