import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


import { Box, Container, ContainerHabilidades, Titulo } from './HabilidadesStyle'




export const Habilidades = () => {

    const [data , setData] = useState([])
    useEffect( function(){
       fetch('https://servidormiguel.herokuapp.com/Habilidades')
        .then(res => res.json())
        .then( res => setData(res))
    },[])

    
    return (
        <Container id="habilidades">
            <Titulo>
                <h2 color='#000'>
                    Habilidades
                </h2>
            </Titulo>
            <ContainerHabilidades>
                <div className="texto">
                    Algunas Tecnologias que utilizo en mis proyectos
                </div>
                <div className="BoxConten" >
                    {   
                        
                       data && data?.map(data => (
                            <Box key={data._id} 
                                 style={{'--delay' : `1`} } 
                                 className="observado"
                                 
                            >
                               
                                <div className="icon" style={{'--c' : `${data.color}`}}>
                                    <img src={data.Imagen} />
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
