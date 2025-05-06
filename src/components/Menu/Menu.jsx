import "./menu.css";
import { useContext, useState } from "react"; // Importamos useState
import useTranslation from "../../hooks/useTranslation";
import {  LanguageContext } from "../../context/LanguageContext";

export default function Menu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto
  const {language , changeLanguage} = useContext(LanguageContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Función para cambiar el estado del menú
  };

  return (
    <header className="bg-gray-800 bg-opacity-50 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold text-white hover:text-gray-300 transition duration-300"
        >
          Miguel Estanga
        </a>
        <nav className={`md:flex md:justify-end md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}> {/* Condicionamos la clase 'hidden' */}
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"> {/* Cambiamos a flex-col para móvil */}
            <li>
              <a
                href="#quien-soy"
                className="hover:text-purple-300 transition duration-300"
                onClick={() => setIsOpen(false)} // Cerramos el menú al hacer clic en un enlace
              >
                {t("navbar")['home']}
              </a>
            </li>
            <li>
              <a
                href="#habilidades"
                className="hover:text-purple-300 transition duration-300"
                onClick={() => setIsOpen(false)} // Cerramos el menú al hacer clic en un enlace
              >
                {t("navbar")['about']}
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="hover:text-purple-300 transition duration-300"
                onClick={() => setIsOpen(false)} // Cerramos el menú al hacer clic en un enlace
              >
                {t("navbar")['projects']}
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-purple-300 transition duration-300"
                onClick={() => setIsOpen(false)} // Cerramos el menú al hacer clic en un enlace
              >
                {t("navbar")['contact']}
              </a>
            </li>
            <li>
               <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={language} className="bg-gray-800 rounded-lg p-2 text-white " >
                <option className="bg-gray-800 rounded-lg p-2 text-white" value="en">English</option>
                <option className="bg-gray-800 rounded-lg p-2 text-white" value="es">Español</option>
              </select>
            </li>
          </ul>
        </nav>
        <button
          id="hamburger-btn"
          className="md:hidden text-white focus:outline-none"
          aria-label="Menú de navegación"
          onClick={toggleMenu} // Asignamos la función al evento onClick
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}