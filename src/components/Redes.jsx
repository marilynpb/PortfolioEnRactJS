import linkedin from '../img/redesSociales Portoflio/linkedin1.png'
import github from '../img/redesSociales Portoflio/github1.png'
import email from '../img/redesSociales Portoflio/email1.png'
import "../style/RedesSociales.css"

function Redes(props){
    return(
        <div className="misRedes">
            <h4>{props.texto}</h4>
            <div className='divRedes'>
            <a href="https://www.linkedin.com/in/marilynperezboyko" target={'blank'}><img src={linkedin} alt="" className='redes'/></a>
            <a href='https://github.com/marilynpb' target={'blank'}><img src={github} alt="" className='redes'/></a>
            <a href='mailto:marilynperezboyko@hotmail.com'><img src={email} alt="" className='redes'/></a>
            </div>
        </div>

    )
}

export default Redes