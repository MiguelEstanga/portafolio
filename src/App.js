import "./styles/global.css";
import Menu from "./components/Menu/Menu";
import AboutMe from "./layouts/AboutMe/AboutMe";
import Skills from "./layouts/skills/Skills";
import Portafolio from "./layouts/portafolio/Portafolio";
import Contact from "./layouts/Contact/Contact";
import Footer from "./layouts/footer/Footer";
import { getPortafolios } from "./services/PortafolioServices";
import { use, useEffect, useState } from "react";
import Empresas from "./layouts/empresas/Empresas";

function App() {
 

  useEffect(() => {
    console.log("hola XD");
  }, []);

  return (
    <>
      <Menu />
      <AboutMe />
      <Skills />
      <Portafolio  />
      <Empresas />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
