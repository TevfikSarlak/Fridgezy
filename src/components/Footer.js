import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <footer className="bg-green-700 h-120 mt-24">
        <div className="flex flex-col md:grid md:grid-cols-3 mx-auto w-full py-4">
          <div>
            <div className="hidden md:block">
              <a className="text-white font-semibold text-2xl md:text-4xl px-4 indent-1">
                FR<span className="text-orange-500">ID</span>GE
                <span className="text-orange-500">ZY</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-white font-thin text-2xl md:text-4xl text-center md:text-left">
              Let's Keep In Touch!
            </h1>
            <p className="text-white font-base text-lg md:text-base text-center md:text-left">
              Find us on any of these platforms.
            </p>

            <div className="flex flex-row space-x-4 mx-auto md:ml-0">
              <a href="#"><FaInstagram className="text-white text-2xl md:text-3xl hover:text-pink-700" /></a>
              <a href="#"><FaTwitter className="text-white text-2xl md:text-3xl hover:text-sky-600" /></a>
              <a href="#"><FaGithub className="text-white text-2xl md:text-3xl hover:text-violet-700" /></a>
              <a href="#"><FaPinterest className="text-white text-2xl md:text-3xl hover:text-red-700" /></a>
            </div>

            <div className="md:pt-8 flex flex-col justify-center">
                <img src="/asset/bmc-button.png" alt="Buy Me a Coffee" className="h-8 w-24 mx-auto md:ml-0
                         md:h-16 md:w-48 hover:scale-105" />
            </div>
         </div>
          <div className="flex flex-col mx-auto md:ml-0 pt-4 md:pt-0 text-left">
              <h1 className="text-xl md:text-2xl text-white font-thin underline mb-2 md:mb-4">RESOURCES</h1>
              <a className="text-base md:text-lg text-white font-thin mb-1 md:mb-2 hover:text-orange-500">Guide</a>
              <a className="text-base md:text-lg text-white font-thin mb-1 md:mb-2 hover:text-orange-500">Pricing</a>
              <a className="text-base md:text-lg text-white font-thin mb-1 md:mb-2 hover:text-orange-500">FAQ</a>
              <a className="text-base md:text-lg text-white font-thin mb-1 md:mb-2 hover:text-orange-500">Contact us</a>
              <a className="text-base md:text-lg text-white font-thin mb-1 md:mb-2 hover:text-orange-500">Licence</a>
              <a className="text-base md:text-lg text-white font-thin mb-1 md:mb-2 hover:text-orange-500">Privacy Policy</a>

          </div>
        </div>
      </footer>
    </div>
  );
}
