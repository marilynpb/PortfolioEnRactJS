import SobreMi from "./SobreMi"
import miniFoto from '../img/gluuuuFinal2.png'
import '../style/About.css'
import DatosPersonales from "./DatosPersonales"
import Educacion from "./Educacion"
import Button from "./Button"
import Skills from "./Skills"
import miCV from "../miCV/CVGloriaMarilynPerezBoyko.pdf"


function SeccionAbout(){
    return(
        <div className="App">        
            <div className="izquierda fondoImg fondoBlanco">
                <h2 className="titulo" style={{color:"white", fontWeight:"bolder"}}>- SOBRE <span style={{color:"#f43831"}}>MÍ </span>-</h2>
                <div className="miPresentacion">
                    <img src={miniFoto} alt="" className="miniFoto"/>
                    <SobreMi
                    parrafo1="Soy estudiante de sistemas, me encuentro finalizando el Bootcamp Full Stack Engineer en Educación IT." 
                    parrafo2="Estoy en la búsque de mi primer experiencia laboral que me permita fortalecer
                    mis conocimientos actuales, seguir aprendiendo y formandome en este camino."/>
                </div>
                <DatosPersonales nombre="Gloria Marilyn" apellido="Perez Boyko" 
                fechaNacimiento="  04 de MAyo 1993" 
                nacionalidad="Argentina" zonaResidencial="Cordoba, Argentina" 
                email="marilyn_perezboyko@hotmail.com"/>
            </div>

            <div className="derecha fondoOscuro">
                <h2 className="subTitulo">EDUCACIÓN</h2>
                <Educacion fecha1="Mar. 2013 - Dic. 2017" titulo1="Tecnico Superior de Análisis de Sitemas" instituto1="IFTS N°21"
                fecha2="Ago. 2022 - Oct. 2022" titulo2="ReactJS Developer" instituto2="EducacionIT"
                fecha3="Jun. 2022 - Feb. 2023" titulo3="Bootcamp, Full Stack Engineer" instituto3="EducacionIT"
                />
                <h2 className="subTitulo subMargin">SKILLS</h2>
                <Skills
                    item1="Html/CSS" porcentaje1="90"
                    item2="Javascript" porcentaje2="70"
                    item3="MongoDB" porcentaje3="60"
                    item4="NodeJs" porcentaje4="70"
                    item5="Github" porcentaje5="70"
                    item6="ReactJS" porcentaje6="60"
                />
                <a href={miCV} download><Button valor="Descargar CV" estilo={{color:"#f43831"}}/></a>            
            </div>
        </div>
    )
}

export default SeccionAbout