import React from "react";
import Image from "next/image";
import Clamp from "@/utils/Clamp";

const Why = () => {
  return (
    <div className="padding-x py-[50px] flex flex-col gap-[50px]">
      <div className="flex items-center flex-col xl:flex-row gap-[50px]">
        <div className="relative w-full xl:w-[50%] h-[300px] xl:h-[800px]">
          <Image src="/images/image2.jpg" alt="about" fill className="object-cover rounded-[30px]" />
        </div>
        <div className="w-full xl:w-[50%] flex flex-col gap-[20px]">
          <h2 className="font-light mb-2" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
            Finance & Invoice Automation for Pharmacies and Enterprises.
          </h2>
          <h1 className="font-light mb-2" style={{ fontSize: `${Clamp(1, 1.65)}` }}>
            Streamline Accounting. Eliminate Errors. Scale with Confidence.
          </h1>
          <ul className="flex flex-col gap-[20px] text-[16px] text-gray-600">
            <li>
              From pharmacy operations to enterprise accounting, managing financial tasks manually is no longer sustainable in today’s fast-moving, compliance-driven environment.
              At VTechEdge, we leverage Robotic Process Automation (RPA) to help businesses automate critical financial workflows with speed and precision.{" "}
            </li>
            <li>
              Tasks like invoice processing, accounts payable/receivable, inventory billing, payment reconciliation, and regulatory reporting can now be fully automated — reducing
              human error, saving time, and ensuring audit readiness.
            </li>
            <li>
              For pharmacies and healthcare providers, RPA plays a vital role in handling insurance claims, prescription billing, order-to-cash cycles, and monthly ledger closures,
              while maintaining compliance with industry regulations.
            </li>
            <li>
              By automating finance functions, we help you simplify back-end complexity, reduce operational costs, and reallocate your team’s efforts toward growth and patient
              care.
            </li>
            <li>
              Handling transactions across departments and business units can be tedious and error-prone. RPA automates data collection and consolidation, updating records and
              reconciling them within ERP systems — accelerating processes, minimizing mistakes, and significantly reducing time and operational costs.
            </li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-900 transition-all duration-300 text-white px-[20px] py-[10px] rounded-[25px] text-[18px]">
            Let’s Automate Your Finance Department
          </button>
        </div>
      </div>
    </div>
  );
};

export default Why;
