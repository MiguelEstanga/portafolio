import React, { useEffect, useState } from 'react'
import { useContexto } from '../../context/Context'
import { Comentarios, Avatar, Data, Contenido, Button } from './ComentarioStyled'


export const Sessiondecomentarios = () => {
    const [data, setData] = useState([])
    const {active , setActive , setImagen, setmodal , imagen} = useContexto()
    useEffect(function () {
        fetch('https://servidormiguel.herokuapp.com/Comentarios')
            .then(res => res.json())
            .then(res => setData(res))
          
    }, [active] )
    function handleClick(img){
        setmodal(true)
        setImagen(img)
        
    }
    return (
        <Comentarios>
            {
                data && data?.map(resul => (
                    <div key={resul._id}>
                            
                        <Data>
                            <div className="data">
                             
                                <Avatar 
                                    img={resul.Avatar}
                                    onClick={e => handleClick(resul.Avatar)} 
                                >

                                </Avatar>
                                <Contenido>
                                    <div className='email' onClick={e => handleClick(resul.Avatar)}>
                                        {resul.Email}
                                    </div>

                                    <div className="nombre" onClick={ e => handleClick(resul.Avatar)}>
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
