import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Box, Container, Formulario, Texto } from './LikeStyled'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useContexto } from '../../context/Context'
import { Button } from '../Comentario/ComentarioStyled'
import {Cargando} from '../Cargando'
export const Like = () => {
    const [refres, setRefres] = useState(false)
    const { setActive, active } = useContexto()
    const [api, getApi] = useState([])
    const { register, formState: { errors }, handleSubmit } = useForm()
    const Form = useRef()
    useEffect(function () {
        fetch('https://servidormiguel.herokuapp.com/Email')
            .then(res => res.json())
            .then(res => getApi(res))
    }, [active , refres])

    function handleForm(obj) {
      
        setActive(true)
        const data = new FormData()
        data.append('Email', obj.Email)
        fetch("https://servidormiguel.herokuapp.com/Email", {
            method: "Post",
            body: data
        })
            .then(res => res.json())
            .then(res => console.log(res))
        Form.current.reset()

      

        setTimeout(function () {
            setActive(false)
        }, 1000)
    }


    


    return (
        <Container id='like'>
            {active? <Cargando/>:null}
            <Texto>
                <h2>
                    Gracias Por visitar mi sitio web porfavor dejame un like solo tienes
                    que poner tu correo y precionar el boton {":)"}
                </h2>
            </Texto>
            <Box>
                <Formulario>
                    <form onSubmit={handleSubmit(handleForm)} ref={Form}>
                        <div>
                            {errors.Email?.type === 'required' ? <div className='error'>Nanii!!! Campo requerido</div> : null}
                            {errors.Email?.type === 'minLength' && <div className='error'>necesitas minimo 4 letricas y porsupuesto tu arobaaa xd @ </div>}
                            <input type='email'
                                placeholder='Email@ :)'
                                {...register('Email', {
                                    required: true,
                                    minLength: 4
                                })}
                            />

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
                                <li key={data._id}>
                                    {data.Email}
                                </li>
                            ))
                        }


                    </ul>
                </div>

            </Box>
            <Button onClick={e => {
            setActive(!active)
            setTimeout(function(){
                setActive(false)
            },1000)
            }}>
                refrescar para ver tu like
           </Button>
        </Container>
    )
}
