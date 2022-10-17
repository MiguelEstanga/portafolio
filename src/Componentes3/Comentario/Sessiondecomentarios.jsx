import React, { useEffect, useState } from 'react'
import { useContexto } from '../../context/Context'
import { Comentarios, Avatar, Data, Contenido, Button } from './ComentarioStyled'


export const Sessiondecomentarios = () => {
    const [data, setData] = useState([])
    const {active , setActive} = useContexto()
    useEffect(function () {
        fetch('https://servidormiguel.herokuapp.com/Comentarios')
            .then(res => res.json())
            .then(res => setData(res))
          
    }, [active] )
    return (
        <Comentarios>
            {
                data && data?.map(resul => (
                    <div key={resul._id}>
                            
                        <Data>
                            <div className="data">
                             
                                <Avatar img={resul.Avatar}>

                                </Avatar>
                                <Contenido>
                                    <div className='email'>
                                        {resul.Email}
                                    </div>

                                    <div className="nombre">
                                        {resul.Nombre}
                                    </div>

                                    <div className="comentario">
                                      <span>
                                         {resul.Comentario}
                                      </span>
                                    </div>
                                </Contenido>
                               
                            </div>



                        </Data>
                    </div>
                ))
            }
           <Button onClick={e => {
            setActive(!active)
            setTimeout(function(){
                setActive(false)
            },2000)
            }}>
                refrescar para ver tu comentario
           </Button>
        </Comentarios>
    )
}
