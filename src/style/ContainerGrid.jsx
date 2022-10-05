
import styled from "styled-components";
const  ContainerGrid = styled.div`
    @media (max-width: 700px) {
       
        display: flex;
        flex-direction: column;
        height: 80vh;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    a{
        width: 100%;
        
       
    }

    display: grid;
    width: ${ ({ancho = '100%'}) =>ancho };
    height: ${ ({alto = '100%'}) =>alto };
    margin: auto;
    grid-template-columns: repeat(auto-fit , minmax(500px,1fr) );
    grid-template-rows: ${ ({filas = '1'}) => filas };
    padding: ${({P = '10px'}) => P};
    border: solid ${({B = '0'}) => B} black;
    gap: 5px;
    box-shadow:${({sombra}) => sombra} ;
    background :${({color } ) => color }  ;
  
   
`

export const  ContainerHijo = styled.div`
    width: ${ ({ancho = '100%'}) =>ancho };
    height: ${ ({alto = '100%'}) =>alto };
    grid-row-start: ${ ({inicioFila = '1'} ) => inicioFila } ;
    grid-column-start: span ${ ({iniciocolumna ='1'}) => iniciocolumna } ;
    background-color: ${({color ='#fff'} ) => color } ;
  
    transition: 1s;
   
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    @media ((max-width: 700px)) {
       height: 350px;
       width: 100%;
    }
`


export default ContainerGrid