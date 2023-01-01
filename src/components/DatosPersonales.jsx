function DatosPersonales(props){
    return(
        <ul className="datosPersonales">
            <li><span>Nombre:</span> {props.nombre}</li>
            <li><span>Apellido:</span> {props.apellido}</li>
            <li><span>Fecha de Nac.:</span> {props.fechaNacimiento}</li>
            <li><span>Nacionalidad:</span> {props.nacionalidad}</li>
            <li><span>Zona residencial:</span> {props.zonaResidencial}</li>
        </ul>
    )
}

export default DatosPersonales