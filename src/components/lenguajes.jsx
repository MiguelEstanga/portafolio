export default function lenguajes(){
    return(
        <>
                <h2>Tu tambien puedes aprender</h2>
            <section className=" lenguajes gradiente">

                {
                    data && data.map(lenguajes => (
                        <div key={lenguajes.name} className="LenguajesR">
                            <img width="100%" height="100%" src={lenguajes.img} />
                            <div className="enlaces">
                                <a href={lenguajes.href} > {lenguajes.name} </a>
                            </div>
                        </div>

                    ))
                }


            </section>
        </>
    )
}