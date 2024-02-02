import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (e) => {
    try {
      e.preventDefault();
      const response = await emailjs.send(
        "service_2bfd1ye",
        "template_8muuzl7",
        form,
        "f6uNhSkrXxiEaOXCH"
      );

      if (response.status ===200) {
        alert("Message sent successfully");
      } else {
        alert("Error sending message, Try again later.");
      }
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("some error");
    }
  };

  const onChange = (e) => {
    try {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    } catch (error) {
      console.log("some error");
    }
  };

  return (
    <div id="contact">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto" id="contactContainer">
          <div className="">
            <div className="contact">
              <div className="flex flex-col text-center mb-12 justify-center items-center w-full">
                <h1 className="text-center mb-4 font-bold text-xl border-b-2 border-solid border-blue-600">
                  Contact Me
                </h1>
                <div className="contactContent text-gray-600 body-font flex justify-center  items-center">
                  <a
                    className="flex border rounded-md  justify-center items-center shadow-md mr-6 h-12 px-4 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer hover:scale-105 transition-all"
                    href="tel:+917899484561"
                  >
                    <i className="fa-solid fa-phone text-xl"></i>
                    <h2 className=" font-semibold title-font ml-4">
                      +91-7899484561
                    </h2>
                  </a>

                  <a
                    className="flex border rounded-md  justify-center items-center shadow-md mr-6 h-12 px-4  hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer hover:scale-105 transition-all"
                    href="https://www.linkedin.com/in/mohiyaddeen-raza"
                    target="__blank"
                  >
                    <i className="fa-brands fa-linkedin text-2xl"></i>
                    <h2 className="  font-semibold title-font ml-4">
                      Linkedin
                    </h2>
                  </a>
                  <a
                    className="flex border rounded-md  justify-center items-center shadow-md mr-6 h-12 px-4  hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer hover:scale-105 transition-all"
                    href="https://github.com/mohiyaddeen7"
                    target="__blank"
                  >
                    <i className="fa-brands fa-square-github text-2xl"></i>
                    <h2 className=" font-semibold title-font  ml-4">GitHub</h2>
                  </a>
                  <a
                    className="flex border rounded-md  justify-center items-center shadow-md h-12 px-4  hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer hover:scale-105 transition-all"
                    href="mailto:mohiyaddeenraza7@gmail.com"
                  >
                    <i className="fa-solid fa-envelope text-xl"></i>
                    <h2 className="  font-semibold title-font  ml-4">Email</h2>
                  </a>
                </div>
                <h1 className="font-bold mt-4">
                  -- Or you can send a quick message to me using this below form
                  --
                </h1>
              </div>

              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <form className="flex flex-wrap -m-2" onSubmit={sendEmail}>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      className="flex mx-auto text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none rounded text-lg hover:scale-110 transition-all"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <div className="text-blue-600">Copyright 	&#169; 2024 | Mohiyaddeen Raza, All rights reserved.</div>
                    {/* <p className="leading-normal my-5">
                      Shimoga, Karnataka
                      <br />
                      India
                    </p> */}
                    {/* <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
