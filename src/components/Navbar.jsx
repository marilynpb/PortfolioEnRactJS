import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import home from '../img/menuIcon/8.svg'
import sobreMi from '../img/menuIcon/20.svg'
import porftolio from '../img/menuIcon/6.svg'
import contact from '../img/menuIcon/5.svg'
import {Route, Routes } from "react-router-dom";
import App from "../App";

function Navbar(){
    
    return(
        <div className="nav">
            <nav>
            <ul>
                <li><div className="bordeMenu"></div></li>
                <li><Link to="/"><div className="bordeMenu"><img src={home} alt="" className="menuIcon"/></div></Link></li>
                <li><Link to="seccionAbout"><div className="bordeMenu"><img src={sobreMi} alt="" className="menuIcon"/></div></Link></li>                <li className="punto"><Link to="seccionPortfolio"><div className="bordeMenu"><img src={porftolio} alt="" className="menuIcon"/></div></Link></li>            
                <li><Link to="contacto"><div className="bordeMenu"><img src={contact} alt="" className="menuIcon"/></div></Link></li>

            </ul>
            </nav>
            <Routes>
                <Route path="home" element={<App/>}></Route>
            <Route path="sobreMi" element={<App/>}></Route>
            <Route path="estudios" element={<App/>}></Route>
            <Route path="contact" element={<App/>}></Route>
            </Routes>
        </div>
    )
}


export default Navbar 