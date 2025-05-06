import useTranslation from "../../hooks/useTranslation";
import { GET } from "../../util/Api";
import { servidor } from "../../util/Helper";
import "./empresa.css";
import { useEffect, useState } from "react";

export default function Empresas() {
  const { t } = useTranslation();
  const [empresas, setEmpresas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        setLoading(true);
        const response = await fetch(GET.empresas());
        const data = await response.json();
        setEmpresas(data.empresas);
      } catch (error) {
        console.error("Error al obtener empresas", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmpresas();
  }, []);
  return (
    <section id="contacto" className="mb-16 mxw pd">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left texto-dart">
        {t("company")["title"]}
      </h2>
      <div className="bg-gray-800 rounded-lg p-8 shadow-md flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 md:p-0 content">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <>
              {empresas.map((empresa, index) => (
                <a
                  key={index}
                  href={empresa.link}
                  target="_blank"
                >
                  <div  className="empresas-card">
                    <img
                      src={`${servidor}${empresa.foto}`}
                      alt={empresa.nombre}
                      className="empresas-image"
                    />
                  </div>
                </a>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
