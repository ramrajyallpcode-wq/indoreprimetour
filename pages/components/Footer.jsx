import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/* Fixed Social Media Icons */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        <Link
          href="https://wa.me/0000000000?text=Hi! I'm interested in your cab services. Could you please provide more details?"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-300/30 transform hover:scale-110"
          title="Contact us on WhatsApp"
          aria-label="Contact us on WhatsApp"
        >
          <BsWhatsapp size={20} />
        </Link>
        <Link
          href="https://www.instagram.com/0000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-300/30 transform hover:scale-110"
          title="Follow us on Instagram"
          aria-label="Follow us on Instagram"
        >
          <BsInstagram size={20} />
        </Link>
      </div>

      <footer
        className="bg-yellow-500 border-t border-yellow-200"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="col-span-1 lg:col-span-2">
              <Link href="/" aria-label="Go to homepage">
                <Image
                  src="/images/logo.png"
                  alt="Best Car Rental india Logo"
                  width={130}
                  height={30}
                  style={{ width: "auto", height: "auto" }}
                  className="mb-4 hover:opacity-90 transition-opacity"
                  priority={true}
                />
              </Link>
              <p className="text-gray-700 text-sm leading-relaxed max-w-md">
                Your trusted taxi and cab service in Indore. We provide
                reliable, comfortable, and affordable transportation solutions
                for all your travel needs across the city and beyond.
              </p>
            </div>

            {/* Quick Links */}
            <nav className="space-y-4" aria-label="Footer navigation">
              <h2 className="text-yellow-900 font-bold text-lg mb-4">
                Quick Links
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-yellow-800 text-sm transition-colors duration-200"
                    aria-label="Go to homepage"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/About-us"
                    className="text-gray-700 hover:text-yellow-800 text-sm transition-colors duration-200"
                    aria-label="View our car collection"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/Our-cars"
                    className="text-gray-700 hover:text-yellow-800 text-sm transition-colors duration-200"
                    aria-label="View our car collection"
                  >
                    Our Cars
                  </Link>
                </li>

                <li>
                  <Link
                    href="/components/Contact-us"
                    className="text-gray-700 hover:text-yellow-800 text-sm transition-colors duration-200"
                    aria-label="Contact our team"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-yellow-900 font-bold text-lg mb-4">
                Contact Info
              </h2>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <Link
                    href="mailto:0000000000@gmail.com"
                    className="hover:text-yellow-800 transition-colors"
                    aria-label="Email us"
                  >
                    0000000000@gmail.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <Link
                    href="tel:+0000000000"
                    className="hover:text-yellow-800 transition-colors"
                    aria-label="Call us"
                  >
                    +00 00000 00000
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <address className="not-italic">
                    0000000000, 00000, 00000
                  </address>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Open 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright & Credits */}
          <div className="border-t border-yellow-200 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700">
              <p>
                <small>
                  © {new Date().getFullYear()} 0000000000. All rights reserved.
                </small>
              </p>
              <p className="font-medium">
                <small>
                  Designed and Developed By{" "}
                  <Link
                    href="https://ramrajyaa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-900 hover:text-yellow-800 transition-colors"
                  >
                    Ramrajyaa Consultancy Services
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
