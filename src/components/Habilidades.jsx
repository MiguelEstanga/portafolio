import "./css/habilidades.css"
import sigueme from "../image/sigueme.png"
export default function Habilidades() {
    return (
        <section className="Container h-container">
            <div className="ht">
                <div className="h-titulo">
                    Sigueme en mi redes Sociales 
                </div>
            </div>
            <div className="h-containerbox">
   
                <div className="box " style={{"--clr":"#85c1e9"}}>
                    <div className="h-conten">
                        <div className="icon">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </div>
                        <div className="redes">
                            <a href="https://www.facebook.com/miguel.estanga.520/">
                            <p>FACEBOOK</p>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="box" style={{"--clr":" #A569BD "}}>
                    <div className="h-conten">
                        <div className="icon">
                           
                            <ion-icon name="logo-instagram"></ion-icon>
                            

                        </div>
                        <div className="redes">
                            <p>INSAGRAN</p>
                        </div>
                    </div>
                </div>
                <div className="box " style={{"--clr":"#239B56"}}>
                    <div className="h-conten">
                        <div className="icon">
                        <ion-icon name="logo-whatsapp"></ion-icon>

                        </div>
                        <div className="redes">
                            <p>WHATSAPP</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}