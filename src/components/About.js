import React from "react";

export default function About() {
  return (
    <div id="about">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto" id="aboutContainer">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Introduction
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-semibold mb-1">
                Get to Know Me Better
              </h1>

              <p className="leading-relaxed">
                My name is Mohiyaddeen Raza, a proactive and dedicated
                <strong>
                  {" "}
                  Computer Science and Engineering graduate from the National
                  Institute of Technology, Karnataka. As a Team Lead at Tata
                  Strive's Full Stack training program
                </strong>
                , I led a team in agile project frameworks, gaining practical
                insights into collaborative development. Additionally, my role
                as the{" "}
                <strong>
                  Public Relations Manager for Kannada Vedike
                </strong>{" "}
                enhanced my communication skills. Proficient in JavaScript,
                Java, HTML5/CSS3, with expertise in frameworks like React.js,
                Express.js, SpringBoot, Next.js, Tailwind CSS, socket.io, and
                Bootstrap. I have hands-on experience with databases such as
                MongoDB, MySql, and Mongoose ODM, along with proficiency in
                project management tools like Thunderclient, Git, and GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
