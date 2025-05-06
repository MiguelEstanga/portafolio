import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const useTranslation = () => {
  const { traslations } = useContext(LanguageContext);
 
  const t = (key) => {
    return traslations[key] || key; // Devuelve la traducción o la clave si no se encuentra
  };

  return { t };
};

export default useTranslation;