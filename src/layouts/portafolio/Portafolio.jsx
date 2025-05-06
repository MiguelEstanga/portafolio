import PortafolioCart from "../../components/portaforlioCart/PortafolioCart";
import useTranslation from "../../hooks/useTranslation";
import { useEffect, useState } from "react";
import { getPortafolios } from "../../services/PortafolioServices";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
function Portafolio() {
  const [portafolios, setPortafolios] = useState([]);
  const [loading, setLoading] = useState(false);
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  const data = async () => {
    setLoading(true);
    try {
      const data = await getPortafolios();
      setPortafolios(data?.portafolios || []);
      console.log(portafolios);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("termino");
      setLoading(false);
    }
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <section id="proyectos" className="mb-16 mxw pd">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left texto-dart">
        {t("portfolio")["title"]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-300"></div>
          </div>
        ) : null}
        {portafolios.length > 0
          ? portafolios.map((proyecto, index) => (
              <PortafolioCart
                key={index}
                proyectoName={proyecto.proyectoName}
                proyectoDescription={ language === "es" ? proyecto.proyectoDescription_es : proyecto.proyectoDescription_ing }
                proyectoTecnologies={proyecto.proyectoTecnologies}
                proyectoLink={proyecto.proyectoLink}
                proyectoPreview={proyecto.proyectoPreview}
              />
            ))
          : null}
      </div>
    </section>
  );
}
export default Portafolio;
