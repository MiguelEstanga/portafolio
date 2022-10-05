import React, { useRef, useState } from 'react'
import { Container, MenuNav } from './MenuStyle'

export const Menu = () => {
  const [menu  , setmenu] = useState(true)
  const ofon = useRef()
  const ul = useRef()
  function handle(){
    console.log(menu)
    setmenu(!menu)
    if(menu){
      ofon.current.classList.add('active')
      ul.current.classList.add("active")
    }else{
      ofon.current.classList.remove('active')
      ul.current.classList.remove("active")
    }


 
  }
  return (
    <Container ref={ofon} onClick={handle}>
        {
              menu?"of":"on"
            }
        <MenuNav onClick={handle} ref={ul}>
              <Container>
              {
              menu?"of":"on"
            }
              </Container>
            <li><a href='#Sobremi'>Sobre mi</a></li>
            <li><a href='#Habilidades'>Habilidades</a></li>
            <li><a href='#Proyectos'>Portafolio</a></li>
            <li><a href='#Proyectos'>Seccion de like</a></li>
            <li><a href='#Proyectos'>Seccion de comentarios</a></li>
         
        </MenuNav>
    </Container>
  )
}
