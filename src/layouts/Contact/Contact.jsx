import useTranslation from "../../hooks/useTranslation";
import { EMAIL, PHONE } from "../../util/Helper";
import Ws from "../../components/social_botons/Ws";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contacto" className="mb-16 mxw pd">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left texto-dart">
        {t("contact")["title"]}
      </h2>
      <div className="bg-gray-800 rounded-lg p-6 shadow-md">
        <p className="text-gray-300 mb-4 text-center md:text-left" style={{lineHeight:"2.5"}}>
          ¡No dudes en ponerte en contacto conmigo! Puedes enviarme un correo
          electrónico a{" "}
          <a className="text-blue-400 hover:text-purple-300 transition duration-300">
            {EMAIL}
          </a>
          O puedes enviarme un whatsapp para respuesta inmediata {" "}
          <Ws/>
        </p>
      </div>
    </section>
  );
}
