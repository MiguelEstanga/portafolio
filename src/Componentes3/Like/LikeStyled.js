import styled from "styled-components";

export const Container = styled.div`
 
    width: 100%;
    height: 130vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    

    padding: 10px;
`

export const Texto = styled.div`
 
    
    width: 90%;
   
   
   
    margin: 60px auto;
    margin-bottom: 60px;
    h2{
        font-size: 40px;
        text-align: center;
        font-weight: 300;
        text-shadow: 0 0 10px #fff;
    }

   
  
`
export const Box = styled.div`
  
    width: 100%;
    height: 40%;
    
    position: relative;
    top: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .contador{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 50px;
    }

    .correos{
        width: 100%;
        height: 100%;
        overflow-Y: scroll;
        ul{
            margin: auto;
            padding: 10px;
           
            height: 100%;
            
            li{
                text-align: center;
                list-style: none;
                font-size: 20px;
                margin-bottom: 20px;
            }
        }
    }
`
export const Formulario = styled.div`
    
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    div{
        
    }
    input{
        width: 500px;
        height: 100px;
        font-size: 20px;
        border:solid 1px #2874A6;
        padding: 10px;
        background: #000;

        &.error{
            border: solid 1px red;
        }
    }

    button{
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        border-radius: 5px;
        cursor: pointer;
    
        border: none;
        background: #2874A6;
        font-size: 20px;
        padding: 0;
        border-radius: 5px;
        &:hover{
            text-shadow: 0 0 10px #fff , 0 0 30px #fff;
        }
        @media (max-width:700px) {
            width:100%;
            height: 100%;
        }
    }

    @media (max-width:700px) {
            input, button{
                height: 100%;
                width: 100%;
            }
        }
`
