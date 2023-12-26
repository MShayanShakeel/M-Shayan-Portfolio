import React , {useState} from 'react'
import './Layout.css'
import Home from '../../Pages/home/Home'
import {BsChevronDoubleLeft , BsChevronDoubleRight} from "react-icons/bs"
import Menu from '../Menus/Menu'


const Layout = () => {

    const [toogle, settoogle] = useState(true)

const handletoogle =()=>{
    settoogle( !toogle)
}
  return (
    <>
    <div className="Slidebar-section">
        <div className={toogle ? "Slidebar-toggle Slidebar" : "Slidebar"}>
            <div className="slidebar-toggel-icons">
                <p onClick={handletoogle} > 
                 {
                     toogle ? (<BsChevronDoubleLeft size={30}/>) : (<BsChevronDoubleRight size={30}/>)
                    }   
                 </p>
                
            </div>
                <Menu toogle={toogle} />
        </div>
        <div className="container">
                    <Home />
        </div>
    </div>
    </>
  )
}

export default Layout
