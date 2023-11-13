import React, { useEffect } from "react";
import Resumemenu from "./Resume/Resumemenu";
import Experience from "./Resume/Experience";
import Education from "./Resume/Education";
import Skills from "./Resume/Skills";
import "./Resume.css";

export default function Resume() {
  return (
    <div
      className=" text-gray-600 body-font"
      data-bs-spy="scroll"
      data-bs-offset="0"
      data-bs-target="#resumeMenu"
      tabIndex="0"
      id="resume"
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
        <Resumemenu />
        <div className="mx-10 p-10">
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
      <div className="skills_presentation c1"></div>
    </div>
  );
}
