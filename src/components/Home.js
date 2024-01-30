import React, { useEffect } from "react";

export default function Home() {
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
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
