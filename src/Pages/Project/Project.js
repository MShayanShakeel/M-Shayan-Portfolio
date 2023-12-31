import React from "react";
import "./Project.css";
import Spin from 'react-reveal/Spin';
import Swing from 'react-reveal/Swing';

const Project = () => {
 

  return (
    <>
      <div className="container project" id="project">
      
<Spin>
        <h3 className="col-12 mt-3 mb-1  text-center project-heading text-uppercase">
          👉: Top Recent Projects
        </h3>
        <hr />
        <h5 className="pb-3 text-center">
          {" "}
          Here are my top 3 recent project live link and source code
        </h5>
        </Spin>
        <p className="pb-3 text-center">
          In my recent endeavors, I have successfully undertaken three diverse
          projects that showcase my proficiency in web development and my
          ability to leverage cutting-edge technologies to deliver robust
          solutions. The first jewel in my portfolio is "bazar.com," an
          E-commerce website developed using React.js, Firebase, and Redux. This
          project not only demonstrates my mastery of front-end technologies but
          also highlights my expertise in integrating with cloud-based services
          and state management systems. The seamless user experience and dynamic
          functionality of the website underscore the effectiveness of the
          chosen technologies. The second gem is my personal portfolio, crafted
          with React.js and Bootstrap. This project allowed me to exhibit my
          creativity and design skills while reinforcing my mastery of
          responsive web development. The combination of React.js for a dynamic
          user interface and Bootstrap for sleek and intuitive design resulted
          in a visually appealing and user-friendly portfolio that effectively
          showcases my skills, projects, and experiences. The crown jewel of my
          recent projects is "watspi," a private venture that required a
          comprehensive tech stack. Utilizing React.js, Redux, Node.js, and
          MongoDB, I developed a robust and secure platform. This project not
          only challenged my technical skills but also demanded a keen
          understanding of backend systems and database management. The synergy
          of these technologies enabled the creation of a private, efficient,
          and feature-rich application that stands as a testament to my ability
          to architect and implement complex web solutions. In summary, these
          three projects collectively demonstrate my versatility, technical
          prowess, and commitment to delivering high-quality web applications.
          Each project presented unique challenges that I embraced, showcasing
          my ability to adapt and excel in various domains of web development.
        </p>

        {/* Card Design */}
        <Swing>
        <div className="row" id="ads">
          <div className="col-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img
                  src="https://www.dubaiwebsitecompany.com/mediaz/2023/08/logistics-company-web-design.jpg"
                  alt="Project 1"
                />
              </div>
              <div className="card-image-overly m-auto mt-2">
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">Node JS</span>
                <span className="card-detail-badge">Express JS</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase text-center">Witspi</h5>
                </div>
                <a className="ad-btn" href=""
                //  onClick={alert("This Project is Privite project")}
                 >
                  view
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React JS</span>
                <img
                  src="https://www.dubaiwebsitecompany.com/mediaz/2023/08/logistics-company-web-design.jpg"
                  alt="Project 1"
                />
              </div>
              <div className="card-image-overly m-auto mt-2">
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">Redux</span>
                <span className="card-detail-badge">Tailwind Css</span>
                <span className="card-detail-badge">FireBase</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase text-center">Bazar.com</h5>
                </div>
                <a
                  target="_blank"
                  className="ad-btn"
                  href="https://dulcet-klepon-261381.netlify.app/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React JS</span>
                <img
                  src="https://www.dubaiwebsitecompany.com/mediaz/2023/08/logistics-company-web-design.jpg"
                  alt="Project 1"
                />
              </div>
              <div className="card-image-overly m-auto mt-2">
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">Redux</span>
                <span className="card-detail-badge">Bootstrap</span>
                {/* <span className="card-detail-badge"></span> */}
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase text-center">
                    Current Portfolio
                  </h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
        </Swing>
      </div>
    </>
  );
};

export default Project;
