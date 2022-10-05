import styled from "styled-components";
export const Particulas = styled.ul`
   
    
    position: relative;
    width: 500px;
    height: 500px;
    margin: auto;
    display: flex;
    transform-style: preserve-3d;
    perspective: 2000px;
    li{
        
        border-radius: 50%;
        height: 70px;
        width: 70px;
        list-style: none;
        position: absolute;
        transform-origin:550px;
        bottom: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        transform: translateX(30px) ;
        transition-delay: calc( 0.1s * var(--cordenada) );
        -webkit-box-reflect: below 0 linear-gradient(transparent , transparent , rgba(0,0,0,.7));

        ion-icon{
            font-size: 50px;
            margin: center;
            cursor: pointer;
            background-color: var(--color);
            box-shadow: 0 0 10px rgba(0,0,0,.60);
            animation: giro infinite 10s;
            border-radius: 4px;
            box-shadow: 0 0 10px  #fff  ;
            
            &:hover{
                transform:translateZ(200px);
            }
            @keyframes giro {
            0%{
               transform: rotate(0);
            }   
            100%{
               transform: rotate(360deg);
            }

            
        }
      
        }
        &.active{
            transform: rotate(calc(-90deg / 5 * var(--cordenada)) )  ;
            @media (max-width:700px) {
                transform: translateY(calc(90px * var(--cordenada)))  translateX(50px);
            }
        }
        

        @media (max-width:700px) {
            transform-origin: center;
            transform: translateX(200px);
        }

    }
`
export const Imagen = styled.div` 
    position: relative;
     width: 100%;
     height: 100%;
    margin: auto;
    background-image: url( ${({ imagen }) => imagen}  );
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    transform: translateX(300px);
    opacity: 0;

    &.active{
        transform: translateX(0);
        opacity: 1;
    }
`

export const Texto = styled.div`
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .saludo{
        font-size: 50px;
        
       
        width: 100%;
        text-align: center;
        transform-style: preserve-3d;
        perspective: 2000px;
       -webkit-box-reflect: below 0 linear-gradient(transparent , transparent , rgba(0,0,0,.2));
        transition: all 1s;
        div{
            font-size: 50px;
            padding: 5px;
            
            text-align: center;
            display: inline-block;
            transition:  1s;
            opacity: 0;
            transform: translateY(-300px);
            
            transition-delay: calc(0.1s * var(--delay));
            animation-delay: calc(0.1s * var(--delay));

            &.active{
                transform: translateY(0);
                opacity: 1;
                animation: infinite texto 3s linear;
            
            
            }
           
            @media (max-width:700px) {
                font-size: 30px;
                width: 50px;
            }
            @keyframes texto {
                0% , 100%{
                   text-shadow: 0 0 10px #fff , 0 0 20px #fff , 0 0 30px #fff , 0 0 30px #fff;
                }
                50%{
                    text-shadow: 0 0 0;
                }
            }
        }
    }

    .boton{
        font-size: 30px;

        a{
           
            display: block;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            padding: 10px 20px;
            margin:40px 20px;
            color: black;
            background: #fff;

            &:hover{
              box-shadow:  0 0 10px #fff , 0 0 20px #fff , 0 0 30px #fff , 0 0 30px #fff;
            }
        }
    }
`