import React from "react";

export default function Projects() {
  return (
    <div id="projects" className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto" id="projectsContainer">
          <div className="flex justify-center items-center">
            <h1 className="text-center mb-4 font-bold text-xl border-b-2 border-solid border-blue-600">
              Projects
            </h1>
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 projectsItem flex flex-col justify-between">
              <div className="contentProjectContainer">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-left h-full w-full border-2 rounded-xl"
                    src="./inotebook_1.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Inotebook
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Inotebook is my milestone project as a web developer, marking
                  my entry into full-stack development. It's a cutting-edge
                  note-taking app offering seamless CRUD operations for
                  efficient note management. Emphasizing security, iNotebook
                  implements JWT authentication, email verification, and
                  password hashing. The streamlined registration and login
                  processes ensure a smooth onboarding experience. With a
                  responsive UI built on React, styled with Tailwind CSS, and
                  powered by Express.js and MongoDB, iNotebook is a feature-rich
                  and reliable solution. Exceptional error handling enhances
                  usability, making it a comprehensive and secure platform for
                  organizing thoughts and information.
                </p>
              </div>
              <div className="technologiesProject mt-6">
                <div>
                  <span className="textTechnologies text-2xl text-blue-600">
                    Technologies Used:
                  </span>
                  <ul className="flex flex-wrap items-center  mt-2">
                    <li className="mr-6 font-semibold">ReactJs</li>
                    <li className="mr-6 font-semibold">Tailwind CSS</li>
                    <li className="mr-6 font-semibold">ExpressJs</li>
                    <li className="mr-6 font-semibold">NodeJS</li>
                    <li className="mr-6 font-semibold">MongoDB</li>
                    <li className="mr-6 font-semibold">ThunderClient</li>
                    <li className="mr-6 font-semibold">BcryptJS</li>
                    <li className="mr-6 font-semibold">jsonwebtoken</li>
                    <li className="mr-6 font-semibold">EmailJs</li>
                    <li className="mr-6 font-semibold">Git/GitHub</li>
                  </ul>
                </div>

                <div className="linksProject flex items-center mt-6">
                  <a
                    className="text-blue-600 inline-flex items-center p-2 border-2 mr-2 shadow-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 transform rounded"
                    href="https://inotebook-bice.vercel.app/login"
                    target="__blank"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-blue-600 inline-flex items-center p-2 border-2 shadow-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 transform rounded"
                    href="https://github.com/mohiyaddeen7/inotebook"
                    target="__blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 projectsItem flex flex-col justify-between">
              <div className="contentProjectContainer">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full border-2 rounded-xl"
                    src="./ecommerce_1.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Ecommerce
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  In my ongoing ecommerce project, I've crafted functional
                  components for Home, Product, and Checkout pages using the
                  robust MERN stack, which includes MongoDB, Express.js, React,
                  and Node.js. Leveraging Mongoose ODM and Tailwind CSS, I've
                  ensured an elegant and responsive user interface. Dynamic
                  routes in the frontend facilitate seamless navigation. The
                  project is a work in progress, with a focus on expanding and
                  enhancing functionality and features to provide users with an
                  exceptional and elegant shopping experience.
                </p>
              </div>
              <div className="technologiesProject mt-6">
                <div>
                  <span className="textTechnologies text-2xl text-blue-600">
                    Technologies Used:
                  </span>
                  <ul className="flex flex-wrap items-center  mt-2">
                    <li className="mr-6 font-semibold">ReactJs</li>
                    <li className="mr-6 font-semibold">Tailwind CSS</li>
                    <li className="mr-6 font-semibold">ExpressJs</li>
                    <li className="mr-6 font-semibold">NodeJS</li>
                    <li className="mr-6 font-semibold">MongoDB</li>
                    <li className="mr-6 font-semibold">ThunderClient</li>
                    <li className="mr-6 font-semibold">BcryptJS</li>
                    <li className="mr-6 font-semibold">jsonwebtoken</li>
                    <li className="mr-6 font-semibold">Git/GitHub</li>
                  </ul>
                </div>

                <div className="linksProject flex items-center mt-6">
                  <a
                    className="text-blue-600 inline-flex items-center p-2 border-2 mr-2 shadow-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 transform rounded"
                    href="https://ecommerce-mohiyaddeen-raza.vercel.app/"
                    target="__blank"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-blue-600 inline-flex items-center p-2 border-2 shadow-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 transform rounded"
                    href="https://github.com/mohiyaddeen7/ecommerce"
                    target="__blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 projectsItem flex flex-col justify-between">
              <div className="contentProjectContainer">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full border-2 rounded-xl"
                    src="./mustang.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Product Portfolio
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Developed a dynamic product page highlighting a sleek car
                  model, skillfully utilizing HTML5, CSS3, Tailwind CSS, and
                  JavaScript. The addition of a captivating parallax effect in
                  the hero section not only enhances the overall visual appeal
                  but also brings an engaging and immersive dimension to the
                  user experience. To further elevate user interaction, I
                  integrated CSS transitions for navbar icons, ensuring smooth
                  animations that contribute to a polished and seamless browsing
                  experience. The careful combination of these technologies
                  results in a visually stunning and interactive product page.
                </p>
              </div>
              <div className="technologiesProject mt-6">
                <div>
                  <span className="textTechnologies text-2xl text-blue-600">
                    Technologies Used:
                  </span>
                  <ul className="flex flex-wrap items-center mt-2">
                    <li className="mr-6 font-semibold">HTML5</li>
                    <li className="mr-6 font-semibold">CSS</li>
                    <li className="mr-6 font-semibold">Javascript</li>
                    <li className="mr-6 font-semibold">Git/GitHub</li>
                  </ul>
                </div>

                <div className="linksProject flex items-center mt-6">
                  <a
                    className="text-blue-600 inline-flex items-center p-2 border-2 mr-2 shadow-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 transform rounded"
                    href="https://mohiyaddeen7.github.io/mustangPortfolio/"
                    target="__blank"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-blue-600 inline-flex items-center p-2 border-2 shadow-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 transform rounded"
                    href="https://github.com/mohiyaddeen7/mustangPortfolio"
                    target="__blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 projectsItem flex flex-col justify-between">
              <div className="contentProjectContainer">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full border-2 rounded-xl"
                    src="./portfolio.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Personal Portfolio
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Created a dynamic and responsive portfolio website using React
                  and Tailwind CSS, showcasing a keen focus on enhancing user
                  experience. Leveraged the Intersection Observer API to
                  introduce a scroll sticky effect for the navigation bar,
                  ensuring seamless navigation and easy access to information.
                  <br />
                  In addition to the technical functionality, I incorporated
                  unique and engaging features to make the portfolio stand out.
                  Implemented cool animations and effects such as a light effect
                  on the cursor, adding a touch of creativity and interactivity.
                  Introduced themed playgrounds, like a Harry Potter-themed mode
                  where users can invoke the "lumos" spell, triggering a cool
                  light effect on the cursor while temporarily hiding everything
                  else. The cursor becomes the key to unveil hidden elements,
                  offering an interactive and immersive experience on the
                  portfolio website.
                </p>
              </div>
              <div className="technologiesProject mt-6">
                <div>
                  <span className="textTechnologies text-2xl text-blue-600">
                    Technologies Used:
                  </span>
                  <ul className="flex flex-wrap items-center  mt-2">
                    <li className="mr-6 font-semibold">ReactJs</li>
                    <li className="mr-6 font-semibold">Tailwind CSS</li>
                    <li className="mr-6 font-semibold">Web API</li>
                    <li className="mr-6 font-semibold">Git/GitHub</li>
                  </ul>
                </div>

                <div className="linksProject flex items-center mt-6">
                  <a
                    className="text-blue-600 inline-flex items-center p-2 border-2 mr-2 shadow-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 transform rounded"
                    href="https://mohiyaddeenraza.vercel.app/"
                    target="__blank"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-blue-600 inline-flex items-center p-2 border-2 shadow-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 transform rounded"
                    href="https://github.com/mohiyaddeen7/Mohiyaddeen-Raza"
                    target="__blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 projectsItem flex flex-col justify-between">
              <div className="contentProjectContainer">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full border-2 rounded-xl"
                    src="./chitchat.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Realt-Time Chat Application
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Developed a real-time communication platform using Socket.io
                  without the need for a traditional database. Employed HTML,
                  CSS, and JavaScript to create a seamless and responsive user
                  interface. Emphasis was placed on mastering and implementing
                  WebSockets, enabling instant data exchange between users in
                  real-time. The project showcases a commitment to efficient and
                  dynamic communication without the reliance on a database,
                  highlighting a resourceful approach to real-time web
                  applications.
                </p>
              </div>
              <div className="technologiesProject mt-6">
                <div>
                  <span className="textTechnologies text-2xl text-blue-600">
                    Technologies Used:
                  </span>
                  <ul className="flex flex-wrap items-center  mt-2">
                    <li className="mr-6 font-semibold">HTML</li>
                    <li className="mr-6 font-semibold">CSS3</li>
                    <li className="mr-6 font-semibold">Socket.io</li>
                    <li className="mr-6 font-semibold">Javascript</li>
                    <li className="mr-6 font-semibold">Git/GitHub</li>
                  </ul>
                </div>

                <div className="linksProject flex items-center mt-6">
                  <a
                    className="text-blue-600 inline-flex items-center p-2 border-2 mr-2 shadow-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 transform rounded"
                    href="https://mohiyaddeen7.github.io/ChitChat/"
                    target="__blank"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-blue-600 inline-flex items-center p-2 border-2 shadow-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 transform rounded"
                    href="https://github.com/mohiyaddeen7/ChitChat"
                    target="__blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
