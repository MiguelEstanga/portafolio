import "./css/sobremi.css"
import perfilpinture from "../image/miguel.jpg"
export default function Sobremi(){
    return(
        <>
               <section className="hero-info Container " id="hero-info">
                    <article>
                        <figcaption className="hero-info-img HeroFication" >
                            <img src={perfilpinture}></img>
                        </figcaption>
                    </article>
                    <article>
                        <div className="hero-info-title " >
                            Sobre Mi
                        </div>
                        <div className="hero-info-texto ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi consectetur nisi rem blanditiis, sit natus eveniet porro molestiae facilis quis, debitis impedit. Nihil ut, voluptatum quisquam ea consequatur quis!
                            Quis quia corporis ab quas dolore deserunt a nulla officiis, eos dolorem dolor in repellendus accusantium, sed consequuntur quo corrupti facere laboriosam ipsum minima odit doloremque magnam! Deserunt, maxime voluptatibus!
                            Quaerat voluptas non repellendus quidem expedita vitae quibusdam laboriosam accusantium quis impedit laborum, sequi blanditiis, iste quia consequuntur dicta consectetur ratione corrupti cumque mollitia placeat nam. Est officiis distinctio neque.
                            Quia magni perferendis, distinctio quis, sed libero eum labore at blanditiis reiciendis ipsam corrupti quasi autem facilis veniam temporibus eligendi nesciunt tempore, nisi saepe? Ducimus explicabo eum quia ad ullam?
                        </div>
                    </article>

                </section>
        </>
    )
}