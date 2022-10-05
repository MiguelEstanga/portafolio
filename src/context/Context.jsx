
import { useContext, useReducer } from "react";
import { createContext, useState } from "react";
import { Reducer , InicialState } from "./Reducer";
const ModalContext = createContext()

export const useModal = ()=>{
    return useContext(ModalContext)
} 
export default function Contexto({children}){
  
    

    const [redu , dispach] = useReducer(Reducer , InicialState)
    const [render, setrender] = useState(false)
    const funciones = {
       
        redu,
        dispach,
        render,
        setrender
    }
    return(
        <ModalContext.Provider value={funciones}>
            {children}
        </ModalContext.Provider>
    )
} 

export {ModalContext}