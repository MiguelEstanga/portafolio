import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const useObserver = (configuracion) => {
    const [entradas , setEntradas] = useState([])
    const [Elementos , setElementos] = useState([])
    function cambio(entradas){
        console.log(Elementos.length)
        setEntradas(entradas)
    }
    const Observador = new IntersectionObserver(cambio,configuracion)

    useEffect(function(){
        if(Elementos.length > 0 ){
            Elementos.forEach(elementos => Observador.observe(elementos))
        }

        return function(){
            if(Observador){
                Observador.disconnect()
            }
        }
    } ,[Elementos])

    return [entradas , setElementos , Observador]
}
