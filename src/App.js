import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let callbackObserver = (entries) => {
      console.log("hello");
      entries.forEach((entry) => {
        let navBar = document.getElementById("navBar");
        console.log("entry : ", entry);
        if (entry.isIntersecting) {
          console.log("hi");
          navBar.classList.add("invisible");
        } else {
          navBar.classList.remove("invisible");
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
    observer.observe(resume);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
