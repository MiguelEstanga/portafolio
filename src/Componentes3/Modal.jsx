import React from 'react'
import {  Container, Imagen } from './ModalStyle'
import { useContexto } from '../../context/Context'
export const Modal = () => {
   const {setmodal , imagen} = useContexto()
  return (
    <Container>
        <div className="boton"  onClick={e => setmodal(false) } >
            X
        </div>
        <Imagen >
           <img src={imagen} alt="" />
        </Imagen>
      
    </Container>
  )
}
