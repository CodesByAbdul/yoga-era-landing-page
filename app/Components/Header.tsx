import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="relative">
      {/* Background Image and Navigation */}
      <div className="h-[100vh] bg-[url('/hero-image.png')] bg-cover bg-center font-roboto bg-no-repeat bg-gradient-to-br from-[#E7DBCD] to-white">
        <nav className="flex justify-between items-center p-4 md:p-6 text-[#111111]">
          <a 
            href="#home" 
            className="text-lg font-bold flex flex-col items-center"
            onClick={handleLinkClick}
          >   
            <img src="/logo.svg" alt="Logo" />
            <p>Yoga Era</p> 
          </a>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-[#111111] focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute top-0 left-0 w-full h-full text-center bg-white z-50 md:static md:w-[70vw] md:flex md:justify-evenly md:items-center md:space-x-6 md:bg-transparent`}
          >
            {/* Close Button (Mobile) */}
            <div className="flex justify-end p-4 md:hidden">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#111111] focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-4 md:flex-row md:space-x-6 p-4 md:p-0">
              <li>
                <a 
                  href="#home" 
                  onClick={handleLinkClick} 
                  className="hover:opacity-50 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#classes" 
                  onClick={handleLinkClick} 
                  className="hover:opacity-50 cursor-pointer"
                >
                  Classes
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={handleLinkClick} 
                  className="hover:opacity-50 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={handleLinkClick} 
                  className="hover:opacity-50 cursor-pointer"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={handleLinkClick} 
                  className="hover:opacity-50 cursor-pointer"
                >
                  Contact
                </a>
            </li>
            </ul>
            <button className="bg-[#685D4F] text-white p-2 rounded-full mt-4 md:mt-0 md:ml-4 hover:bg-[#7A6A5B] transition duration-300">
              Sign in
            </button>
          </nav>
        </nav>

        {/* Hero Section */}
        <div className="mt-8 p-4 text-center">
          <h1 className="text-white text-5xl font-bold p-8">
          Breathe. Stretch. Become
          </h1>
          <p className="text-white text-sm mb-8">
          Discover a deeper connection to your body, <br />
          breath and being through guided yoga & meditation.
          </p>
          <button className="bg-[#685D4F] text-white px-4 py-2 rounded-full hover:bg-[#7A6A5B] transition duration-300">
          Start your free trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;