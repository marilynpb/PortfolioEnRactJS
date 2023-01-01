import linkedin from '../img/redesSociales Portoflio/linkedin1.png'
import instagram from '../img/redesSociales Portoflio/instagram1.png'
import github from '../img/redesSociales Portoflio/github1.png'
import email from '../img/redesSociales Portoflio/email1.png'
import { Link } from 'react-router-dom'
import "../style/RedesSociales.css"

function RedesEnBloque(props){
    return(
        <div className="misRedesBloque">
            <h4>{props.texto}</h4>
            <div className='bloque'>
            <Link><img src={instagram} alt="" className='redes'/></Link><Link className='textoRedes'>Instagram</Link>
            <Link><img src={linkedin} alt="" className='redes'/></Link><Link className='textoRedes'>Linkedin</Link>
            <Link><img src={github} alt="" className='redes'/></Link><Link className='textoRedes'>GitHub</Link>  
            </div>
        </div>

    )
}

export default RedesEnBloque