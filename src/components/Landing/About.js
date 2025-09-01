import React from "react";
import Image from "next/image";
import Link from "next/link";
import Clamp from "@/utils/Clamp";

const About = () => {
  return (
    <div className="padding-x py-[150px] flex flex-col gap-[50px]">
      <div className="flex flex-col md:flex-row items-center gap-[50px]">
        <div className="relative w-full md:w-[60%] h-[300px] md:h-[500px]">
          <Image
            src="/images/image1.jpg"
            alt="about"
            fill
            className="rounded-[30px] object-cover"
          />
        </div>
        <div className="w-full md:w-[40%] flex flex-col gap-[20px]">
          <h2 className="text-[18px] text-[#778da9]">
            Revolutionizing Businesses with RPA & Custom Tech Solutions
          </h2>
          {/* <h1 className="text-[30px] font-medium text-[#0d1b2a]">About Us</h1> */}
          <p className="text-[18px] text-[#0d1b2a]">
            At VTechEdge, we help businesses standardize operations and
            eliminate inefficiencies with intelligent automation. Our Robotic
            Process Automation &#40;RPA&#41; services allow software
            &quot;robots&quot; to handle repetitive digital tasks — 24/7,
            error-free.
          </p>
          <p className="text-[18px] text-[#0d1b2a]">
            From healthcare to enterprise IT, we build scalable, compliant, and
            future-ready solutions that drive productivity and innovation.
          </p>
          <button className="bg-[#274c77] hover:bg-[#415a77] transition-colors duration-300 text-white px-[20px] py-[10px] rounded-[8px] text-[18px]">
            Explore Our Solutions
          </button>
        </div>
      </div>
      <div className="bg-[#ececec] p-[20px] md:p-[50px] text-left md:text-center rounded-[30px] flex flex-col items-start md:items-center gap-[20px]">
        <h1
          className="font-medium text-[#0d1b2a]"
          style={{ fontSize: `${Clamp(1.4, 2)}` }}
        >
          We structure and optimize your operations to unlock the full power of
          automation.
        </h1>
        <p className="text-[18px] text-[#0d1b2a] w-full md:w-[80%] text-left md:text-center">
          We streamline and enhance your business processes through tailored
          automation solutions, improving efficiency, reducing manual tasks, and
          enabling scalable growth. Our approach ensures your operations are
          optimized for performance, cost-effectiveness, and long-term success
          in a competitive landscape.
        </p>
        <Link
          href="/contact"
          className="bg-[#274c77] hover:bg-[#415a77] transition-colors duration-300 text-white px-[20px] py-[10px] rounded-[8px] text-[18px]"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
