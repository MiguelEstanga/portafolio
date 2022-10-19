import React from 'react'


import { Avatar, Box, Container, Info, Nombre, Redes, Ul } from './WraperStyle'
import portada from '../../public/portada.png'


export const Wraper = () => {



  return (
    <Container  id="inicio">

      <Box >
        <Avatar img={portada} className="observado">
          
        </Avatar>
        <Info>
          <Nombre>
            <h1>
              Miguel Estanga
            </h1>
            <p>Desarrollador web full stack</p>
          </Nombre>
          <Redes>
            <Ul>
              <li className='observado' style={{ '--c': '0' }}>
                <a  target="_blank"  href="https://www.facebook.com/miguel.estanga.520/">
                  <ion-icon name="logo-facebook"></ion-icon>

                </a>
              </li>
              <li className='observado' style={{ '--c': '2' }}>
                <a target="_blank" href="https://www.instagram.com/miguel_estanga/">
                  <ion-icon name="logo-instagram"></ion-icon>

                </a>
              </li>
              <li className='observado' style={{ '--c': '3' }}>
                <a target="_blank" href="https://wa.me/5804263821517">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>

              </li>
              <li target="_blank" className='observado' style={{ '--c': '4' }}>
                <a href="https://github.com/MiguelEstanga">
                  <ion-icon name="logo-github"></ion-icon>

                </a>
              </li>
              <li className='observado' style={{ '--c': '4' }}>
                <a target="_blank" href="https://www.linkedin.com/in/miguel-estanga-236a61252/">
                  <ion-icon name="logo-linkedin"></ion-icon>

                </a>

              </li>
            </Ul>
          </Redes>
        </Info>
      </Box>
    </Container>
  )
}
