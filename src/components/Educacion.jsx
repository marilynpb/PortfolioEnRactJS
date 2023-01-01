import calendario from '../img/calendar3.svg'
import '../style/Educacion.css'

function Educacion(props){
    return(
        <div className='educacion'>
            <div>
                <img src={calendario} alt="" className='calendarioImg'/>{props.fecha3}
                <h2 className='descEdu'>{props.titulo3} - {props.instituto3}</h2>
            </div>
            <div>
                <img src={calendario} alt="" className='calendarioImg'/>{props.fecha2}
                <h2 className='descEdu'>{props.titulo2} - {props.instituto2}</h2>
            </div>
            <div>
                <img src={calendario} alt="" className='calendarioImg'/>{props.fecha1}
                <h2 className='descEdu'>{props.titulo1} - {props.instituto1}</h2>
            </div>
        </div>
    )
}

export default Educacion