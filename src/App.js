import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import WizardryPlayGround from "./components/WizardryPlayGround";

function App() {
  useEffect(() => {
    try {
      let callbackObserver = (entries) => {
        // console.log("hello");
        entries.forEach((entry) => {
          let navBar = document.getElementById("navBar");
          if (navBar) {
            // console.log("entry : ", entry);
            if (entry.isIntersecting) {
              // console.log("hi");
              navBar.classList.add("invisible");
            } else {
              navBar.classList.remove("invisible");
            }
          }
        });
      };

      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      let observer = new IntersectionObserver(callbackObserver, options);

      let resume = document.getElementById("resume");
      if (resume) {
        observer.observe(resume);
      }

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    } catch (error) {
      console.log("some error");
    }
  }, []);

  return (
    <div className="App">
      <div className="mainAppContent ">
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>
      <div className="wizardryMainContainer hidden">
        <WizardryPlayGround />
      </div>
    </div>
  );
}

export default App;
