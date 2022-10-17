import React from 'react'
import styled from 'styled-components'
export const Titulo = ({children}) => {
  return (
    <Tituloconten className='observado'>
        
            {children}
        
    </Tituloconten>
  )
}


const Tituloconten = styled.div`
   
    font-weight: 300;
    
    height: 80px;
    display: grid;
    justify-content: center;
    align-items: center;
    
    transform-origin: right;
   
    h2{
       
        font-size: 40px;
        text-shadow: 0 0 10px #fff , 0 0 20px #fff , 0 0 30px #fff;
    }
    
  
`
