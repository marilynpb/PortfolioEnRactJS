import video1 from '../videosProyectos/11.mp4'
import video2 from '../videosProyectos/video2.mp4'
import video3 from '../videosProyectos/video3.mp4'
import video4 from '../videosProyectos/video4.mp4'
import video5 from '../videosProyectos/video5.mp4'
import React from 'react'
import ReactPlayer from 'react-player'
import '../style/SeccionPortfolio.css'

function SeccionPortfolio(){
    return(
        <div className="App">
            <div className="izquierda">
                <h2 className="titulo tituloPortfolio" style={{color:"white", fontWeight:"bolder"}}>- MI <span style={{color:"#f43831"}}>PORTFOLIO </span>-</h2>
                <p className='subtituloPortfolio'>Estos son algunos de los proyectos que realicé</p>
                <div className='proyectoPrincipal'>
                    <div>Creador Web de Curriculums</div>
                    <div className='player-wrapper'>
                    <ReactPlayer url={video1} controls className='react-player' width='100%' height='100%'/>
                    </div>
                    
                    {/*<img src={proyecto1} alt="proyecto1" className='princIMG'/>*/}
                    <p className='descripcion'>
                        Tecnologías implementadas: HTML, CSS, Javascript, HBS, NodeJS, MongoDB.
                    </p>
                </div>
            </div>
            <div className="derecha otros">
                <h2>Otros proyectos</h2>
                <div className='gridProyectos'>
                    <div className='contDiv'>
                        <div className='miniDiv'>Memory Game Star Wars</div>
                        <div className='player-wrapper'>
                        <ReactPlayer url={video2} controls className='react-player' width='100%' height='100%'/>
                        </div>
                    </div>
                    <div className='contDiv'>
                        <div className='miniDiv'>Cambio de Diseño interactivo</div>
                        <div className='player-wrapper'>
                        <ReactPlayer url={video5} controls className='react-player' width='100%' height='100%'/>
                        </div>
                    </div>
                    <div className='contDiv'>
                        <div className='miniDiv'>Modelo de Portfolio personal</div>
                        <div className='player-wrapper'>
                        <ReactPlayer url={video4} controls className='react-player' width='100%' height='100%'/>
                        </div>
                    </div>
                    <div className='contDiv'>
                        <div className='miniDiv'>Consumo de API REST</div>
                        <div className='player-wrapper'>
                        <ReactPlayer url={video3} controls className='react-player' width='100%' height='100%'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeccionPortfolio