import Avatar from "./avatar"
import avatarPerfil from "../image/miguel.jpg"
import "./css/curriculon.css"
export default function Personal() {
    return (
        <>
            <section className="Curriculon">
                <article className="Cperfil">
                    <div className="Cavatar">

                        <Avatar size="200rem" url={avatarPerfil} />
                    </div>
                    <div className="Cinfo">
                        <div className="Cnombre headmovil">

                            <p>Miguel Estanga</p>
                        </div>
                        <div className="Clocalizacion">
                            <b className="CTGeneral headmovil"> Localizacion </b>
                            <p className="Cvivienda info">
                                via la pica roraima edificio 4 apartamento 1 torre 1
                            </p>

                        </div>
                        <div className="Contacto">
                            <div className="Ctelefono info  ">
                                <ion-icon name="call-outline"></ion-icon>
                                0426 3821517
                            </div>
                            <div className="Ccorreo info">
                                <ion-icon name="mail-open-outline"></ion-icon>
                                miguelestanga12@gmail.com
                            </div>
                            <div className="Cfaceboock info">
                                <ion-icon name="logo-facebook"></ion-icon>
                                miguel estanga
                            </div>
                        </div>
                    </div>
                </article>
                <article className="Cbody">

                    <div className="bodysize TitulosBody">
                        <p>Miguel Estanga</p>
                    </div>
                    <div className="Ccarrera TitulosBody">
                        <p>Estuduante de Ingenieria de Sitemas</p>
                        <div className="Ccarrera">
                            Univercidad de oriente U.D.O
                        </div>
                    </div>

                    <div className="">
                        <div className="Ctitulosbody ">
                            Semestre
                        </div>
                        <div className="CEX">
                            <ion-icon name="glasses-outline"></ion-icon>
                            <span>7mo</span>
                        </div>
                    </div>

                    <div className="">
                        <p className="Ctitulosbody">
                            Experiencia Laboral
                        </p>
                        <div className="CEX">
                            <ion-icon name="accessibility-outline"></ion-icon>
                            <ul>
                                <li>Agencia de Loteria</li>
                                <li>Venta de Comercio Propio</li>
                            </ul>
                        </div>

                    </div>
                    <div className="Ctitulosbody">
                        Habilidades
                    </div>
                    <div className="Chabilidades">

                        <div className="Cpuntos">
                            <p>Vendedor</p>
                            <div className="Puntaje" style={{ '--pts': '80%' }}></div>
                        </div>
                        <div className="Cpuntos">
                            <p>Administracion De negocio propio</p>
                            <div className="Puntaje" style={{ '--pts': '60%' }}></div>
                        </div>
                        <div className="Cpuntos">
                            <p>Base de datos mysql</p>
                            <div className="Puntaje" style={{ "--pts": '50%' }}></div>
                        </div>
                        <div className="Cpuntos">
                            <p>Base de datos MongoDb</p>
                            <div className="Puntaje" style={{ "--pts": '40%' }} ></div>
                        </div>
                        <div className="Cpuntos">
                            <p>javascript</p>
                            <div className="Puntaje" style={{ "--pts": '60%' }} > </div>
                        </div>
                        <div className="Cpuntos">
                            <p>React</p>
                            <div className="Puntaje" style={{ "--pts": '50%' }} ></div>
                        </div>
                        <div className="Cpuntos">
                            <p>Node js</p>
                            <div className="Puntaje" style={{ "--pts": '40%' }} ></div>
                        </div>
                        <div className="Cpuntos">
                            <p>css</p>
                            <div className="Puntaje" style={{ "--pts": '30%' }} ></div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}