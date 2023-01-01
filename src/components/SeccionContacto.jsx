import '../style/Contacto.css'
import ws from '../img/icons/whatsapp.svg'
import mail from '../img/icons/envelope.svg'
import lin from '../img/icons/linkedin (1).svg'
import git from '../img/icons/git.svg'
import FormContactoMailer from './FormContactoMailer'



function SeccionContacto(){
    return(
    <div className='App'>

        <div className="izquierda fondoBlanco">
        <h4>"Controlar la complejidad es la esencia de la programación"</h4>
            <ul className='listaContacto'>
                <li><img src={ws} alt='' className='icon'/>Teléfono</li>
                <h5>01128156550</h5>
                <li><img src={mail} alt='' className='icon'/>Email</li>
                <h5>marilyn_perezboyko@hotmail.com</h5>
                <li className='redesTitulo'>Redes sociales</li>
                <ul className='redesIcons'>
                    <li><a href="https://www.linkedin.com/in/marilynperezboyko" target={'blank'}><img src={lin} alt="" /></a></li>
                    <li><a href='https://github.com/marilynpb' target={'blank'}><img src={git} alt="" /></a></li>
                </ul>
            </ul>
        </div>

        <div className="derecha fondoOscuro">
        <h2 className="titulo" style={{color:"white", fontWeight:"bolder"}}>- PONTE EN <span style={{color:"#f43831"}}>CONTACTO </span>-</h2>
        <FormContactoMailer/>
        </div>
    </div>)
}

export default SeccionContacto
