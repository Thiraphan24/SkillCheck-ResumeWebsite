import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h1>Hi I'm a</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Full Stack Software Developer",
                "Web Developer",
                "React Developer",
                "Programmer",
              ],
              autoStart: true,
              loop: true,
              delay: 5,
            }}
          />
        </h3>

        <div className="button-for-action">
          <div className="hire-me-button">Hire me</div>

          <div className="get-resume-button">
            <a href={MyCv} download="Thiraphan_cv.pdf">
              GetResume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
