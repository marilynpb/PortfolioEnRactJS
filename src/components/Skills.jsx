import "../style/Skills.css"

function Skills(props){
    return(
        <div className="card">
            <h3 className="skill">{props.titulo}</h3>
            <br></br>
            <ul className="skills">
                <div>
                    <li>{props.item1}
                    <meter min="0" max="100" value={props.porcentaje1} low="10" high="50" id="barra"></meter></li>
                    <li>{props.item3}
                    <meter min="0" max="100" value={props.porcentaje3} low="10" high="50" id="barra"></meter></li>
                    <li>{props.item5}
                    <meter min="0" max="100" value={props.porcentaje5} low="10" high="50" id="barra"></meter></li>
                </div>
                <div>
                    <li>{props.item2}
                    <meter min="0" max="100" value={props.porcentaje2} low="10" high="50" id="barra"></meter></li>
                    <li>{props.item4}
                    <meter min="0" max="100" value={props.porcentaje4} low="10" high="50" id="barra"></meter></li>
                    <li>{props.item6}
                    <meter min="0" max="100" value={props.porcentaje6} low="10" high="50" id="barra"></meter></li>
                </div>
            </ul>
        </div>
    )
}

export default Skills