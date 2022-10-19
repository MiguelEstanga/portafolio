import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    color: #000;
    background: #fff;
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
    gap: 20px;
    padding: 10px;
    

  
        div{
            position: relative;
            i{
         
            position: absolute;
            ion-icon{
                color: #239B56;
                font-size: 40px;
                font-weight: 100;
            }
             }
            margin: 5px 0;
            .error{
                color: red;
                font-size: 30px;
            }
            .comentarioR{
                font-size: 30px;
            }
        }
    
    input , textarea{
        width: 500px;
        height: 50px;
       
       
        border:none;
        padding: 0 50px;
        border-radius: 5px;
        font   : 1.4em/1.5em "handwriting", cursive, sans-serif;
        box-shadow: 0 0 10px rgba(0,0,0,.40);
        color: black;
        font-weight: 900;
        font-family: "Font Awesone 5 free";
        
        &:focus{
            
            outline : solid 1px #239B56;
        }

        
      
    }
    input[type="file"] {
        cursor: inherit;
    display: block;
    font-size: 999px;
    filter: alpha(opacity=0);
    min-height: 100%;
    min-width: 50%;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
    cursor: pointer;
    }
    label[for="file"] {
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        background-color: #106BA0;
        display: inline-block;
        transition: all .5s;
        cursor: pointer;
        padding: 15px 40px !important;
        text-transform: uppercase;
        width: 100%;
        text-align: center;
        margin: auto;
    }
    textarea{
        height:100px;
     
    }
    button{
        width: 500px;
        height: 100px;
        box-sizing: border-box;
        border-radius: 5px;
        cursor: pointer;
    
        border: none;
        background: #239B56;
        font-size: 50px;
        padding: 0;
        border-radius: 5px;
        &:hover{
            text-shadow: 0 0 10px #fff , 0 0 60px #fff;
            box-shadow:  0 0 10px #239B56 , 0 0 60px #239B56;
        }
       
    }

    @media (max-width:700px) {
        button , input , textarea{
            width: 100%;
        
        }

        
    }
`
export const Comentarios = styled.div`
    width:80%;
    box-shadow: 30px 10px 30px rgba(0,0,0,.90);
    color: #000;
    border-radius: 5px;
    padding: 10px;
    
    
    
    @media (max-width:800px) {
        width: 100%;
    }
`
export const Button = styled.button`
         border: none;
        font-size: 20px;
        color: #fff;
        border-radius: 5px;
        padding: 10px;
        background: #000;
        cursor: pointer;
        box-shadow: 10px 10px 10px rgba(0,0,0,.90);
        &:hover{
            box-shadow: 0px 0px 10px rgba(0,0,0,.90);
        }
`
export const Avatar = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100px;
    border-radius: 50%;
    background-image: url( ${({img}) => img } );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &:hover{
        transform: scale(1.1);
    }
`
export const Data = styled.div`
    border: solid 1px;
    display: flex;
    width: 100%;
   
    gap: 10px;
    &:hover{
        box-shadow: 10px 1px 20px rgba(0,0,0,.90);
    }

    .data{
        margin: 10px 0;
        display: grid;
        grid-template-columns: 10% 90%;
        gap: 3px;
        width: 100%;

        padding: 5px;
      
        color: #000;
    }
`
export const Contenido = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 10px;
    .email , .nombre , .comentario{
        color: #000;
        font-weight: 700;
        display: grid;
       
    }
    .email , .nombre{
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }

    .comentario{

            color: #000;
            font-weight: 400;
            width: 100%;
            display: flex;
        
            span{
                color: #000;
                padding: 10px;
                text-align: justify;
            }
    }
`
