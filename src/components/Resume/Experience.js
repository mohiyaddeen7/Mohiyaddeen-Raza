import React from "react";

export default function Experience() {
  return (
    <div
      className="flex flex-wrap flex-col justify-center items-center w-3/4 mb-4"
      id="item2"
    >
      <h1 className="mb-4 font-bold text-xl border-b-2 border-solid border-blue-600">
        Experience
      </h1>
      <div className="pb-8 px-4 w-full contentResumePadding">
        <div className="h-full flex items-start w-full">
          <div className="flex-grow ">
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              Tata Strive
            </h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
              Junior Full-Stack Java Developer Trainee, Team Lead.
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
              Anand, Gujarat
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest  mb-1">
              October, 2023 - January, 2024
            </h2>

            <ul className="list-disc leading-relaxed  pl-4">
              <li>
                Led a team of four in an Agile project framework, utilizing
                GitHub for project management.
              </li>
              <li>
                Collaborated and contributed actively, gaining industry-level
                experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pb-8 px-4 w-full contentResumePadding">
        <div className="h-full flex items-start w-full">
          <div className="flex-grow">
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              National Institute Of Technology, Kannada Vedike
            </h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
              Media Head and Public Relations Manager.
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
              Mangalore, Karnataka
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest  mb-1">
              June, 2020 - July, 2023
            </h2>

            <ul className="list-disc leading-relaxed pl-4">
              <li>
                Generated a profit of ₹50,000 to contribute to the club's budget
                by conceptualizing and implementing the idea of creating
                college-themed t-shirts.
              </li>
              <li>
                Led the design creation and contributed to establishing the
                pricing structure for the t-shirts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
