import React from 'react'
import { ContainerSegundario } from '../../style-components-golbales/GlobalStyle'
import { Titulo } from '../Titulo/Titulo'
import { Imagen, Texto } from './SobremiStyled'
import sobremi from "../../public/sobremi.png"
export const Sobremi = () => {
  return (
    <ContainerSegundario id="sobremi" >

      <Imagen className='observado' >
        <img src={sobremi} />
      </Imagen>
      <Texto className='observado'>
        <Titulo>
          <h2>
            Sobre mi
          </h2>
        </Titulo>
        Mi nombre es <span>Miguel Alejandro Estanga Martinez</span> estudiante ing de Sistemas
        en la univercidad de oriente udo vivo en Maturin Monagas, Me dedico a la programacion desde
        los 17años empeze haciendo FrontEnd y luego algo  BackEnd actualmente tengo 24 año para la
        fecha de  Obctubre del 2022 hago este portafolio con la intencion de dar un perfil como desarrollador 
        y mostrar las tecnologia que domino actualmente.
        Este sitio web esta diseñado con unas
        de mis tecnologias favorita y actualmenta la que mas utilizo Reacjs en la seccion de Habilidades
        muestro otras tecnologias que tambien utilizo muy amenudo <a href='#habilidades'>Habilidades</a>
        Tambien pretendo utilizar este sitio como galeria para poder mostrar mis componentes , app y sitios web que estare haciendo mas
        adelante los cuales podras ver en la sesion de <a href='#Proyectos'>Proyectos</a> actualmente son pocos
        pero estare trabajando duro para subir mas contenido {":)"}

        <div className="datos">
          <div>
              <p>Nombre </p>
              <p>Cedula</p>
              <p>Estudios</p>
              <p>Fehca de nacimiento</p>
              <p>Localizacion</p>
              <p>ingles</p>
              <p>telefono</p>
          </div>
          <div>
            <p>Miguel alejandro Estanga Martinez</p>
            <p>26101877</p>
            <p>Universidad de Oriente</p>
            <p>22/01/1998</p>
            <p>Maturin edo Monagas</p>
            <p>solo de lectura</p>
            <p>0426 3821517</p>
          </div>
        </div>
      </Texto>
    </ContainerSegundario>
  )
}
