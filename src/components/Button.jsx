import "../style/Button.css"

function Button(props){
    return(
        <button style={props.estilo}>{props.valor}</button>
    )
}

export default Button 