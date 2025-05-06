import useTranslation from "../../hooks/useTranslation";
import { useState, useEffect, useRef } from "react";
import "./portafolio.css";
function PortafolioCart({
  proyectoName,
  proyectoDescription,
  proyectoTecnologies,
  proyectoLink,
  proyectoPreview,
}) {
  const servidor = "http://localhost:3003/images/";
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(cardRef.current);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div
        ref={cardRef}
        onClick={handleCardClick}
        className={`portafolio-cart hover bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden cursor-pointer ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionProperty: "opacity", transitionDuration: "0.5s" }}
      >
        <img
          src={`${servidor}${proyectoPreview}`}
          alt={proyectoName}
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-purple-300">
            {proyectoName}
          </h3>
          <p className="text-gray-300 mb-4">{proyectoDescription}</p>
          <h3 className="text-lg font-semibold mb-2 text-purple-300">
            {t("portfolio")["technologies"]}
          </h3>
          {proyectoTecnologies.length > 0 ? (
            <ul>
              {proyectoTecnologies.map((tecnology, index) => (
                <li key={tecnology} className="text-gray-400">
                  {tecnology}
                </li>
              ))}
            </ul>
          ) : null}
          {proyectoLink === "no" || proyectoLink === "null" ? (
            <p
              style={{
                fontSize: "12px",
                marginTop: "20px",
                color: "gray",
              }}
              className="text-gray-300 mb-4"
            >
              Proyecto privado no tiene sitio web
            </p>
          ) : (
            <a
              style={{ marginTop: "20px" }}
              href={proyectoLink ? proyectoLink : "#"}
              className="text-blue-400 hover:text-purple-300 transition duration-300 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("portfolio")["link"]}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04 1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.08-1.04l3.158-2.985H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div
          className={`modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center active`}
          onClick={handleCloseModal}
        >
          <div
            className={`modal-content bg-gray-900 rounded-lg shadow-lg p-8 max-w-3xl w-full relative active ${
              isDesktop ? "modal-desktop" : "modal-mobile"
            }`}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {isDesktop ? (
              <div className="flex gap-8">
                <img
                  src={`${servidor}${proyectoPreview}`}
                  alt={proyectoName}
                  className="w-1/2 h-auto object-contain rounded-md"
                />
                <div className="w-1/2">
                  <h2 className="text-2xl font-semibold mb-3 text-purple-300">
                    {proyectoName}
                  </h2>
                  <p className="text-gray-300 mb-4">{proyectoDescription}</p>
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">
                    {t("portfolio")["technologies"]}
                  </h3>
                  {proyectoTecnologies.length > 0 && (
                    <ul className="mb-4">
                      {proyectoTecnologies.map((tecnology, index) => (
                        <li key={tecnology} className="text-gray-400">
                          {tecnology}
                        </li>
                      ))}
                    </ul>
                  )}
                  {proyectoLink === "no" || proyectoLink === "null" ? (
                    <p className="text-gray-300">
                      Proyecto privado no tiene sitio web
                    </p>
                  ) : (
                    <a
                      href={proyectoLink ? proyectoLink : "#"}
                      className="text-blue-400 hover:text-purple-300 transition duration-300 inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("portfolio")["link"]}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04 1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.08-1.04l3.158-2.985H3.75a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <>
                <img
                  src={`${servidor}${proyectoPreview}`}
                  alt={proyectoName}
                  className="w-full h-auto object-contain mb-4 rounded-md"
                />
                <h2 className="text-2xl font-semibold mb-3 text-purple-300">
                  {proyectoName}
                </h2>
                <p className="text-gray-300 mb-4">{proyectoDescription}</p>
                <h3 className="text-lg font-semibold mb-2 text-purple-300">
                  {t("portfolio")["technologies"]}
                </h3>
                {proyectoTecnologies.length > 0 && (
                  <ul className="mb-4">
                    {proyectoTecnologies.map((tecnology, index) => (
                      <li key={tecnology} className="text-gray-400">
                        {tecnology}
                      </li>
                    ))}
                  </ul>
                )}
                {proyectoLink === "no" || proyectoLink === "null" ? (
                  <p className="text-gray-300">
                    Proyecto privado no tiene sitio web
                  </p>
                ) : (
                  <a
                    href={proyectoLink ? proyectoLink : "#"}
                    className="text-blue-400 hover:text-purple-300 transition duration-300 inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("portfolio")["link"]}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04 1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.08-1.04l3.158-2.985H3.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default PortafolioCart;
