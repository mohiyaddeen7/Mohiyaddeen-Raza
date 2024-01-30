import React, { useEffect } from "react";
import Resumemenu from "./Resume/Resumemenu";
import Experience from "./Resume/Experience";
import Education from "./Resume/Education";
import Skills from "./Resume/Skills";
import "./Resume.css";

export default function Resume() {
  return (
    <div
      className=" text-gray-600 body-font w-full"
      data-bs-spy="scroll"
      data-bs-offset="0"
      data-bs-target="#resumeMenuContent"
      tabIndex="0"
      id="resume"
    >
      <div
        className="px-5 py-24 mx-auto flex justify-center w-full"
        id="baseResume"
      >
        <div className="">
          <Resumemenu />
        </div>
        <div
          className="flex flex-col justify-center items-center w-3/4"
          id="resumeMainContent"
        >
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
      <div className="skills_presentation c1"></div>
    </div>
  );
}
