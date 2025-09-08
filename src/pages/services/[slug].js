import React from "react";
import { useRouter } from "next/router";
import Banner from "../../components/Banner";
import { serviceData } from "../../static/serviceData";
import { Icon } from "@iconify/react";

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0d1b2a] text-[#e0e1dd] p-8 pt-32">
        <h1 className="text-4xl mb-6">Service Not Found</h1>
        <p>The requested service does not exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-black">
      {service.content.map((section, index) => (
        <div key={index} className="flex flex-row py-[50px] gap-10 padding-x relative h-[80vh]">
          <img src="/images/background.png" alt="" className="absolute inset-0 h-[75vh] w-full object-cover z-0" />
          <div key={index} className="w-[50%] flex flex-col gap-[30px] z-10 text-white mt-[180px]">
            <h2 className="text-[56px] font-normal">{section.heading}</h2>
            <div className="space-y-6">
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-[24px] text-gray-300 w-[80%]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="w-[50%] z-10 mt-[180px] relative">
            <img src="/images/95.jpg" alt="" className="object-cover h-[600px] absolute w-full rounded-2xl z-10" />
          </div>
        </div>
      ))}

      <div className="py-[0px] padding-x flex flex-col gap-10">
        <h2 className="text-[56px] font-normal w-[50%]">{service.mobileCards.heading}</h2>
        <div className="flex flex-row gap-10 h-[700px]">
          <img src="/images/95.jpg" alt="" className="object-cover rounded-2xl w-[50%]" />
          <div className="grid grid-rows-3 grid-cols-2 gap-2 w-[50%]">
            {service.mobileCards.cards.map((card, index) => (
              <div
                key={index}
                className="py-3 pl-3 pr-5 rounded-2xl flex flex-col justify-between border-[1px] border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Icon icon={"meteor-icons:xmark"} width={35} height={35} color="gray" className="p-[10px] rounded-[10px] border-[1px] border-blue-500" />
                <h3 className="text-[20px] xl:text-[24px] font-light pl-[50px] text-end">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-[50px] xl:py-[100px] padding-x">
        <h2 className="text-[56px] font-normal">{service.featureSection.heading}</h2>
        <div className="grid grid-rows-2 grid-cols-3 py-[50px] gap-2">
          {service.featureSection.features.map((feature, idx) => (
            <div
              key={idx}
              className="py-3 pl-3 pr-5 rounded-2xl flex flex-col justify-between 
              border-[1px] border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 h-[200px]"
            >
              <Icon icon={feature.icon} width={55} height={55} className="text-blue-500" />
              <div key={idx}>
                <h3 className="text-lg xl:text-xl font-bold mb-2 text-black">{feature.title}</h3>
                <p className="text-[14px] xl:text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
