import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


import { Box, Carta, Container, Img } from './PortafolioStyled'


export const Portafolio = () => {
    const [api, setApi] = useState([])

    useEffect(function () {
        fetch('http://localhost:4000/portafolio')
            .then(json => json.json())
            .then(data => {
                setApi(data)
            })


    }, [])

    return (
        <Container id="Proyectos">
            <div className="titulo">
                <h2>
                    Proyectos
                </h2>
                <p>
                    Aqui podras los poroyectos que estare subiendo por este sitio wen
                </p>
            </div>
            <Box>

                {

                    api && api?.map(data => (

                        <Carta key={data._id} className="observado ">

                            <Img imagen={`http://localhost:4000${data.ruta}`}>
                            </Img>
                            <div className="info">
                                <h2>{data.nombre}</h2>
                                <ul>
                                    {
                                        data.Tecnologias.map(tec => (
                                            <li key={tec + Math.floor(Math.random() * 100)}>{tec}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Carta>

                    ))
                }

            </Box>
        </Container>

    )
}
