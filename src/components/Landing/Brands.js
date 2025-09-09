import React from "react";
import Clamp from "@/utils/Clamp";

const Brands = () => {
  return (
    <div className="w-full overflow-hidden py-[40px] flex flex-col items-center">
      <h2 className="text-black text-center text-[24px] mb-8 font-light" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
        Brands Who Trust Us
      </h2>

      <div className="w-full overflow-hidden">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="marquee-content">
              <span className="marquee-item">
                <img src="/images/brand1.png" alt="Brand 1" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand2.png" alt="Brand 2" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand3.png" alt="Brand 3" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand4.png" alt="Brand 4" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand5.png" alt="Brand 5" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand6.png" alt="Brand 6" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand7.png" alt="Brand 7" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand8.png" alt="Brand 8" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand9.png" alt="Brand 9" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand10.png" alt="Brand 10" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand11.png" alt="Brand 11" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand12.png" alt="Brand 12" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
            </div>
            <div className="marquee-content" aria-hidden="true">
              <span className="marquee-item">
                <img src="/images/brand1.png" alt="Brand 1" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand2.png" alt="Brand 2" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand3.png" alt="Brand 3" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand4.png" alt="Brand 4" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand5.png" alt="Brand 5" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand6.png" alt="Brand 6" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand7.png" alt="Brand 7" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand8.png" alt="Brand 8" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand9.png" alt="Brand 9" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand10.png" alt="Brand 10" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand11.png" alt="Brand 11" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
              <span className="marquee-item">
                <img src="/images/brand12.png" alt="Brand 12" className="w-32 h-16 md:w-40 md:h-20 object-contain" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          animation: marquee 30s linear infinite;
          width: max-content;
        }

        .marquee-content {
          display: flex;
          white-space: nowrap;
        }

        .marquee-item {
          flex-shrink: 0;
          padding: 0 4rem;
          display: flex;
          align-items: center;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .marquee-item {
            padding: 0 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Brands;
