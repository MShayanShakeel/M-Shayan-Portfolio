import React from 'react'
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import Resume from '../../components/Assets/docs/Resume.pdf'
import "./Home.css"


const Home = () => {
  return (
    <>
    <div className="container-fluit home-container" id='home'>
      <div className="container home-content">
        <Fade right>
        <h1>Hi 👋 I'm a</h1>
        <h2>
        <Typewriter
  options={{
    strings: ['Front End Developer', 'MERN Stack Developer' ,],
    autoStart: true,
    loop: true,
  }}
/>
        </h2>
        </Fade>
          <Fade bottom>
        <div className="home-button">

        {/* <button className=" btn btn-hire">Hire me</button> */}
        <a className=" btn btn-resume" href={Resume} download='Shayan-Resume.pdf'>My Resume</a>
        </div>
          </Fade>
      </div>
    </div>
     </>
  )
}

export default Home
