import React, { useEffect } from "react";

export default function Navbar() {
  const toggleSideBar = () => {
    try {
      if (document.querySelector(".sideBar")) {
        document
          .querySelector(".sideBar")
          .classList.toggle("-translate-x-full");
      }
      if (document.querySelector(".menuOpen")) {
        document.querySelector(".menuOpen").classList.toggle("hidden");
      }
      if (document.querySelector(".menuClose")) {
        document.querySelector(".menuClose").classList.toggle("hidden");
      }
    } catch (error) {
      console.log("some error");
    }
  };

  useEffect(() => {
    try {
      let navBar = document.getElementById("navBar");
      let oldScrollY = window.scrollY;

      window.addEventListener("scroll", (e) => {
        const currentScroll = window.scrollY;
        if (navBar) {
          if (oldScrollY > currentScroll) {
            navBar.classList.add("sticky");
          } else {
            navBar.classList.remove("sticky");
          }
        }
        oldScrollY = currentScroll <= 0 ? 0 : currentScroll;
      });
    } catch (error) {
      console.log("some error");
    }
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
            <img src="./logo.png" alt="" className="h-10 w-20 object-contain"/>
            <span className="ml-3 text-xl" id="brandText">
              Mohiyaddeen Raza
            </span>
          </a>
          <nav className=" flex flex-wrap items-center text-base justify-center navBarElements">
            <a className="mr-5 hover:text-gray-900 font-semibold" href="#home">
              Home
            </a>
            <a className="mr-5 hover:text-gray-900 font-semibold" href="#about">
              About
            </a>
            <a
              className="mr-5 hover:text-gray-900 font-semibold"
              href="#resume"
            >
              Resume
            </a>
            <a
              className="mr-5 hover:text-gray-900 font-semibold"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="mr-5 hover:text-gray-900 font-semibold"
              href="#contact"
            >
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
          <a className=" text-white p-2 font-semibold" href="#home">
            Home
          </a>
          <a className=" text-white p-2 font-semibold" href="#about">
            About
          </a>
          <a className=" text-white p-2 font-semibold" href="#resume">
            Resume
          </a>
          <a className=" text-white p-2 font-semibold" href="#projects">
            Projects
          </a>
          <a className=" text-white p-2 font-semibold" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
