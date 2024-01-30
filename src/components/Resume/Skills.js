import React, { useEffect } from "react";
import "./Skills.css";
export default function Skills() {
  function update(e, element) {
    // console.log("TARGET : ", e);
    let rect = document.querySelector("." + element).getBoundingClientRect();
    let y =
      e.clientY - rect.top || (e.touches && e.touches[0].clientY - rect.top);
    let x =
      e.clientX - rect.left || (e.touches && e.touches[0].clientX - rect.left);
    // console.log("x : ", x);
    // console.log("y : ", y);
    // console.log("rect : ", rect);
    document
      .querySelector("." + element)
      .style.setProperty("--cursorX", x + "px");
    document
      .querySelector("." + element)
      .style.setProperty("--cursorY", y + "px");
  }

  useEffect(() => {
    document
      .querySelector(".baseFrontEndElement")
      .addEventListener("mousemove", (e) => update(e, "baseFrontEndElement"));
    document
      .querySelector(".baseFrontEndElement")
      .addEventListener("touchmove", (e) => update(e, "baseFrontEndElement"));
    document
      .querySelector(".baseBackEndElement")
      .addEventListener("mousemove", (e) => update(e, "baseBackEndElement"));
    document
      .querySelector(".baseBackEndElement")
      .addEventListener("touchmove", (e) => update(e, "baseBackEndElement"));
    document
      .querySelector(".baseDatabaseElement")
      .addEventListener("mousemove", (e) => update(e, "baseDatabaseElement"));
    document
      .querySelector(".baseDatabaseElement")
      .addEventListener("touchmove", (e) => update(e, "baseDatabaseElement"));
    document
      .querySelector(".baseToolsElement")
      .addEventListener("mousemove", (e) => update(e, "baseToolsElement"));
    document
      .querySelector(".baseToolsElement")
      .addEventListener("touchmove", (e) => update(e, "baseToolsElement"));

    return () => {
      document
        .querySelector(".baseFrontEndElement")
        .removeEventListener("mousemove", (e) =>
          update(e, "baseFrontEndElement")
        );
      document
        .querySelector(".baseFrontEndElement")
        .removeEventListener("touchmove", (e) =>
          update(e, "baseFrontEndElement")
        );

      document
        .querySelector(".baseBackEndElement")
        .removeEventListener("mousemove", (e) =>
          update(e, "baseBackEndElement")
        );
      document
        .querySelector(".baseBackEndElement")
        .removeEventListener("touchmove", (e) =>
          update(e, "baseBackEndElement")
        );
      document
        .querySelector(".baseDatabaseElement")
        .removeEventListener("mousemove", (e) =>
          update(e, "baseDatabaseElement")
        );
      document
        .querySelector(".baseDatabaseElement")
        .removeEventListener("touchmove", (e) =>
          update(e, "baseDatabaseElement")
        );
      document
        .querySelector(".baseToolsElement")
        .removeEventListener("mousemove", (e) => update(e, "baseToolsElement"));
      document
        .querySelector(".baseToolsElement")
        .removeEventListener("touchmove", (e) => update(e, "baseToolsElement"));
    };
  }, []);

  return (
    <div
      className="flex flex-wrap flex-col justify-center items-center w-3/4 mb-4"
      id="item3"
    >
      <h1 className="mb-4 font-bold text-xl border-b-2 border-solid border-indigo-500">Skills</h1>

      <div className="mb-8 px-4 flex items-center bg-white shadow-md  w-full  baseBackEndElement">
        <div className="cursorBackEndTracker"></div>
        <img
          className="object-cover w-48 h-48 rounded-lg "
          src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          id="backendImage"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Back-End Development Skills
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <ul className="list-disc p-2">
              <li>Javascript</li>
              <li>Java</li>
              <li>SpringBoot</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Socket.io</li>
            </ul>
          </p>
        </div>
      </div>
      <h1 className="font-bold mb-4">
        -- Hover Over The Below Card To See Some Cool Effect --
      </h1>
      <div className="mb-8 px-4 flex items-center bg-white shadow-md w-full  baseFrontEndElement transition-all">
        <img
          className="object-cover  w-48 h-48 rounded-lg "
          src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          id="FrontendImage"
        />
        <div className="flex flex-col justify-between p-4 leading-normal baseContent">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Front-End Development Skills
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <ul className="list-disc p-2">
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Figma(Basics)</li>
              <li>Canva</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="mb-8 px-4 flex items-center bg-white shadow-md w-full baseDatabaseElement">
        <div className="cursorDatabaseTracker"></div>
        <img
          className="object-cover  w-48 h-48 rounded-lg "
          src="https://images.unsplash.com/photo-1560732488-6b0df240254a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          id="databaseImage"
        />
        <div className="flex flex-col justify-between p-4 leading-normal ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Databases
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <ul className="list-disc p-2">
              <li>MongoDB</li>
              <li>Mongoose ODM</li>
              <li>MySql</li>
              <li>Firebase</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="mb-8 px-4 flex items-center bg-white shadow-md   w-full p-2 baseToolsElement">
        <div className="cursorToolsTracker"></div>
        <img
          className="object-cover  w-48 h-48 rounded-lg "
          src="https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          id="toolsImage"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Development Tools and Technologies
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <ul className="list-disc p-2">
              <li>Visual Studio Code</li>
              <li>Git/GitHub</li>
              <li>Thunder Client</li>
              <li>Postman</li>
              <li>Intellij IDEA</li>
              <li>Figma</li>
              <li>Canva</li>
              <li>Sketch</li>
              <li>Google Cloud console</li>
              <li>Web Developer Tools</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
