
function SobreMi(props){
    return(
        <div className="sobreMi" id="sobremi">
                <h2>{props.subtitulo}</h2>
                <p>{props.parrafo1}</p>
                <p>{props.parrafo2}</p>
        </div>
    )
}

export default SobreMi