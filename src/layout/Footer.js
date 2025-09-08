import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      className="relative w-full text-white flex items-start justify-start xl:justify-around padding-x py-[100px] gap-[100px] flex-wrap xl:flex-nowrap"
      style={{
        backgroundImage: `url('/images/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better text contrast - same as Landing */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col justify-between h-full gap-[20px]">
        <Link href="/" className="flex items-end relative">
          <div className="relative w-[70px] h-[70px]">
            <Image src="/images/main-logo.png" alt="logo" fill className="object-contain" />
          </div>
          <div>
            <h1 className="text-[24px] absolute left-[70px] bottom-[30px]">techEdge</h1>
            <h1 className="text-[16px] absolute left-[130px] bottom-[15px] font-thin">inc.</h1>
          </div>
        </Link>
        <p className="w-[80%]">At VTechEdge, we are committed to being more than just a tech provider — we are a strategic partner in your digital transformation journey.</p>
        <div
          className="bg-white rounded-[30px] border-transparent 
        overflow-hidden pl-[15px] pr-[1px] py-[1px] w-[300px] h-[40px] flex items-center justify-between"
        >
          <input type="text" placeholder="Enter your email" />
          <button className="bg-[#274c77] hover:bg-[#415a77] transition-colors duration-300 h-full rounded-[30px] py-2 px-4 flex items-center justify-center">Subscribe</button>
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-[20px] w-[450px]">
        <h1 className="text-[24px] font-bold">Services</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/services/enterprise-software-development">Enterprise Software Development</Link>
          </li>
          <li>
            <Link href="/services/custom-web-application-development">Custom Web Application Development</Link>
          </li>
          <li>
            <Link href="/services/mobile-app-development">Mobile App Development</Link>
          </li>
          <li>
            <Link href="/services/business-intelligence-and-process-automation">Business Intelligence & Process Automation</Link>
          </li>
          <li>
            <Link href="/services/ai-software-development">AI Software Development</Link>
          </li>
          <li>
            <Link href="/services/graphic-design">Graphic Design</Link>
          </li>
          <li>
            <Link href="/services/digital-marketing">Digital Marketing</Link>
          </li>
        </ul>
      </div>
      <div className="relative z-10 flex flex-col gap-[20px] w-[300px]">
        <h1 className="text-[24px] font-bold">Address</h1>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <span>📍</span>
            <span>78 Braemar Dr Unit#1209, Brampton, ON L6T 2M2, Canada</span>
          </li>
          <li className="flex items-center gap-2">
            <span>📞</span>
            <span>+1 647-864-0847</span>
          </li>
          <li className="flex items-center gap-2">
            <span>✉️</span>
            <span>info@vtechedge.com</span>
          </li>
        </ul>
      </div>
      <div className="relative z-10 flex flex-col gap-[20px] w-[300px]">
        <h1 className="text-[24px] font-bold">Socials</h1>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="https://linkedin.com" className="flex items-center gap-2">
              <span>🔗</span>
              <span>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com" className="flex items-center gap-2">
              <span>🐦</span>
              <span>Twitter</span>
            </Link>
          </li>
          <li>
            <Link href="https://github.com" className="flex items-center gap-2">
              <span>💻</span>
              <span>GitHub</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
