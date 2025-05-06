import { useContext } from "react";
import { YoContext } from "../../context/YoContext";
import useTranslation from "../../hooks/useTranslation";
import { servidor } from "../../util/Helper";
import Ws from "../../components/social_botons/Ws";
import Linkedin from "../../components/social_botons/linkedin";
import CV from "../../components/social_botons/CV";
export default function AboutMe() {
  const { user } = useContext(YoContext);
  const { t } = useTranslation();

  return (
    <section id="quien-soy" className="mb-16 pd mxw">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left texto-dart">
        {t("about")["title"]}
      </h2>
      <div className="flex flex-col md:flex-row items-stretch gap-8">
        {" "}
        {/* Cambiamos items-center a items-stretch */}
        <div className="md:w-1/2 ">
          <img
            src={`${servidor}${user.foto}`}
            alt="Miguel Estanga"
            className="rounded-lg shadow-lg object-cover h-full"
          />
        </div>
        <div className="md:w-1/2 text-gray-300 flex flex-col justify-center">
          {" "}
          {/* Añadimos flex y justify-center */}
          <p className="mb-8">{t("about")["description1"]}</p>
          <div className="flex flex-row justify-center gap-4">
             <Ws/>
             <Linkedin/>
             <CV/>
          </div>
        </div>
      </div>
    </section>
  );
}
