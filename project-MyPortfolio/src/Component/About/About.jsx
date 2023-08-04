import React from "react";
import "./About.css";
import ProfilePic from "../../image/t.jpg";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="about-image">
            <img src={ProfilePic} alt="profile picture" />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              adipisci culpa, facilis consequatur illo excepturi eaque dolorem
              odio harum architecto doloribus quidem! Eaque, fuga ducimus
              tempore debitis neque quis sapiente. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Perspiciatis repellat quod
              perferendis nam quaerat dignissimos aliquid illum, animi, commodi
              laborum harum doloremque qui veritatis corrupti eveniet voluptates
              quis. Eveniet, minima?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
