import React, { useEffect } from "react";

export default function Navbar() {
  const toggleSideBar = () => {
    document.querySelector(".sideBar").classList.toggle("-translate-x-full");
    document.querySelector(".menuOpen").classList.toggle("hidden");
    document.querySelector(".menuClose").classList.toggle("hidden");
  };

  useEffect(() => {
    let navBar = document.getElementById("navBar");
    let oldScrollY = window.scrollY;

    window.addEventListener("scroll", (e) => {
      const currentScroll = window.scrollY;

      if (oldScrollY > currentScroll) {
        navBar.classList.add("sticky");
      } else {
        navBar.classList.remove("sticky");
      }
      oldScrollY = currentScroll <= 0 ? 0 : currentScroll;
    });
  }, []);

  return (
    <div className="top-0 bg-white z-10 relative" id="navBar">
      <header className="text-gray-600 body-font shadow-md">
        <div
          className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-around"
          id="navMain"
        >
          <a
            className="flex title-font font-medium items-center justify-center itemtext-gray-900 "
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl" id="brandText">
              Mohiyaddeen Raza
            </span>
          </a>
          <nav className=" flex flex-wrap items-center text-base justify-center navBarElements">
            <a className="mr-5 hover:text-gray-900" href="#home">
              Home
            </a>
            <a className="mr-5 hover:text-gray-900" href="#about">
              About
            </a>
            <a className="mr-5 hover:text-gray-900" href="#resume">
              Resume
            </a>
            <a className="mr-5 hover:text-gray-900" href="#projects">
              Projects
            </a>
            <a className="mr-5 hover:text-gray-900" href="#contact">
              Contact
            </a>
          </nav>
          <div className="navMenu hidden" onClick={toggleSideBar}>
            <span className="material-symbols-outlined menuOpen">menu</span>
            <span className="material-symbols-outlined menuClose hidden">
              menu_open
            </span>
            Menu
          </div>
        </div>
      </header>
      <div className="sideBar transform left-0 transition-transform -translate-x-full top-100 absolute bg-blue-600 w-full hidden z-50 p-2">
        <nav className=" flex flex-wrap items-center text-base justify-between w-full ">
          <a className=" hover:text-gray-900 p-2" href="#home">
            Home
          </a>
          <a className=" hover:text-gray-900 p-2" href="#about">
            About
          </a>
          <a className=" hover:text-gray-900 p-2" href="#resume">
            Resume
          </a>
          <a className=" hover:text-gray-900 p-2" href="#projects">
            Projects
          </a>
          <a className=" hover:text-gray-900 p-2" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
