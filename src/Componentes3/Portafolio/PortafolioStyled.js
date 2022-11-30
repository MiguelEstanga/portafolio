import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    .titulo{
        p{
            font-size: 25px;
            font-weight: 300;
            text-align: center;
        }
        h2{
            font-size: 40px;
            font-weight: 200;
            text-align: center;
        }
    }

`

export const Box = styled.div`
    width: 100%;
    height: auto;
   
    display: grid;
    padding: 10px   ;
    grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    @media (max-width:900px) {
        grid-template-columns: repeat(1,1fr);
    }
`   
export const Img = styled.div`
        background: #fff;
        width: 100%;
        height: 70%;
        background-image: url( ${({imagen} ) => imagen} );
        border-radius: 2px;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        transition: 10s;
        &:hover{
            background-position: bottom;
        }
`
export const Carta = styled.div`
    width: 70%;
    height: 900px;
    margin: auto;
    box-shadow: 10px 10px 20px black;
   
    
    .img{
        background: #fff;
        width: 100%;
        height: 70%;
        background-image: url( ${({imagen} ) => imagen} );
        border-radius: 2px;
    }
    .info{
        width: 100%;
        height: 30%;
        
        padding: 10px;
        h2{
            text-align: center;
        }
        ul{
            li{
                list-style: none;
                font-size: 20px;
                font-weight: 200;
            }
        }
    }
    .descripcion{
       
        margin-top: 10px;
    }
   
`
