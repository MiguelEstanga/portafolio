import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: grid;
    place-items: center;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    background: linear-gradient(140deg ,   #0C0B0B , #01080D);
    

    
`

export const Box = styled.div`
    background:#2B2B2B;
    width: 320px;
    height: 50%;
    display: grid;
    place-items: center;
    position: relative;
    top: 100px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0,0,.8);
`

export const Avatar = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    animation-direction: 1s;
    position: absolute;
    top: -100px;
    background-image: url( ${ ({img}) => img} );
    background-position: 18px -50px;
    background-size: cover;
    background-repeat: no-repeat;
    border: solid 10px rgb(66, 7, 138) ;
    &.active{
       
        box-shadow: 0 0 10px rgb(191, 64, 13  ,.7),
    0 0 20px rgb(66, 7, 138  ,.7),
    0 0 30px rgb(66, 7, 138  ,.7),
    0 0 40px rgb(66, 7, 138  ,.7),
    0 0 50px rgb(66, 7, 138  ,.7),
    0 0 60px rgb(66, 7, 138  ,.7),
    0 0 70px rgb(66, 7, 138 ,.7);
    }
   
`
export const Info =styled.div`
     width: 100%;
     height: 50%;
    
     position: absolute;
     bottom: 0;

`

export const Nombre = styled.div`

    h1{
        text-align: center;
        font-size: 40px;
        font-weight: 900;
    }
    p{
        text-align: center;
        font-size: 20px;
    }
 
`
export const Redes = styled.div`
    width: 100%;
    padding: 10px;
    
`
export const Ul = styled.ul`
    list-style: none;
    
    display: flex;
    gap: 10px;
    position: relative;
    li{
        position: relative;
       
        border-radius:50% ;
        height: 80px;
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(-100%);
        opacity: 0;
        transition-delay: calc(0.1s * var(--c));


        &.active{
            transform: translateX(0);
            opacity: 1;
        }
        ion-icon{
            font-size: 50px;
        }
    }

`