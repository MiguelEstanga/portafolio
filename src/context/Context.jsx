
import { useContext } from "react";
import { createContext, useState } from "react";

const Global = createContext()

export const useContexto = ()=>{
    return useContext(Global)
} 

export default function Contexto({children}){
    const [active , setActive] = useState(false)
    const values ={
        active,
        setActive

    }
    return(
        <Global.Provider value={values}>
            {children}
        </Global.Provider>
    )
} 

export {Global}