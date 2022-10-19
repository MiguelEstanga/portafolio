 import React ,{ useEffect}from 'react'
import { Sobremi } from './Componentes3/Sobremi/Sobremi'
import { Wraper } from './Componentes3/Wreaper/Wraper'
import { GlobalStyle } from './style-components-golbales/GlobalStyle'
import { useObserver } from './hook/useObserver'
import { Habilidades } from './Componentes3/Habilidades/Habilidades'
import { Portafolio } from './Componentes3/Portafolio/Portafolio'

import { useState } from 'react'
import { Cargando } from './Componentes3/Cargando'
import { Like } from './Componentes3/Like/Like'
import { Comentario } from './Componentes3/Comentario/Comentario'
import { Footer } from './Componentes3/footer/Footer'
import { Navegacion } from './Componentes3/Menu/Navegacion'
import { Modal } from './Componentes3/Modal/Modal'
import { useContexto } from './context/Context'





export default function App() {
 
  const [carga , setCarga] = useState(true)
 const {modal} =  useContexto()
  const  [entradas , setElementos , Observador] = useObserver({
    threshold:0
  })


  useEffect(function() {
   
    setTimeout(()=>{
      const elementos =  document.querySelectorAll('.observado')
      setElementos(elementos)
      setCarga(false)
    },2000)

  } , [setElementos])

  useEffect(function() {
    
   entradas.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }else{
          entry.target.classList.remove('active')
        }
   })
  } ,[Observador, setElementos] )

 
  return (
    <>
      {carga ? <Cargando/>:null}
      {modal ? <Modal/> : null}

      
      <Navegacion/>
      <GlobalStyle/>
      <Wraper/>
      <Sobremi />
      <Habilidades/>
      <Portafolio />
      <Like/>
      <Comentario/>
      <Footer/>

      
    </>
  )
}
