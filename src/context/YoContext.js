import React, { createContext, useState, useEffect } from 'react';
import { yoMetadata } from "../services/PortafolioServices";

// 1. Crear el Contexto
export const YoContext = createContext({
  user: {},
  setUser: () => {},
});

// 2. Crear el Proveedor del Contexto
export const YoProvider = ({ children }) => {
  // 3. Definir el estado para el usuario
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true); // Estado para indicar si los datos se están cargando
  const [error, setError] = useState(null);   // Estado para manejar posibles errores

  // 4. Función asíncrona para obtener los datos
  const getData = async () => {
    setLoading(true); // Indica que la carga ha comenzado
    setError(null);   // Limpia cualquier error previo
    try {
      const data = await yoMetadata();
      console.log("Datos obtenidos:", data.yo);
      setUser(data.yo[0]);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
      setError(error); // Guarda el error en el estado
    } finally {
      setLoading(false); // Indica que la carga ha terminado (éxito o fallo)
    }
  };

  // 5. useEffect para cargar los datos al montar el componente
  useEffect(() => {
    getData();
    // El array de dependencias está vacío [], por lo que esto solo se ejecuta una vez
  }, []);

  // 6. Valores que se proporcionarán a los componentes consumidores
  const contextValue = {
    user,
    setUser,
    loading,
    error,
  };

  // 7. Renderizar el Proveedor con los valores y los hijos
  return (
    <YoContext.Provider value={contextValue}>
      {loading ? (
        <div>Cargando datos...</div>
      ) : error ? (
        <div>Error al cargar los datos: {error.message}</div>
      ) : (
        children
      )}
    </YoContext.Provider>
  );
};