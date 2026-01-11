import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Robotic Process Automation (RPA)?",
      answer: "RPA is a technology that uses software robots to automate repetitive, rule-based tasks. These bots can work 24/7, eliminating human errors and freeing up your team to focus on strategic work. At VTechEdge, we implement RPA solutions that integrate seamlessly with your existing systems.",
    },
    {
      question: "How long does it take to implement an automation solution?",
      answer: "Implementation timelines vary based on complexity, but most projects are completed within 4-12 weeks. We start with a discovery phase to understand your needs, followed by development, testing, and deployment. Our agile approach ensures you see results quickly with incremental improvements.",
    },
    {
      question: "Do you provide support after implementation?",
      answer: "Absolutely! We offer 24/7 support and maintenance services. Our team monitors your automation solutions, provides regular updates, and is always available to address any issues. We also offer training to ensure your team can effectively use and manage the systems.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in healthcare, pharmaceuticals, finance, and enterprise IT solutions. Our expertise in regulatory compliance makes us particularly strong in industries with strict audit requirements. However, our automation solutions can benefit businesses across all sectors.",
    },
    {
      question: "How much can I save with automation?",
      answer: "Organizations typically see 40-60% cost reduction in automated processes. Benefits include reduced labor costs, elimination of errors, faster processing times, and improved compliance. We provide a detailed ROI analysis during our consultation to show your specific savings potential.",
    },
    {
      question: "Is my data secure with your solutions?",
      answer: "Data security is our top priority. We implement industry-standard encryption, secure access controls, and comply with HIPAA, GDPR, and other regulatory requirements. All our solutions undergo rigorous security testing and regular audits to ensure your data remains protected.",
    },
    {
      question: "Can automation integrate with my existing software?",
      answer: "Yes! Our solutions are designed to integrate seamlessly with popular ERP systems, CRMs, accounting software, and custom applications. We use APIs and modern integration techniques to ensure smooth data flow across all your systems without disrupting existing workflows.",
    },
    {
      question: "What if I need custom features?",
      answer: "We excel at custom development! Every business is unique, and we tailor our solutions to match your specific requirements. Whether it's custom workflows, specialized reporting, or unique integrations, our development team can build exactly what you need.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 padding-x bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${openIndex === index ? "" : ""
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none rounded-xl"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 text-accent transition-transform duration-300`}>
                  {openIndex === index ? (
                    <FaChevronUp className="text-xl" />
                  ) : (
                    <FaChevronDown className="text-xl" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-6 pb-6 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary-500 to-accent p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-white/90 mb-6">
            Our team is here to help. Schedule a free consultation to discuss your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-500 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
