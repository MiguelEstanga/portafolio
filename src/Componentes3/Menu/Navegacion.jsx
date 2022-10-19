import React, { useEffect, useRef ,useState} from 'react'
import { Box, Container, Ul } from './NavegacionStyle'

export const Navegacion = () => {
  const burger = useRef()
  const ul = useRef()
  const navegacion =useRef()


  function handle(e){
    burger.current.classList.toggle('active')
    ul.current.classList.toggle('active')
 
  }
  //--------------
  useEffect(function(){
    function change(e){
        if(window.scrollY > 0 ){
          navegacion.current.classList.add('color') 
        }
        if(window.scrollY === 0 ){
          navegacion.current.classList.remove('color')
        }
     
    }

    window.addEventListener('scroll', change)

    return () =>  window.removeEventListener('scroll', change)
  },[])
  // ----------------
  return (
    <Container ref={navegacion}>
        <Box>
            Miguel Estanga
        </Box>
        <Ul ref={ul}>
            <li onClick={handle}><a href="#inicio">inicio</a></li>
            <li onClick={handle}><a href="#sobremi">sobre mi</a></li>
            <li onClick={handle}><a href="#habilidades">Habilidades</a></li>
            <li onClick={handle}><a href="#proyectos">Proyetos</a></li>
            <li onClick={handle}><a href="#like">Like</a></li>
            <li onClick={handle}><a href="#comentarios">Comentarios</a></li>
            
        </Ul>
        <div className="burger" ref={burger} onClick={handle}>
            <div className='rayas'></div>
            <div className='rayas'></div>
            <div className='rayas'></div>
        </div>
    </Container>
  )
}
