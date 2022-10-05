import styled from "styled-components"
const Imagen = styled.img`
    border-radius:360px;
`

export default function Avatar({url , size }){
    return (
        <figcaption>
            <Imagen width={ size }  src={url}/>
        </figcaption>
    )
}