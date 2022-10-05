import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Box, Container, Formulario, Texto } from './LikeStyled'
import { useForm } from 'react-hook-form'

export const Like = () => {

    const [api, getApi] = useState([])
    const { register, formState: { errors }, handleSubmit } = useForm()

    useEffect(function () {
        fetch('http://localhost:4000/Email')
            .then(res => res.json())
            .then(res => getApi(res))
    }, [api])

    function handleForm(obj) {
        e.preventDefault()



        const data = new FormData()
        data.append('Email', obj.Email)
        fetch("http://localhost:4000/Email", {
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
                    Gracias Por visitar mi sitio web porfavor dejame un like solo tienes
                    que poner tu correo y precionar el boton {":)"}
                </h2>
            </Texto>
            <Box>
                <Formulario>
                    <form onSubmit={handleSubmit(handleForm)}>
                        <div>
                            <input type='email'
                                placeholder='Email@ :)'
                                {...register('Email', {
                                    required: true,
                                    minLength: 4
                                })}




                            />
                            {errors.Email?.type === 'required' && <div>Nanii!!! Campo requerido</div>}
                            {errors.Email?.type === 'minLength' && <div>necesitas minimo 4 letricas y porsupuesto tu arobaaa xd @ </div>}
                        </div>
                        <div>
                                
                        <button >Like</button>
                        </div>
                    </form>
                </Formulario>
            </Box>
            <Box >
                <div className="contador">
                    {api.length}
                </div>
            </Box>
            <Box>
                <div className="correos">
                    <ul>
                        {
                            api && api?.map(data => (
                                <li>
                                    {data.Email}
                                </li>
                            ))
                        }


                    </ul>
                </div>

            </Box>

        </Container>
    )
}
