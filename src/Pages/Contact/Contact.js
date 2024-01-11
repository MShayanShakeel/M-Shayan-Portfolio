import React from 'react'
import './Contact.css';
import { IoLogoLinkedin } from "react-icons/io";
import { BsFacebook, BsFillEnvelopeFill } from "react-icons/bs";
import { SiGithub } from "react-icons/si";


const Contact = () => {
  return (
   <>
   <div className="container contact" id='contact'>
    <div className="card card0 border-0">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12">
                <div className="card1">
                    <div className="row border-line">
                        <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D"
                         alt="Contact-picture"
                         className='image' />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                    <div className="card2 d-flex card border-0 px-4 py-4">
                <div className="row">
                        <div className="row">
                        <h6>Contact With ICONS
                            <a href="https://www.linkedin.com/in/m-shayan-shakeel-795899203">
                        <IoLogoLinkedin color='blue' size={37} className='ms-2' />
                            </a>
                        <a target='_blank' href="https://github.com/mshayan">
                        <SiGithub color='black' size={30} className='ms-2'/></a>
                        <abbr title="mshayanshakeel786@gmail.com">
                        <BsFillEnvelopeFill color='blue' size={28}  className='ms-2' />
                        </abbr>
                        
                        </h6>
                        </div>
                    
                    <div className="row px-3 mb-3">
                        <div className="line"/>
                        <small className='or text-center'>OR</small>
                        <div className="line"/>
                    </div>
                
                {/* <div className="row px-3">
                    <input type="text" name='name' placeholder='Enter Your Name' className='mb-3'/>
                </div> */}
                {/* <div className="row px-3">
                    <input type="email" name='name' placeholder='Enter Your Email' className='mb-3'/>
                </div> */}
                <div className="row px-3" style={{height : "10rem"}}>
                    <h5 className='mb-3 dummy-text'>Dummy Text :If you need to contact me, please use the provided icons and my email mshayanshakeel786@gmail.com. Thanks! 😊 </h5>
                </div>
                <div className="row px-3">
                   <button className='button'> Send</button> 
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Contact
