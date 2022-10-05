

import "./css/inicio.2.css"
import "./css/querys.css"


import Habilidades from "./Habilidades"
import Personal from "./informacionP"
import Sobremi from "./sobremi"
import Tecnologias from "./tecnologias"
export default function Inicio() {

    return (
        <>

            <main className="Hero ">

                <section className="Hero-main Container" >


                    <div className="HeroTitulo">Portafolio web de <br />Miguel Estanga</div>
                    <div className="HeroTexto">
                        El siguiente sitio web es puramente informativo , se trata de un
                        portafolio web en el cual te hablara sobre mi y las tecnologias
                        que he aprendido a usa a lo largo de 5 años de estudio fuera de
                        mi carrera esto lo aprendo de forma autodidacta estudiando en plataformas
                        como youtube w3Scool y MDW las cuales son paginas orientadas al aprendisage
                        de desarrollo web

                    </div>
                    <div className="enlace">
                        <a className="Hero-enlace" href="#hero-info">!Empecemos!</a>

                    </div>

                </section>

                <Sobremi/>
               
                <Tecnologias/>
                <Personal/> 
            <Habilidades />
               
        </main>

        </>
    )
}