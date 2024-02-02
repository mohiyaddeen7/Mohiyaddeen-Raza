import React, { useEffect } from "react";
import "./WizardryPlayGround.css";

export default function WizardryPlayGround() {
  function update(e, element) {
    try {
      // console.log("TARGET : ", e);
      if (document.querySelector("." + element)) {
        let rect = document
          .querySelector("." + element)
          .getBoundingClientRect();
        let y =
          e.clientY - rect.top ||
          (e.touches && e.touches[0].clientY - rect.top);
        let x =
          e.clientX - rect.left ||
          (e.touches && e.touches[0].clientX - rect.left);
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
    } catch (error) {
      console.log("some error");
    }
  }
  useEffect(() => {
    try {
      const pathPoints = document.querySelectorAll(".pathPoint");
      let currentPoint = 0;
      if (pathPoints) {
        const moveToNextPoint = (e) => {
          // console.log("event fired");

          const nextPoint = pathPoints[currentPoint];
          if (e.target === nextPoint) {
            if (currentPoint < pathPoints.length - 1) {
              e.target.classList.add("lightColor");
              document
                .querySelector(".lumosLightContainer")
                .classList.add("lumosLight");

              //   console.log(e.target.classList);
              currentPoint++;
            } else {
              e.target.classList.add("lightColor");
              // console.log("spell casted");
              document
                .querySelector(".wizardryPlayGround")
                .classList.add("lightColor");

              setTimeout(() => {
                // console.log("time out");
                document
                  .querySelector(".wizardryPlayGround")
                  .classList.remove("lightColor");
                document
                  .querySelector(".mainAppContent")
                  .classList.toggle("hidden");
                document
                  .querySelector(".wizardryMainContainer")
                  .classList.toggle("hidden");
                pathPoints.forEach((point) => {
                  point.classList.remove("lightColor");
                });
                document
                  .querySelector(".lumosLightContainer")
                  .classList.remove("lumosLight");
                currentPoint = 0;

                document.querySelector(".App").classList.add("wizardryHelper");

                document
                  .querySelector(".App")
                  .addEventListener("mousemove", (e) => update(e, "App"));
              }, 1000);
              //   alert("spell casted");
            }
          } else {
            // console.log("mohiyaddeen");
            pathPoints.forEach((point) => {
              point.classList.remove("lightColor");
            });
            document
              .querySelector(".lumosLightContainer")
              .classList.remove("lumosLight");
            currentPoint = 0;
          }
        };

        pathPoints.forEach((point) => {
          point.addEventListener("pointerenter", moveToNextPoint);
        });
        document
          .querySelector(".wizardryPlayGround")
          .addEventListener("mousemove", (e) =>
            update(e, "wizardryPlayGround")
          );
      }
    } catch (error) {
      console.log("some error");
    }
  }, []);
  return (
    <div className="wizardryPlayGround fixed h-full w-screen z-50 flex items-center flex-col bg-black">
      <div className="spellContainer py-24 text-white text-xl ">
        Swish your wand in the specified pattern, starting from the left, to
        invoke Lumos—the enchantment that illuminates the wizarding world with
        its magical light..
      </div>
      <div className="spellContainerMobile pt-24 text-white text-xl ">
        Tap On The Dots in the specified pattern, starting from the left, to
        invoke Lumos—the enchantment that illuminates the wizarding world with
        its magical light...
      </div>
      <p className="text-red-500 pb-24 mt-6 spellCautionMobile">
        (Note: This feature is in Beta Mode on mobile devices. For the best
        experience, we recommend opening this on a Desktop.)
      </p>

      <div id="pattern-container" className="relative ">
        <div className="top-32 -left-16 w-5 h-5 rounded-full bg-white absolute pathPoint z-10"></div>
        <div className="top-20 -left-10 w-5 h-5 rounded-full bg-white absolute pathPoint z-10"></div>
        <div className="top-10 -left-5 w-5 h-5 rounded-full bg-white absolute pathPoint z-10"></div>
        <div className="top-0 left-0 w-5 h-5 rounded-full bg-white absolute pathPoint z-10"></div>
        <div className="top-10 left-5 w-5 h-5 rounded-full bg-white absolute pathPoint z-10"></div>
        <div className="top-20 left-10 w-5 h-5 rounded-full bg-white absolute pathPoint z-10"></div>
        <div className="top-32 left-16 w-5 h-5 rounded-full bg-white absolute pathPoint z-10"></div>
      </div>
      <div className="lumosLightContainer "></div>
    </div>
  );
}
