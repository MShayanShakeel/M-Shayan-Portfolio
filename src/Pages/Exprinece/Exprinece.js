import React from 'react'
import './Exprinece.css'
import { FaReact } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Exprinece = () => {
  return (
    <>
      <div className='container exprince' id='exprience'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>👉: Working Exprience</h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ backgroundImage: 'linear-gradient(to bottom right, #8b939a, #5b6467)', color: '#fff' }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">TechOn Vendture</h3>
            <h4 className="vertical-timeline-element-subtitle">Front-End-Developer</h4>
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="4/2023 - 6/2023"
            iconStyle={{ backgroundImage: 'linear-gradient(to bottom right, #8b939a, #5b6467)', color: '#fff' }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">Techno Mide</h3>
            <h4 className="vertical-timeline-element-subtitle">As Front-End Intern</h4>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - 2021"
            iconStyle={{ backgroundImage: 'linear-gradient(to bottom right, #8b939a, #5b6467)', color: '#fff' }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">UnityTeck</h3>
            <h4 className="vertical-timeline-element-subtitle">Front-End-Developer</h4>
          </VerticalTimelineElement>




        </VerticalTimeline>

      </div>
    </>
  )
}

export default Exprinece
