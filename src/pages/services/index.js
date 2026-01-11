import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { serviceCategories } from "../../static/serviceData";
import { Icon } from "@iconify/react";

const ServicesIndex = () => {
    return (
        <>
            <Head>
                <title>Our Services | VTechEdge Inc.</title>
                <meta
                    name="description"
                    content="Explore our comprehensive range of services including Business Solutions, AI Automation, IT & Digital Services, and more."
                />
            </Head>

            {/* Hero Section */}
            <div className="relative w-full h-[60vh] flex items-center justify-center text-white">
                <Image
                    src="/images/background.png"
                    alt="Services Background"
                    fill
                    className="object-cover z-0"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div className="z-20 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
                        Comprehensive solutions tailored to drive your digital transformation and business growth.
                    </p>
                </div>
            </div>

            {/* Services List Section */}
            <div className="py-20 bg-gray-50 padding-x">
                <div className="max-w-7xl mx-auto flex flex-col gap-24">
                    {serviceCategories.map((category, index) => (
                        <div key={index} className="flex flex-col gap-10">
                            {/* Category Header */}
                            <div className="border-b-2 border-primary-800 pb-4">
                                <h2 className="text-4xl font-bold text-gray-900">
                                    {category.name}
                                </h2>
                            </div>

                            {/* Subcategories Grid */}
                            <div className="grid grid-cols-1 gap-12">
                                {category.subcategories.map((subcategory, subIndex) => (
                                    <div key={subIndex} className="flex flex-col gap-6">
                                        <h3 className="text-2xl font-semibold text-primary-700 flex items-center gap-2">
                                            <Icon icon="mdi:shape-outline" className="text-accent" />
                                            {subcategory.name}
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                            {subcategory.services.map((service, sIndex) => (
                                                <Link
                                                    key={sIndex}
                                                    href={`/services/${service.slug}`}
                                                    className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col justify-between h-full"
                                                >
                                                    <div>
                                                        <div className="mb-4 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                                            <Icon icon="mdi:arrow-right-top" className="text-blue-600 text-xl" />
                                                        </div>
                                                        <h4 className="text-lg font-medium text-gray-800 group-hover:text-blue-700 transition-colors line-clamp-2">
                                                            {service.name}
                                                        </h4>
                                                    </div>
                                                    <div className="mt-4 text-sm text-gray-500 group-hover:text-blue-600 flex items-center gap-1">
                                                        Learn more <Icon icon="mdi:arrow-right" />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#0d1b2a] text-white py-20 px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Contact us today to discuss how our services can help you achieve your goals.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                    Get in Touch
                </Link>
            </div>
        </>
    );
};

export default ServicesIndex;
