import React from 'react'

import { ContainerSegundario } from '../../style-components-golbales/GlobalStyle'
import { Imagen, Particulas, Texto } from './WraperStyle'
import portada from '../../public/portada.png'
import { useRef } from 'react'

export const Wraper = () => {
  const particulas = useRef()


  return (
    <ContainerSegundario alto='100vh'>

      <Imagen imagen={portada}  className='observado'>
        <Particulas ref={particulas}>
          <li className='observado' 
              style={{ '--cordenada': '1' , '--color':'#5DADE2'}}>
                <a href='https://www.facebook.com/miguel.estanga.520/'>
                <ion-icon name="logo-facebook"></ion-icon>
                </a>
             
          </li>
          <li className='observado' 
              style={{ '--cordenada': '2' , '--color': '#7D3C98'}}>
            <ion-icon name="logo-instagram"></ion-icon>
          </li>
          <li className='observado' 
              style={{ '--cordenada': '3', '--color':"#1D8348" }}>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </li>
          <li className='observado' 
              style={{ '--cordenada': '4' , '--color' :'#000' }}>
            <ion-icon name="logo-github"></ion-icon>
          </li>
          <li className='observado' 
          style={{ '--cordenada': '5' , '--color' : '#2874A6' }}>
          <ion-icon name="logo-linkedin"></ion-icon>
          </li>
        </Particulas>
      </Imagen>
      <Texto>
        <div className="saludo">
          <h1>Hola soy </h1>
          <div className='observado' style={{ '--delay': '1' }}>M</div>
          <div className='observado' style={{ '--delay': '2' }}>I</div>
          <div className='observado' style={{ '--delay': '3' }}>G</div>
          <div className='observado' style={{ '--delay': '4' }}>U</div>
          <div className='observado' style={{ '--delay': '5' }}>E</div>
          <div className='observado' style={{ '--delay': '6' }}>L</div>
          <div className='observado' style={{ '--delay': '7' }}></div>
          <div className='observado' style={{ '--delay': '8' }}>E</div>
          <div className='observado' style={{ '--delay': '9' }}>S</div>
          <div className='observado' style={{ '--delay': '10' }}>T</div>
          <div className='observado' style={{ '--delay': '11' }}>A</div>
          <div className='observado' style={{ '--delay': '12' }}>N</div>
          <div className='observado' style={{ '--delay': '13' }}>G</div>
          <div className='observado' style={{ '--delay': '14' }}>A</div>
        </div>
        <div className="boton">
          Desarrollador web full stat
          <br />
          <a>
            Emprecemos!
          </a>
        </div>
      </Texto>

    </ContainerSegundario>
  )
}
