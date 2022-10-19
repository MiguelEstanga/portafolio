import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background: rgba(0 ,0 ,0,.9);
    
    display: flex;
    align-items: center;
    z-index: 20000;

    .boton{
        z-index: 20001;
        position: absolute;
       
        width: 80px;
        height: 80px;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &::before{
            content: 'x' ;
            position: absolute;
            font-size: 50px;
            color: red;
            font-weight: 900;

        }
    }
`

export const Imagen =  styled.div`
   
    width:50%;
    height:100%;
    margin: auto;
    
    img{
        width: 100%;
        height: 100%;
    }
    @media (max-width:800px) {
        width: 100%;
    }
`
