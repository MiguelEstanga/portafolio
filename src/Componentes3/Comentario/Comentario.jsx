import React from 'react'

import { useRef } from 'react'
import { useForm } from 'react-hook-form'

import { Texto } from '../Like/LikeStyled'
import { Container, Formulario } from './ComentarioStyled'
import { Sessiondecomentarios } from './Sessiondecomentarios'
import { useContexto } from '../../context/Context'
import { Cargando } from '../Cargando'

export const Comentario = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const form = useRef()
  
    const { setActive, active } = useContexto()
  


 
    function handleComentar(obj) {
        setActive(true)
        const data = new FormData()
        data.append('Email', obj.Email)
        data.append('Nombre', obj.Nombre);
        data.append("Comentario", obj.Comentario);
        data.append("file", obj.file[0]);

      
       

        fetch('https://servidormiguel.herokuapp.com/Comentario', {
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then(res => console.log(res))
        form.current.reset()
        setTimeout(function () {
            setActive(false)
        }, 1000)
    }

    return (
        <Container id='comentarios'>
            {active ? <Cargando /> : null}
            <Texto>
                <h2>
                    Dejame un comentario a ver que tal te parecio este sitio web {';)'}
                </h2>
            </Texto>

            <Formulario>
                <form onSubmit={handleSubmit(handleComentar)} ref={form} >
                    <div className='file'>
                        <label htmlFor="file">cargar Imagen</label>
                        <input type="file"
                            className='file'
                            placeholder='cargar imagen'
                            {
                            ...register("file", {
                                required: true
                            })
                            }

                        />
                        {errors.Email?.type === 'required' && <div className='error'>porfi coloca una fotico para poder ver si eres tu de verdad </div>}

                    </div>
                    <div>
                        <i>
                            <ion-icon name="mail-outline"></ion-icon>
                        </i>
                        <input type='email'
                            placeholder='email'

                            {...register('Email', {
                                required: true,
                                minLength: 3
                            })}
                        />
                        {errors.Email?.type === 'required' && <div className='error'>este campo es requerido</div>}
                        {errors.Email?.type === 'minLenght' && <div className='error'>minimo 3 caracteres</div>}
                    </div>

                    <div>
                        <i>
                            <ion-icon name="person-outline"></ion-icon>
                        </i>
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
                    <div>
                        <i>
                            <ion-icon name="pencil-outline"></ion-icon>
                        </i>
                        <textarea
                            row='20'
                            cols='20'
                            placeholder='comentar'
                            wrap='soft'
                            {...register('Comentario', {
                                required: true,
                                minLength: 3
                            })}
                        >
                        </textarea>

                        {errors.Comentario?.type === 'required' && <div className='error' >Pofa no me mandes un comentario basios</div>}
                        {errors.Comentario?.type === 'minLenght' && <div className='comentarioR'>necesitas minimo 3 letras para este campo</div>}
                    </div>
                   
                    <button  >Comentar</button>
                </form>
            </Formulario>
            <Sessiondecomentarios />

        </Container>
    )
}
