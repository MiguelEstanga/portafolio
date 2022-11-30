import React from 'react'
import { useState } from 'react'

import { useEffect } from 'react'




import { Box, Carta, Container, Img } from './PortafolioStyled'


export const Portafolio = () => {
    const [data, setData] = useState([])
    useEffect(function () {
        fetch('https://servidormiguel.herokuapp.com/Portafolio')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])


    return (
        <Container id="proyectos">
            <div className="titulo">
                <h2>
                    Proyectos
                </h2>
                <p>
                    Aqui podras los proyectos que estare subiendo por este sitio web
                </p>
            </div>
            <Box>

                {

                    data && data?.map(data => (

                        <Carta key={data._id} >

                            <Img imagen={data.ruta}>
                            </Img>
                            <div className="info">
                                <h2>{data.nombre}</h2>
                                <ul>
                                    {
                                        data.Tecnologias.map(tec => (
                                            <li key={Math.random(Math.floor() * 20000 + 1)}>{tec}</li>
                                        ))
                                    }
                                </ul>
                                <div className='descripcion'>
                                    <div>
                                        Descripcion:
                                    </div>
                                    {data.descripcion}
                                </div>
                            </div>

                        </Carta>

                    ))
                }

            </Box>
        </Container>

    )
}
