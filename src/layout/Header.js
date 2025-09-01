import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { redHatText } from "@/pages";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileServicesDropdown, setShowMobileServicesDropdown] =
    useState(false);
  const headerRef = useRef(null);

  const serviceItems = [
    {
      name: "Enterprise Software Development",
      slug: "enterprise-software-development",
    },
    {
      name: "Custom Web Application Development",
      slug: "custom-web-application-development",
    },
    { name: "Mobile App Development", slug: "mobile-app-development" },
    {
      name: "Business Intelligence and Process Automation",
      slug: "business-intelligence-and-process-automation",
    },
    { name: "AI Software Development", slug: "ai-software-development" },
    { name: "Graphic Design", slug: "graphic-design" },
    { name: "Digital Marketing", slug: "digital-marketing" },
    {
      name: "Robotic Process Automation(RPA)",
      slug: "rpa",
    },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Pharmacy Consultant", path: "/pharmacy-consultant" },
    { name: "Services", path: "#", hasDropdown: true },
    { name: "Blog", path: "/blog" },
  ];

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const closeDropdown = () => {
    setShowServicesDropdown(false);
  };

  const handleMenuItemClick = () => {
    closeDropdown();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileServicesDropdown = () => {
    setShowMobileServicesDropdown(!showMobileServicesDropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuItemClick = () => {
    closeMobileMenu();
    setShowMobileServicesDropdown(false);
  };

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#0d1b2a]/30 backdrop-blur-[20px] text-[#e0e1dd] padding-x py-[20px]`}
    >
      <Link
        href="/"
        className="flex items-end relative"
        onClick={handleMenuItemClick}
      >
        <div className="relative w-[70px] h-[70px]">
          <Image
            src="/images/main-logo.png"
            alt="logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div>
          <h1 className="text-[24px] absolute left-[70px] bottom-[30px]">
            techEdge
          </h1>
          <h1 className="text-[16px] absolute left-[130px] bottom-[15px] font-thin">
            inc.
          </h1>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-[40px] text-[16px]">
        {navItems.map((item) => (
          <li key={item.path} className="relative cursor-pointer group">
            <div className="flex items-center gap-1">
              <Link
                href={item.path}
                className={`relative ${
                  router.pathname === item.path
                    ? "text-white"
                    : "text-[#e0e1dd]"
                }`}
                onClick={(e) => {
                  if (item.name === "Services") {
                    e.preventDefault();
                    toggleServicesDropdown();
                  }
                }}
              >
                {item.name}
              </Link>
              {item.hasDropdown && (
                <button
                  onClick={toggleServicesDropdown}
                  className="focus:outline-none text-[#e0e1dd] flex items-center"
                  aria-label="Toggle services menu"
                >
                  <MdKeyboardArrowDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      showServicesDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
            <div className="absolute bottom-[-4px] left-0 h-[2px] bg-[#e0e1dd] w-0 group-hover:w-full transition-all duration-300 ease-out" />
            {item.hasDropdown && (
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-[#0d1b2a] rounded-md shadow-lg py-2 z-50 transition-all duration-300 ${
                  showServicesDropdown
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {serviceItems.map((service) => (
                  <Link
                    key={service.slug}
                    href={
                      service.slug === "rpa"
                        ? `/${service.slug}`
                        : `/services/${service.slug}`
                    }
                    className="block px-4 py-2 text-[#e0e1dd] hover:bg-[#415a77] transition-colors duration-200"
                    onClick={handleMenuItemClick}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop Contact Button */}
      <Link
        href="/contact"
        className="hidden lg:block bg-[#415a77] px-[20px] py-[10px] rounded-[5px] hover:bg-[#2c3e50] transition-colors duration-300"
        onClick={handleMenuItemClick}
      >
        CONTACT US
      </Link>

      {/* Mobile Hamburger Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden focus:outline-none text-[#e0e1dd] p-2"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <HiX size={24} className="transition-transform duration-300" />
        ) : (
          <HiMenu size={24} className="transition-transform duration-300" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-full h-screen bg-[#0d1b2a]/95 backdrop-blur-[20px] z-50 flex flex-col transition-all duration-400 ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#415a77]/30">
          <Link
            href="/"
            className="flex items-end relative"
            onClick={handleMobileMenuItemClick}
          >
            <div className="relative w-[50px] h-[50px]">
              <Image
                src="/images/main-logo.png"
                alt="logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-[18px] absolute left-[50px] bottom-[20px]">
                techEdge
              </h1>
              <h1 className="text-[12px] absolute left-[90px] bottom-[10px] font-thin">
                inc.
              </h1>
            </div>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-[#e0e1dd] p-2"
            aria-label="Close mobile menu"
          >
            <HiX size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path} className="border-b border-[#415a77]/30 pb-4">
                {item.hasDropdown ? (
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.path}
                        className={`text-[18px] font-medium ${
                          router.pathname === item.path
                            ? "text-white"
                            : "text-[#e0e1dd]"
                        }`}
                        onClick={handleMobileMenuItemClick}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={toggleMobileServicesDropdown}
                        className="focus:outline-none text-[#e0e1dd] p-2"
                        aria-label="Toggle mobile services menu"
                      >
                        <MdKeyboardArrowDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            showMobileServicesDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <div
                      className={`mt-4 pl-4 space-y-2 transition-all duration-300 overflow-hidden ${
                        showMobileServicesDropdown
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {serviceItems.map((service) => (
                        <Link
                          key={service.slug}
                          href={
                            service.slug === "rpa"
                              ? `/${service.slug}`
                              : `/services/${service.slug}`
                          }
                          className="block py-2 text-[16px] text-[#e0e1dd] hover:text-white transition-colors duration-200"
                          onClick={handleMobileMenuItemClick}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`block text-[18px] font-medium ${
                      router.pathname === item.path
                        ? "text-white"
                        : "text-[#e0e1dd]"
                    }`}
                    onClick={handleMobileMenuItemClick}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Contact Button */}
        <div className="p-6 border-t border-[#415a77]/30">
          <Link
            href="/contact"
            className="block w-full bg-[#415a77] px-[20px] py-[15px] rounded-[5px] hover:bg-[#2c3e50] transition-colors duration-300 text-center font-medium"
            onClick={handleMobileMenuItemClick}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
