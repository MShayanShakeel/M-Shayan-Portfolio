import React from 'react'
import "./Techstack.css"
import Fade from 'react-reveal/Fade';
import { TechstackList } from './../../components/utils/TechStackList';

const Techstack = () => {
  return (
    <>
    <div className="container tech-stack" id='techstack'>
        <h2 className="col-12 mt-3 mb-1  text-center">Techonology Stack</h2>
        <hr/>
        <p className="pb-3 text-center">👉: Inchuding Programing languages ,Framworks , Database ,
         Front-end and Back-End tool and API</p>
         <div className="row">
         <Fade right>
            {TechstackList.map((tech) =>(
                   <div key ={tech._id} className="col-md-3">
                   <div className="card m-3">
                   <div className="card-content">
                       <div className="card-body">
                           <div className="media d-flex justify-content-center">
                               <div className="alig-self-center">
                                   <tech.icon  className="tech-icon"/>
                               </div>
                               <div className="media-body">
                                   <h5>{tech.name}</h5>
                               </div>
                           </div>
                       </div>
                       </div>
                   </div>
               </div>
            ))}
         
            
         </Fade>
         </div>
    </div>
    </>
  )
}

export default Techstack