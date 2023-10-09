import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-around">
          <a className="flex title-font font-medium items-center justify-center itemtext-gray-900 " href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className=" flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="#home">Home</a>
            <a className="mr-5 hover:text-gray-900" href="#about">About</a>
            <a className="mr-5 hover:text-gray-900" href="#resume">Resume</a>
            <a className="mr-5 hover:text-gray-900" href="#projects">Projects</a>
            <a className="mr-5 hover:text-gray-900" href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
}
