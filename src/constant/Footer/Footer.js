import Link from "next/link";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Image from "next/image";
import image from "../Images/image";

const Footer = () => {
  return (
    <footer className="p-0 footer-bg relative">
      <div className="mx-auto max-w-7xl p-0 lg:px-8">
        <div className="flex justify-between items-center md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start">
          <div className="flex-1">
            <h2 className="text-white mt-10 text-2xl md:text-3xl font-medium">
              Interested To Get Our Featured Service
            </h2>
          </div>
          <div>
            <a href="tel:+917906514988">
              <button className="mt-10 me-28 primary-btn shadow-lg">Call us Now</button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 ld:grid-cols-4 gap-y-8 pt-20">
          <div className="lg:pr-8 text-center md:text-start ">
            <h3 className="text-white text-capital text-xl font-medium mb-6">
              About Company
            </h3>
            {/* <Image src={image.webdevWhite} alt="WebDev" className="mx-auto md:mx-0" width={150} height={150} /> */}
            <p className="text-base -mt-2 text-slate-200 hover:text-white transition-all duration-300">With 8 years of online education &
              development skills, we have worked
              on 100+ Internet development
              projects. We are a part of BroLabs
              Innovation Pvt. Ltd., and we are 38
              people working together as a team
              with just one goal: to take your
              business to a new level.</p>
          </div>
          <div className="mx-auto text-center md:text-start">
            <div>
              <h3 className="text-white text-xl font-medium mb-6">Quick Links</h3>
            </div>
            <ul className="list-disc list-inside list-none -mt-2">
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/about">About Us</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/contact">Contact us</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto text-center md:text-start">
            <div>
              <h3 className="text-white text-capital text-xl font-medium mb-6">
                Our Services
              </h3>
            </div>
            <ul className=" -mt-2 list-disc list-inside list-none">
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/digital-marketing">Live Tutoring & Doubt Solving</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/ppc-service">Educational Video Creation</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/smo-service">Solution Writing</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/seo-service">SEO Optimized Blogs</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/social-marketing">Test Creation</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/website-optimization">K-12 Education</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/web-development">Translation</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/web-development">Books Writing</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/web-development">Higher Level Education</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/web-development">SEO Based Content</Link>
              </li>
            </ul>
          </div>

          <div className="mx-auto text-center md:text-start">
            <div>
              <div className="pb-50 pb-md-25 animate get-bottom">
                <h3 className="text-white text-capital text-xl font-medium mb-6">
                  Get In Touch
                </h3>
              </div>
              <div> <p className="text-sm -mt-2 text-slate-200 hover:text-white transition-all duration-300">Dream Education, Kalpana Tower, Marris Rd, Centre Point, Gulzar Nagar, Hem Chand Compound, Aligarh, Uttar Pradesh 202001</p></div>
              <ul className="">
                <li className="mt-6 my-2 text-slate-200 hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white text-bold flex items-center justify-center md:justify-start gap-2"
                    href="tel:1234567890"
                  >
                    <FaPhoneSquareAlt /> +91-1234567890
                  </a>
                </li>
                <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white text-sbold flex items-center justify-center md:justify-start gap-2"
                    href="mailto:webdevstudio1@gmail.com"
                  >
                    <FaEnvelope /> webdev@example.com
                  </a>
                </li>
                <li className="mt-8">
                  <ul className="flex justify-start gap-4 items-center">
                    <li className="social">
                      <a
                        className="social-icon"
                        href="#"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li className="social">
                      <a
                        className="social-icon"
                        href="#"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="social">
                      <a
                        className="social-icon"
                        href="#"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li className="social">
                      <a
                        className="social-icon"
                        href="#"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-6 mt-4 md:mt-8 lg:mt-12 mb-[4.5rem] md:mb-0">
        <p className="text-sm text-slate-200 hover:text-white transition-all duration-300">
          © Copyright <a href="#">Dream Education.com</a> 2022. All rights reserved.
        </p>
      </div>

      {  /*  <a href="#" className="shadow-lg rounded-full p-2 bg-white absolute bottom-[5%] right-[5%] animate-[bounce_2s_ease-in-out_infinite]"><ChevronUpIcon className="h-6 w-6"/></a> */}
    </footer>
  );
};

export default Footer;
