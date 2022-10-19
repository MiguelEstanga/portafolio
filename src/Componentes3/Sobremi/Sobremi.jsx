import React from 'react'
import { ContainerSegundario } from '../../style-components-golbales/GlobalStyle'
import { Titulo } from '../Titulo/Titulo'
import { Imagen, Texto } from './SobremiStyled'
import sobremi from "../../public/ilustracion.png"
export const Sobremi = () => {
  return (
    <ContainerSegundario id="sobremi" >

      <Imagen className='observado' >
        <img src={sobremi} alt="sobremi" />
      </Imagen>
      <Texto className='observado'>
        <Titulo>
          <h2>
            Sobre mi
          </h2>
        </Titulo>
        Mi nombre es <span>Miguel Alejandro Estanga Martinez</span> estudiante ing de Sistemas
        en la universidad de Oriente udo vivo en Maturin Monagas, Me dedico a la programación desde
        los 17años empecé haciendo FrontEnd y luego algo  BackEnd actualmente tengo 24 años para la
        fecha de  Obctubre del 2022 hago este portafolio con la intención de dar un perfil como desarrollador 
        y mostrar las tecnología que domino actualmente.
        <br/><br/>

        Este sitio web está diseñado con unas
        de mis tecnologias favoritas y actualmente la que más utilizo Reacjs en la sección de Habilidades
        muestro otras tecnologías que también utilizo muy a menudo <a href='#habilidades'>Habilidades</a> 
        También pretendo utilizar este sitio como galería para poder mostrar mis componentes , app y sitios web que estaré haciendo más
        adelante los cuales podrás ver en la sección de <a href='#proyectos'>Proyectos</a> actualmente son pocos
        pero estaré trabajando duro para subir más contenido {":)"}

        <div className="datos">
          <div>
              <p>Nombre </p>
              <p>Estudios</p>
              <p>Edad</p>
              <p>Localizacion</p>
              <p>ingles</p>
             
          </div>
          <div>
            <p>Miguel alejandro Estanga Martinez</p>
            <p>Universidad de Oriente</p>
            <p>24</p>
            <p>Maturin edo Monagas</p>
            <p>Basico</p>
            
          </div>
        </div>
      </Texto>
    </ContainerSegundario>
  )
}

