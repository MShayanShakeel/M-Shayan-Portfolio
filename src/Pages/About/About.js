import React from "react";
import "./About.css";
import Tada from 'react-reveal/Tada';
const About = () => {
  return (
    <>
      <Tada>
        <div className="conotainer about" id="about">
          <div className="row">


            <div className="col-xl-6 col-md-6 col-xs-12 col-lg-12 about-img">
              <img src={process.env.PUBLIC_URL + '/picture/Profile.jpg'} alt="WhatsApp Image" className="img-fluid" />
            </div>


            <div className="col-md-6 about-text">
              <h1>About us</h1>
              <p>
                <p>
                  Welcome to the heart of innovation, where I, M Shayan, invite
                  you to explore my professional portfolio. As a dedicated
                  Computer Science graduate with a Bachelor's degree, I have
                  cultivated a passion for leveraging technology to create
                  meaningful and impactful solutions.
                  <br />
                </p>
                <p>
                  My journey into the world of technology commenced with a
                  transformative internship at Techno Mide, where I served as a
                  Front-End Developer. This experience laid the foundation for my
                  proficiency in crafting user-centric and aesthetically pleasing
                  interfaces. Presently, I am contributing my skills as a Junior
                  Front Developer at TechOn Venture, where I am immersed in
                  dynamic projects that push the boundaries of creativity and
                  functionality.
                </p>
                In my pursuit of continuous growth, I am currently enrolled in a
                MERN Stack Course at Jawan Pakistan, demonstrating my commitment
                to staying abreast of cutting-edge technologies. Explore my
                portfolio to witness the evolution of my skills, projects, and the
                mark I am making in the ever-evolving landscape of computer
                science. Join me on this journey of innovation and discovery.
              </p>
            </div>
          </div>
        </div>
      </Tada>
    </>
  );
};

export default About;
