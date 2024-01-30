import React from "react";

export default function Education() {
  return (
    <div
      className="flex flex-wrap flex-col justify-center items-center w-3/4 mb-4"
      id="item1"
    >
      <h1 className="mb-4 font-bold text-xl border-b-2 border-solid border-indigo-500">Education</h1>
      <div className="pb-8 px-4 w-full contentResumePadding">
        <div className="h-full flex items-start">
          <div className="flex-grow">
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              National Institute of Technology Karnataka, Surathkal
            </h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 leading-relaxed">
              B.Tech in Computer Science and Engineering
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
              Mangalore, Karnataka
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest  ">
              June, 2019 - July, 2023
            </h2>
          </div>
        </div>
      </div>
      <div className="pb-8 px-4 w-full contentResumePadding">
        <div className="h-full flex items-start">
          <div className="flex-grow ">
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              Deeksha Center for Learning PU College
            </h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 leading-relaxed">
              Karnataka Pre-University Board
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
              Bangalore, Karnataka
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest  ">
              March, 2017 - March, 2019
            </h2>
          </div>
        </div>
      </div>
      <div className="pb-8 px-4 w-full contentResumePadding">
        <div className="h-full flex items-start">
          <div className="flex-grow ">
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              Sri Adichunchanagiri High School
            </h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 leading-relaxed">
              Karnataka State Board - Class X
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
              Shivamogga, Karnataka
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest  ">
              April, 2016 - April, 2017
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
