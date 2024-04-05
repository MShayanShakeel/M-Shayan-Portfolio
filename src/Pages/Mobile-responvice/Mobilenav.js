import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';
import { RiMenuAddLine } from "react-icons/ri";
import {
    FcAbout,
    FcApproval,
    FcBiotech,
    FcContacts,
    FcGraduationCap,
    FcHome,
    FcReadingEbook,
} from "react-icons/fc";
import "./Mobilenav.css";

const Mobilenav = () => {
    const [open, setOpen] = useState(false);

    const toggleMobileIcon = () => {
        setOpen(!open);
    }

    const hideNavbar = () => {
        setOpen(false)
    }
    return (
        <>
            <div className='Mobile-nav'>
                <div className='Mobile-nav-header'>
                    {open ? (<RiMenuAddLine size={25} onClick={toggleMobileIcon} />) : (<GiHamburgerMenu size={25} onClick={toggleMobileIcon} />)}

                    <span className='Mobile-nav-title'>M Shayan Shakeel</span>
                </div>
                {open && (
                    <div className='Mobile-nav-menu'>
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
                                            onClick={hideNavbar}
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
                                            onClick={hideNavbar}
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
                                            onClick={hideNavbar}
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
                                            onClick={hideNavbar}
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
                                            onClick={hideNavbar}
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
                                            onClick={hideNavbar}
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
                                            onClick={hideNavbar}
                                        >
                                            <FcContacts />
                                            Contact
                                        </Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                )}  
            </div>
        </>
    )
}

export default Mobilenav
