import styled from "styled-components";

export const Container = styled.div`
    font-size: 40px;
    width: 50px;
    height: 50px;
    position: fixed;
    
    z-index: 200;
    cursor: pointer;
    left: 20px;
    top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1ms;
    &.active{
        text-shadow: 0 0 10px #fff , 0 0 20px #fff
                     , 0 0 30px #fff , 0 0 40px , 0 0 50px #fff;
    }
`
export const MenuNav = styled.ul`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 50;
    left: 0;
   background-color: rgba(0,0,0,.90);
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 50px;
   opacity: 0;
  
   transform: translateX(-4000px);

   &.active{
    opacity: 1;
    transform: translateX(0);
   }
   li{
        list-style: none;
        font-size: 40px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        text-align: center;
        cursor: pointer;
        -webkit-box-reflect: below 0 linear-gradient(transparent , transparent , rgba(0,0,0,.8));
        a{
           
          text-decoration: none;
        }

        &:hover{
            background: #fff;
        }

        &:hover a{
            color: black;
        }
   }
`