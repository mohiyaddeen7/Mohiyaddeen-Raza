import React from "react";

export default function ResumeDownload() {
  return (
    <div
      className="flex flex-wrap flex-col justify-center items-center w-3/4 mb-4"
      id="item5"
    >
      <h1 className="mb-4 font-bold text-xl border-b-2 border-solid border-blue-600">
        Download My Resume
      </h1>
      <a
        className="flex border rounded-md  justify-center items-center shadow-md mr-6 h-12 px-4  hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer hover:scale-105 transition-all"
        href="https://drive.google.com/file/d/1ErRxZDYcXtSfzftkFIIETCwBmcoI3ecD/view?usp=sharing"
        target="__blank"
      >
        <i class="fa-solid fa-download text-xl"></i>
        <h2 className="  font-semibold title-font ml-4">Resume</h2>
      </a>
    </div>
  );
}
