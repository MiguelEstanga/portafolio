import styled from "styled-components";

export const Container = styled.div`
 
    width: 100%;
  
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fff;

    padding: 10px;
`

export const Texto = styled.div`
 
    
    width: 90%;
   
   
   
    margin: 60px auto;
    margin-bottom: 60px;
    h2{
        color: #239B56;
        font-size: 40px;
        text-align: center;
        font-weight: 300;
        text-shadow: 0 0 10px #fff;
    }

   
  
`
export const Box = styled.div`
  
    width: 100%;
  
    
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
        color: black;
        font-size: 50px;
        margin-top: 30px;
    }

    .correos{
        width: 50%;
        height: 100%;
        box-shadow: 30px 10px 30px rgba(0,0,0,.90);
        ul{
            margin: auto;
            padding: 10px;
            
            height: 100%;
            
            li{
                text-align: center;
                list-style: none;
                font-size: 20px;
                margin-bottom: 20px;
                color:black;
            }
        }

        @media (max-width:800px) {
        width: 100%;
    }
    }
`
export const Formulario = styled.div`
    
    width: 100%;
    height: 200px;
    margin: 55px 0 ;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .capchat{
       
        display: flex ;
        justify-content: center;
        align-items: center;
    }
    div{
        display: flex;
        gap: 10px;
        
        width: 100%;
        height: 100%;
        margin: 10px 0;
        display: flex;
        flex-direction: column;

        .error{
            color: red;
            font-size: 20px;
            text-align: center;
        }
    }
    input{
        width: 500px;
        height: 100px;
       
       
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
      
        &:focus{
            
            outline : solid 1px #239B56;
        }

        
    }

    button{
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        border-radius: 5px;
        cursor: pointer;
    
        border: none;
        background:  #239B56;
        font-size: 40px;
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
