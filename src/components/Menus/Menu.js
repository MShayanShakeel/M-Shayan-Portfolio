import React from "react";
import "./Menu.css";
import { Link } from "react-scroll";
import Flip from "react-reveal/Flip";
import Fade from 'react-reveal/Fade';
import {
  FcAbout,
  FcApproval,
  FcBiotech,
  FcContacts,
  FcGraduationCap,
  FcHome,
  FcReadingEbook,
} from "react-icons/fc";

const Menu = ({ toogle }) => {
  return (
    <>
      {toogle ? (
        <>
          <div className="navabar-profile-pic">
            <Flip>
              <img
                src={process.env.PUBLIC_URL + " /picture/hassan.png"}
                alt="WhatsApp Image"
              />
            </Flip>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <Fade left>
                <div className="nav-links">
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>

                <div className="nav-links">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>

                <div className="nav-links">
                  <Link
                    activeClass="active"
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-links">
                  <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                  >
                    <FcApproval />
                    Projects
                  </Link>
                </div>

                <div className="nav-links">
                  <Link
                    activeClass="active"
                    to="exprience"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Work Exprience
                  </Link>
                </div>

                <div className="nav-links">
                  <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                  >
                    <FcGraduationCap />
                    Education
                  </Link>
                </div>

                <div className="nav-links">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                  >
                    <FcContacts />
                    Contact
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-link">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
            >
              <FcHome title="Home" />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
            >
              <FcAbout title="About" />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              activeClass="active"
              to="techstack"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
            >
              <FcBiotech title="Tech Stack" />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
            >
              <FcApproval title="Projects" />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              activeClass="active"
              to="exprience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
            >
              <FcReadingEbook title="Work" />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
            >
              <FcGraduationCap title="Education" />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
            >
              <FcContacts title="Contact" />
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
