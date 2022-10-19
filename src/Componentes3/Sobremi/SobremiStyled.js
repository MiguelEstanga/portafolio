import styled from "styled-components";

export const Imagen = styled.div`

   
    border-radius: 5px;

    width: 100%;
    height: 100%;
    margin: auto;
    transform-origin: right;
    
    opacity: 0;
    background-image: ${({img}) => img};
    background-position: center;
    background-size: cover;
    transition-delay: 500ms;
    img{
        width: 100%;
        height: 100%;
    }

    &.active{
        opacity: 1;
        transform:  rotateY(30deg);
    }
`
export const Texto = styled.div`
    transform-style: preserve-3d;
    margin: auto;
    width: 90%;
    
   
  
    padding: 4px;
    opacity: 0.3;
    font-weight: 100;
    line-height: 30px;
    font-size: 20px;
    text-align:justify;



    .datos{
        width: 100%;
        height: 40vh;
        padding: 2px;
        border: solid 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        div{
            p{
                font-size: 15px;
            }
        }
    }


    @media (max-width:700px) {
        font-size: 20px;
        line-height: 35px;
        .datos{
            padding: 1px;
            border: none;
            font-size: 10px;
        }
    }
  

    &.active{
        
        opacity: 1;
    }

`
