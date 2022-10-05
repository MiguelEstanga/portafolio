import React from 'react';
import styled from "styled-components";
export const Cargando = () => {
  return (
    <CargandoContainer>
        <p>
            Cargando
            <div style={{'--p' : '1'}}>.</div>
            <div style={{'--p' : '2'}}>.</div>
            <div style={{'--p' : '3'}}>.</div>
        </p>
    </CargandoContainer>
  )
}

const CargandoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2000;
    top: 0;
   background: rgb(0,0,0,.50);
    flex-direction: column;

    div{
        display: inline-block;
        
        animation: p 800ms infinite ;
        font-size: 50px;
        font-weight: 100;
        transition: 1s;
       
       
        &:nth-child(2){
            animation-delay: 300ms;
        }
        &:nth-child(3){
            animation-delay: 600ms;
        }
        @keyframes p {
            0%,100%{
                font-weight: 100;
            }
            50%{
               font-weight: 900;
            }
            
        }
    }
    p{
        font-size: 50px;
        font-weight: 900;
        text-align: center;
    }
`