import styled from "styled-components";

export const Imagen = styled.div`

    border: solid rgba(0,0,0,.70) 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.70);
    width: 70%;
    height: 70%;
    margin: auto;
    transform-origin: right;
    transform:  translateX(100%) ;
    opacity: 0;
   
    transition-delay: 500ms;
    img{
        width: 100%;
        height: 100%;
        -webkit-box-reflect: right 0 
            linear-gradient(transparent , transparent , rgba(0,0,0,.8));
    }
    &.active{
        opacity: 1;
        transform:  translateX(0) rotateY(30deg);
    }
`
export const Texto = styled.div`
    transform-style: preserve-3d;
    margin: auto;
    width: 100%;
    padding: 4px;
    
    transform: translateZ(-3000px) rotateX(80deg) ;
    padding: 10px;
    opacity: 0;
    font-weight: 100;
    line-height: 30px;
    font-size: 20px;
    text-align: center;
    @media (max-width:700px) {
        font-size: 30px;
        line-height: 40px;
        text-align: center;
    }
    a{
        
        text-shadow: 0 0 10px #fff , 0 0  20px #fff , 0 0 30px #fff , 0 0 40px #fff;
    }

    &.active{
        transform: translateZ(0) rotateX(0);
        opacity: 1;
    }

`