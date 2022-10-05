
import reactpng from "../image/react.png"
import nodepng from "../image/node-js.png"
import mysqlpng from "../image/database.png"
import phppng from "../image/postgre.png"
import mongopng from "../image/server.png"
import "./css/tecnologias.css"
export default function Tecnologias(){
    return(
    <>
              <section className="card-section Container">
                    <div className="Tecnologias ">
                        <p>Tecnologias</p>
                    </div>
                    <div className="cardContainer">
                        <div className="card" style={{'--cardcolor':'#5DADE2'}}>
                            <div className="bodyicons ">
                                <img src={reactpng} />

                            </div>
                            <div className="cartiitle">
                                React
                            </div>
                            <div className="body ">
                                Para desarrolar app web utilizo el framewords de javascript
                                react el cual me es muy util para modularizar las parate de
                                la interfaz grafica y ejecutar eventos y renderizados de forma
                                veloz tengo aproximadamente 1 año utilizando y la experiencia
                                es fenomenal
                            </div>
                        </div>
                        <div className="card" style={{'--cardcolor':'#145A32'}}>
                            <div className="bodyicons ">
                                <img src={nodepng} />
                            </div>
                            <div className="cartiitle">
                                Node js
                            </div>
                            <div className="body ">
                                Para la parte del back end utilizo Node js y su
                                popular framewords express el cual me es muy util
                                para el entutamiento actualmento solo utilizo Node js
                                para levantar servidors y almacenar informacion en base
                                de datos tambien para hacer login, registros y autorizaciones
                                a travez de json web token
                            </div>
                        </div>
                        <div className="card" style={{'--cardcolor':'#148F77'}} >
                            <div className="bodyicons ">
                                <img src={mongopng} />
                            </div>
                            <div className="cartiitle">
                                Mongo Db
                            </div>
                            <div className="body">
                                Comence a utilizar mondoDb este año 2022 ya que su sintaxis
                                parecida a la javascript me facilito mucho a la hora de programar
                                y veloz y rapida
                            </div>
                        </div>
                        <div className="card" style={{'--cardcolor':'#1F618D'}}>
                            <div className="bodyicons ">
                                <img src={mysqlpng} />
                            </div>
                            <div className="cartiitle">
                                Mysql
                            </div>
                            <div className="body">
                                Tambien domino la popular base de datos Mysql o lenguaje
                                sql ya que soy estudiante de ing de sistemas y es la mas popular
                                entre las empresa almenos de mi pais
                            </div>
                        </div>
                        <div className="card" style={{'--cardcolor':'#072E7C'}}>
                            <div className="bodyicons ">
                                <img src={phppng} />
                            </div>
                            <div className="cartiitle">
                                PHP
                            </div>
                            <div className="body ">
                                PHP fue mi primer lenguaje de programacion almenos
                                el que me dedique a estudiar de forma autodidacta
                                lo utilizaba para gestionar peticiones con mysql
                                y aqunque ahora solo suelo utilizar Nodel js tambien le
                                dedico algo de tiempo
                            </div>
                        </div>
                   </div>     
                </section>
    </>
    )
}