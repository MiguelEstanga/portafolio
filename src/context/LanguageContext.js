import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext({
  language: "es",
  traslations: {},
  changeLanguage: () => {},
});

export const  LanguageProvider = ({children })=>
{
  const [language, setLanguage] = React.useState("es");
  const [traslations, setTraslations] = React.useState({});

  useEffect(()=>{
    import(`../locales/${language}/traslation.json`)
    .then((traslations)=>{
      setTraslations(traslations.default);
     
    });
  },[language]);
  
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('currentLanguage', newLanguage); // Opcional: guardar en localStorage
  };
  return (
    <LanguageContext.Provider value={{
      language,
      traslations,
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}