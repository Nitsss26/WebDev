"use client";
import Image from "next/image";
import Link from "next/link";
import image from "../Images/image";
import {
  SpeakerWaveIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from 'framer-motion'
import DigitalMarketing from "@/components/DigitalMarketing/DigitalMarketing";

const products = [
  {
    name: "Live Tutoring & Doubt Solving",
    description: "Personalized tutoring & doubt solving.",
    href: "/services/digital-marketing",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Educational Video Creation",
    description: "Engaging educational videos.",
    href: "/services/ppc-service",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Solution Writing",
    description: "Providing clear & effective solutions.",
    href: "/services/smo-service",
    icon: ChartBarIcon,
  },
  {
    name: "SEO Optimized Blogs",
    description: "SEO-friendly blog posts.",
    href: "/services/seo-service",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Test Creation",
    description: "Comprehensive & reliable tests to evaluate knowledge.",
    href: "/services/social-marketing",
    icon: RocketLaunchIcon,
  },
  {
    name: "K-12 Education",
    description: "Optimizing educational resources and materials for K-12 curriculum.",
    href: "/services/website-optimization",
    icon: CommandLineIcon,
  },
  {
    name: "Translation",
    description: "Accurate translation services for all languages.",
    href: "/services/web-development",
    icon: CodeBracketIcon,
  },
  {
    name: "Books Writing",
    description: "Professional book writing services.",
    href: "/services/ppc-service",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Higher Level Education",
    description: "Developing advanced educational resources for higher-level courses.",
    href: "/services/web-development",
    icon: CommandLineIcon,
  }, {
    name: "SEO Based Content",
    description: "Crafting high-quality, SEO-optimized content to enhance online presence.",
    href: "/services/seo-service",
    icon: ComputerDesktopIcon,
  },
];


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const segment = useSelectedLayoutSegment();
  const dropdownRef = useRef(null);

  const handleHover = () => {
    setToggle(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header
      ref={dropdownRef}
      className={`sticky top-0 z-50 ${segment === null ? "bg-[#232022]" : "bg-[#232022] shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto mr-24 flex items-center justify-between p-4 lg:px-8">
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              className="h-13 w-14 ml-14"
              src={segment === null ? image.logo : image.logo}
              alt=""
              width="100"
              height="100"
            />
          </Link>
        </div>

        <div
          className={`hidden md:flex justify-center items-center gap-0 lg:gap-8 ${segment === null ? "text-[#eeeeee]" : "text-[#eeeeee] "
            }`}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/"
              className={`px-3 py-2 text-base ${segment === null ? "navlink-white" : "navlink"} ${segment === null ? "" : ""
                }`}
              onClick={() => setToggle(false)}
            >
              Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/about"
              className={`px-3 py-2 text-base ${segment === null ? "navlink-white" : "navlink"} ${segment === "about" ? "" : ""
                }`}
              onClick={() => setToggle(false)}
            >
              About Us
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <button
              className={`px-3 py-2 text-base flex items-center ${segment === null ? "navlink-white" : "navlink"}`}
              onClick={() => setToggle(!toggle)}
              onMouseEnter={handleHover}
            >
              Our Services
              <ChevronDownIcon
                className={`h-5 w-5 flex-none ${toggle ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/team"
              className={`px-3 py-2 text-base ${segment === null ? "navlink-white" : "navlink"} ${segment === "portfolio" ? "" : ""
                }`}
              onClick={() => setToggle(false)}
            >
              Team
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/contact"
              className={`px-3 py-2 text-base ${segment === null ? "navlink-white" : "navlink"} ${segment === "contact" ? "" : ""
                }`}
              onClick={() => setToggle(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-1 ms-36 ">
          <a href="tel:+917906514988" className="navbar-btn shadow-lg">
            Join
          </a>
        </div>
      </div>

      <div
        className={`p-4 absolute z-99 top-[5.5rem] mt-5 lg:left-[20%] lg:right-[20%] bg-white rounded-lg shadow-lg grid grid-cols-2 transition-all duration-300 ease-in-out ${toggle ? "opacity-100 visible mt-2" : "opacity-0 invisible"
          }`}
      >
        {products.map((item) => {
          return (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-indigo-50"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-auto">
                <div className="group">
                  <Link
                    href={item.href}
                    className="block font-semibold text-gray-900 group-hover:text-indigo-600"
                    onClick={() => setToggle(false)}
                  >
                    {item.name}
                  </Link>






                  <div className={`absolute z-10 ${item.name === "Live Tutoring & Doubt Solving" || item.name === "Solution Writing" || item.name === "Test Creation" || item.name === "Translation" || item.name === "Higher Level Education" ? "right-full" : "left-full"} top-0 mt-1 w-48 bg-white shadow-lg rounded-lg group-hover:block hidden`}>

                    <ul className="py-10 px-10">
                      {/* Example sub-services */}
                      <li>
                        <Link href="/sub-service1">Sub Service 1</Link>
                      </li>
                      <li>
                        <Link href="/sub-service2">Sub Service 2</Link>
                      </li>
                      <li>
                        <Link href="/sub-service2">Sub Service 3</Link>
                      </li>
                      <li>
                        <Link href="/sub-service2">Sub Service 4</Link>
                      </li>
                      <li>
                        <Link href="/sub-service2">Sub Service 5</Link>
                      </li>
                      <li>
                        <Link href="/sub-service2">Sub Service 6</Link>
                      </li>
                      {/* Add more sub-services as needed */}
                    </ul>
                  </div>
                </div>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
