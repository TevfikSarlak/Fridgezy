import React, { useState } from "react";

export default function Navbar (props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const alertFeature = () => {
        alert("This Feature will be available in a short time")
    }

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-green-700 font-carlito w-full ">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-2 md:p-4 shadow-2xl">
                    <div>
                        <a className="text-white hover:text-orange-500 font-semibold text-2xl md:text-4xl px-4 indent-1">FR<span 
                        className="text-orange-500 hover:text-white">ID</span>GE<span 
                        className="text-orange-500 hover:text-white">ZY</span></a>
                    </div>
                    <div class="flex md:order-2">
                        <button 
                            type="button" 
                            onClick={() => props.handleStartButton()}
                            className="text-white bg-orange-700 hover:bg-orange-500 focus:ring-4 
                                      focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base px-4 py-2 text-center mr-3 md:mr-0"
                        >Find Your Meal</button>

                        <button
                            type="button"
                            className="inline-flex md:hidden items-center p-2 text-sm text-white rounded-lg  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            onClick={toggleMenu}
                            aria-controls="navbar-cta"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>

                            <svg 
                                className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`}
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                    stroke-width="2" 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            </svg>

                        </button>
                    </div>
                    <div
                        className={`${
                            isMenuOpen
                            ? " top-0 left-0 w-full mt-16 min-h-screen self-end bg-green-700 z-50"
                            : "hidden"
                        } md:flex md:w-auto md:order-1`}
                        id="navbar-cta"
                    >
                        <ul class="flex flex-col font-semibold p-4 md:p-0 mt-4 border border-green-700 rounded-lg bg-green-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-green-700">
                            <li>
                                <button 
                                    onClick={(prev) => props.setStartButton(!prev)}
                                    className="block mx-auto py-2 pl-3 pr-4 text-orange-500 bg-green-700  md:p-1 "
                                    aria-current="page"
                                >HOME</button>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    onClick={alertFeature}
                                    className="block py-2 pl-3 pr-4 text-white hover:text-orange-500 md:p-1 md:hover:border-b-white"
                                >SHOPPING LIST</a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    onClick={alertFeature}
                                    className="block py-2 pl-3 pr-4 text-white hover:text-orange-500 md:p-1 md:hover:border-b-white"
                                >MY FRIDGE</a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    onClick={alertFeature} 
                                    className="block py-2 pl-3 pr-4 text-white hover:text-orange-500 md:p-1 md:hover:border-b-white"
                                >LOG IN | SIGN UP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
