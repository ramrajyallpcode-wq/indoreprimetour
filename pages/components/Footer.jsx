import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-300/30 transform hover:scale-110"
          title="Contact us on WhatsApp"
          aria-label="Contact us on WhatsApp"
          href="https://wa.me/918236016165?text=Hi! I'm interested in your cab services. Could you please provide more details?"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
          </svg>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-300/30 transform hover:scale-110"
          title="Follow us on Instagram"
          aria-label="Follow us on Instagram"
          href="https://www.instagram.com/indoreprimetour"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
          </svg>
        </Link>
      </div>

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
              <li className="flex items-center  justify-center lg:justify-start bg-white/5 rounded-xl ">
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
                  href="mailto:indoreprimetours@gmail.com"
                  className="hover:text-opacity-80 transition-colors"
                  aria-label="Email us"
                >
               indoreprimetours@gmail.com
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
    </>
  );
};

export default Footer;
