import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
        <Conten>
            <h2>
                Muchas Gracias {"<3"}
            </h2>
        </Conten>
  )
}

const Conten = styled.footer`
    width: 100%;
    height: 30vh;
   
    display: flex;
    text-align: center;
    justify-content: center;

    h2{
       font-size: 50px;
        
        margin: auto auto;
        animation: rojo 3s infinite ;

        @keyframes rojo {
            0%,100%{
                text-shadow: 0 0 10px red;
            }
            50%{
                color: red;
                text-shadow: 0 0 20px red , 0 0 40px red , 0 10px 60px red;
            }
        }
    }
`