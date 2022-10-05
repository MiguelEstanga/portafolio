import { useReducer } from "react"
export default function Reducer(estado, accion){
    const {tipo , contenido} = accion

    switch(tipo){
        case 'Cargando':return{
                 ...estado,
                estatus:"Cargado"
        }

        case 'Confirmada':return{
            ...estado,
            estatus:contenido.data
        }
        case "Error": return{
            ...estado,
            estatus:contenido.error
        }
    }
}

export function useApi(){
    const inicialatate = {
        estatus:"Cargando"
    }


    const [state , dispach ] = useReducer( Reducer , inicialatate)

    return  {state , dispach}
}