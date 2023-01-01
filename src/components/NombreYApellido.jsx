import React from "react";

class NombreYApellido extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="nombre">
                <h1 className="nombre">{this.props.nombre} <span style={{color:"#f43831"}}>{this.props.apellido}</span></h1>
                <h2 className="profesion">{this.props.profesion}</h2>
            </div>
        )
    }


}

export default NombreYApellido