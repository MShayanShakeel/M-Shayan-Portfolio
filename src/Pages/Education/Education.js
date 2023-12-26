import React from 'react'
import './Education.css'
import { MdSchool } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
   
       <>
     <div className='container education'>  
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>👉: Education</h2>
        <hr/>   
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">BS.CS In</h3>
    <h4 className="vertical-timeline-element-subtitle">PAF-KIET Karachi</h4>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2017 - 2019"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
     <h3 className="vertical-timeline-element-title">Intermediate In</h3>
    <h4 className="vertical-timeline-element-subtitle">SSAT Karachi</h4>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2016"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Matriculation</h3>
    <h4 className="vertical-timeline-element-subtitle">IQtarad P/S High School Karachi</h4>
  </VerticalTimelineElement>

        </VerticalTimeline>
    
        </div>
    </>
  )
}

export default Education
