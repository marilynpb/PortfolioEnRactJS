import React from "react";
import { Link } from "react-router-dom";
import NombreYApellido from "./NombreYApellido"
import Redes from "./Redes"
import Button from "./Button"
import '../style/Home.css'


const Tarjeta = function (){
    return(
        <div className="presentacion">
            <NombreYApellido 
            nombre="Marilyn"
            apellido="Perez Boyko"
            profesion="Full Stack Developer"/>
            <Link to="seccionAbout"><Button  as={Link}  to="seccionAbout"   valor="Sobre mí" estilo={{backgroundColor:"#f43831", border:"none"}}/></Link>
            <Link to="SeccionPortfolio"><Button valor="Portfolio" estilo={{color:"#f43831"}}/></Link>
            <Redes 
            nombre1="Instagram"
            nombre2="Linkedin"
            nombre3="GitHub"
            nombre4="Email"
            />
        </div>
    )
}

export default Tarjeta