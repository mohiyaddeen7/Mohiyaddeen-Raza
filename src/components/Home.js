import React, { useEffect } from "react";
import "./Home.css";
export default function Home(props) {
  const playGround = () => {
    try {
      if (document.querySelector(".wizardry")) {
        document.querySelector(".wizardry").classList.toggle("bottom-32");
      }
      if (document.querySelector(".WIP")) {
        document.querySelector(".WIP").classList.toggle("bottom-56");
      }
    } catch (error) {
      console.log("some error");
    }
  };

  const handleModeChange = () => {
    try {
      if (document.querySelector(".mainAppContent")) {
        document.querySelector(".mainAppContent").classList.toggle("hidden");
      }
      if (document.querySelector(".wizardryMainContainer")) {
        document
          .querySelector(".wizardryMainContainer")
          .classList.toggle("hidden");
      }
    } catch (error) {
      console.log("some error");
    }
  };

  const handleNormal = () => {
    window.location.reload();
  };

  return (
    <div id="home">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto" id="homeContainer">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-lg title-font text-gray-500 tracking-widest">
                Hello!
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                I am Mohiyaddeen Raza
                <span className="cd-words-wrapper">
                  <b className="hidden">Developer.</b>
                  <b className="hidden">Professional Coder.</b>
                  <b className="hidden">Problem solver.</b>
                </span>
              </h1>
              <h2 className="text-lg title-font text-gray-500 tracking-widest">
                Welcome To My Portfolio
              </h2>
              <p className="leading-relaxed">
                National Institute of Technology(NIT) Karnataka Computer Science
                and engineering graduate proficient in Full Stack Development,
                with a solid foundation in JavaScript and Java.
              </p>
            </div>
            <img
              alt="hero_image"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1578699183408-1258e0398a2e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>
      <div className="playGroundContainer">
        <div
          className="playGround bg-blue-600 text-white fixed w-20 h-20 rounded-full flex items-center justify-center bottom-10 shadow-sm right-10 z-50 select-none cursor-pointer hover:scale-110 transition-all"
          onClick={playGround}
        >
          Play
        </div>
        <div
          className="wizardry bg-blue-600 text-white fixed w-20 h-20 rounded-full flex items-center justify-center bottom-10 shadow-sm right-10 z-40 p-4 transition-all cursor-pointer hover:scale-110 "
          onClick={handleModeChange}
        >
          Wizardry
        </div>
        <div
          className="WIP bg-blue-600 text-white fixed w-20 h-20 rounded-full flex items-center justify-center bottom-10 shadow-sm right-10 p-6 transition-all z-40 cursor-pointer hover:scale-110 "
          onClick={handleNormal}
        >
          Normal
        </div>
      </div>
    </div>
  );
}
