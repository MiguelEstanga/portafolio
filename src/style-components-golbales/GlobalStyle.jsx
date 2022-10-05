import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *{
        color:#ffff;
        margin:0;
       
        box-sizing:border-box;
        transition:all 300ms linear;
        font-weight: 100;
     }
`
export const ContainerSegundario = styled.section`
    width: 100%;
    height: ${({alto}) => alto} ;
   
    position: relative;
    transform-style: preserve-3d;
    perspective: 2000px;
     position: relative;
    display: grid;
    grid-template-columns: repeat(2 ,1fr);
    justify-content: center;
    align-items: center;

    @media (max-width:900px) {
        grid-template-columns:repeat(1,1fr) ;
    }
`
export const ContainerPrimario = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    transform-style: preserve-3d;
    perspective: 2000px;
     display: flex;
     justify-content: center;
     align-items: center;

    
    
`