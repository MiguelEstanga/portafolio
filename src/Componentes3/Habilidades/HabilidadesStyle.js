import styled from "styled-components";


export const Container  = styled.div `
    width: 100%;
  
    display: grid;
   
    grid-template-columns: 10% 90%;
    justify-content: center;
    align-items: center;
`

export const ContainerHabilidades =styled.div`
    width: 100%;
    height: 100%;
    display: grid;
   
   
    
   
    padding: 10px;
    .texto{
        margin: auto;
        font-size: 30px;
        font-weight: 100;
    }

    .BoxConten{
       
        width: 90%;
        height: 100%;
        margin: auto;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(auto-fill , minmax(300px,1fr));
        transform-style: preserve-3d;
        perspective: 2000px;
    }
`

export const Box = styled.div`
    width: 250px;
    height: 300px;
    box-shadow:10px 10px 10px black ;
   
    border-radius: 4px;
    transform: translateZ(10px) translateX(-100%);
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 3s;
    transition-delay: calc( 0.1s * var(--delay));
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
    background: ${ ({color}) => color };
    svg , ion-icon{
        font-size: 150px;
        border-radius:10px ;
        background: var(--c);
    }

    img{
        width: 100%;
        height: 100%;
    }

    .nombre{
       
        font-size: 30px;
    }
    .icon{
        
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &.active{
        opacity: 1;
        transform: translateX(0);
    }
`

export  const Titulo = styled.div`  
    width: auto;
    height: 40px;
   
    transform: rotate(-90deg);
    h2{
        font-size: 40px;
        color:#fff ;
        text-transform: initial;
        text-shadow: 0 0 10px #fff , 0 0 20px #fff , 0 0 30px #fff;
    }

`