import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section aria-label="Site footer" className="bg-slate-950 text-white">
      <div className=" mx-auto py-10 px-4 max-w-[1300px]">
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <div className="lg:flex lg:items-center lg:justify-start">
            <Link href="/" aria-label="Go to homepage" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Best Car Rental india Logo"
                width={110}
                height={40}
                className="lg:w-[300px] w-[80px] bg-white rounded-lg p-2 shadow-xl"
             
                priority
              />
            </Link>
            <p className="mt-5 text-sm text-white/80 font-medium lg:ml-6 lg:mt-0 max-w-md">
              Your trusted taxi and cab service in Indore. We provide reliable,
              comfortable, and affordable transportation solutions for all your
              travel needs across the city and beyond.
            </p>
          </div>

          <div className="items-center mt-8 lg:mt-0 lg:flex lg:justify-end lg:space-x-8 w-full">
            <ul className="grid grid-cols-2 md:grid-cols-4 font-normal items-center justify-items-center lg:justify-items-end  gap-y-4 w-full">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  aria-label="Go to homepage"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  aria-label="View our car collection"
                >
                  Our Cars
                </Link>
              </li>
              <li>
                <Link
                  href="/components/Contact-us"
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  aria-label="Contact our team"
                >
                  Contact 
                </Link>
              </li>
            </ul>

            <div className="w-full h-px mt-8 mb-5 lg:w-px lg:m-0 lg:h-6 bg-white/20" />

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80 text-center lg:text-left w-full">
              <li className="flex items-center gap-2 justify-center lg:justify-start bg-white/5 rounded-xl py-3 px-4">
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
                  href="mailto:"
                  className="hover:text-opacity-80 transition-colors"
                  aria-label="Email us"
                >
                  p@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start bg-white/5 rounded-xl py-3 px-4">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <Link
                  href="tel:+918149563913"
                  className="hover:text-opacity-80 transition-colors"
                  aria-label="Call us"
                >
                  +91 82360 16165
                </Link>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start bg-white/5 rounded-xl py-3 px-4">
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
                <address className="not-italic">Indore, Madhya Pradesh</address>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start bg-white/5 rounded-xl py-3 px-4">
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
      </div>

      <div className="py-6 bg-gray-100/10 px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row justify-center md:justify-between items-center text-gray-200 gap-4 text-center md:text-left">
        <p className="font-medium text-xs uppercase">
          © {new Date().getFullYear()} Car Rental Services. All rights reserved.
        </p>
        <div className="flex text-xs md:text-sm items-center gap-1">
          Designed and Developed By{" "}
          <Link
            href="https://ramrajyaa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold uppercase hover:text-white"
          >
            Ramrajya Consultancy Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
