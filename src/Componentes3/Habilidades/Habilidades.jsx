import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Data } from './Data'
import { Box, Container, ContainerHabilidades, Titulo } from './HabilidadesStyle'




export const Habilidades = () => {
    const [habilidades , setHabilidades] = useState([])

    useEffect(function(){
        fetch('http://localhost:4000/Habilidades')
            .then(res => res.json())
            .then(res => setHabilidades(res))
    },[])
    return (
        <Container id="Habilidades">
            <Titulo>
                <h2>
                    Habilidades
                </h2>
            </Titulo>
            <ContainerHabilidades>
                <div className="texto">
                    Algunas Tecnologias que utilizo en mis proyectos
                </div>
                <div className="BoxConten" >
                    {   
                        
                        habilidades && habilidades?.map(data => (
                            <Box key={data._id} 
                                 style={{'--delay' : `${data.delay}`} } 
                                 className="observado"
                                 color={data.color} 
                            >
                               
                                <div className="icon" style={{'--c' : `${data.color}`}}>
                                    <img src={`http://localhost:4000${data.ruta}`} />
                                </div>
                                <div className="nombre">
                                    {data.nombre}
                                </div>
                            </Box>
                        ))
                    }
                   
                   
                </div>

            </ContainerHabilidades>
        </Container>
    )
}
