import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { Texto } from '../Like/LikeStyled'
import { Comentarios, Container, Formulario } from './ComentarioStyled'

export const Comentario = () => {
    const [data, setData] = useState([])
    const { register, formState: { errors }, handleSubmit } = useForm()

    useEffect(function () {
        fetch('http://localhost:4000/Comentarios')
            .then(res => res.json())
            .then(res => setData(res))
    }, [data])

    function handleComentar(obj) {
        console.log(obj)


        const data = new FormData()
        data.append('Email', obj.Email)
        data.append('Nombre', obj.Nombre);
        data.append("Comentario", obj.Comentario);

        fetch('http://localhost:4000/Comentario', {
            method: "Post",
            body: data
        })
            .then(res => res.json())
            .then(res => console.log(res))

    }


    return (
        <Container>
            <Texto>
                <h2>
                    Dejame un comentario a ver que tal te parecio este sitio web {';)'}
                </h2>
            </Texto>

            <Formulario>
                <form onSubmit={handleSubmit(handleComentar)}>
                    <div>
                        <input type='email'
                            placeholder='email'

                            {...register('Email', {
                                required: true,
                                minLength: 3
                            })}
                        />
                        {errors.Email?.type === 'required' && <div  className='error'>este campo es requerido</div>}
                        {errors.Email?.type === 'minLenght' && <div className='error'>minimo 3 caracteres</div>}
                    </div>

                    <div>
                        <input
                            type='Text'
                            placeholder='nombre'
                            {...register('Nombre', {
                                required: true,
                                minLength: 3
                            })}


                        />
                        {errors.Nombre?.type === 'required' && <div className='error'>este campo es requerido</div>}
                        {errors.Nombre?.type === 'minLenght' && <div className='error'>minimo 3 caracteres</div>}
                    </div>

                   
                    <textarea
                        row='50'
                        cols='50'
                        placeholder='comentar'
                        {...register('Comentario', {
                            required: true,
                            minLength: 3
                        })}
                    >
                    </textarea><br />
                    {errors.Comentario?.type === 'required' && <div className='error' >Pofa no me mandes un comentario basio</div>}
                    {errors.Comentario?.type === 'minLenght' && <div className='comentarioR'>necesitas minimo 3 letras para este campo</div>}
                    <button >Comentar</button>
                </form>
            </Formulario>
            <Comentarios>
                {
                    data && data?.map(resul => (
                        <div className="conten">
                            <div className="nombre">{resul.Nombre} <br /> {resul.Email} </div>
                            <div className="comentario">
                                {resul.Comentario}
                            </div>
                        </div>

                    ))
                }

            </Comentarios>

        </Container>
    )
}
