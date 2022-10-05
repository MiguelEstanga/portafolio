import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 120vh;
    
    display: flex;
   align-items: center;
    padding: 5px;
   position: relative;
    flex-direction: column;
`

export const Formulario = styled.div`
  
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    
    form{
        div{
            .error{
                color: red;
                font-size: 30px;
            }
            .comentarioR{
                font-size: 30px;
            }
        }
    }
    
    input{
        width: 500px;
        height: 50px;
        font-size: 20px;
        border:solid 1px #2874A6;
        padding: 10px;
        background: #000;
        
        &.error{
            border: solid 1px red;
        }
    }
    textarea{
        height: 100px;
        width: 500px;
        font-size: 20px;
        border:solid 1px #2874A6;
        padding: 10px;
        background: #000;
        &.error{
            border: solid 1px red;
        }
    }
    button{
        width: 500px;
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
       
    }

    @media (max-width:700px) {
        button , input , textarea{
            width: 100%;
        
        }

        
    }
`
export const Comentarios = styled.div`
    width: 90%;
    height: 50%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    bottom: 10px;
    padding: 10px;
    .conten{
        border: solid 1px rgba(255,255,255,.30);
        padding: 5px;
        .nombre{
            border-bottom: solid 1px rgba(255,255,255,.10);
            font-size: 25px;
            text-align: center;
        }
        .comentario{
            font-size: 25px;
            text-align: center;
        }
    }
`