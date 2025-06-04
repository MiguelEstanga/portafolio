export const url = "https://cb6d-86-38-32-20.ngrok-free.app/api/v1/";

export const enpoint = {
  usuarios: "usuarios",
  portafolios: "portafolio",
  yo: "yo",
  empresas: "empresas",
  cv: "CV"
};

// Función de utilidad para hacer fetch con el header de ngrok
export const fetchWithNgrok = async (url, options = {}) => {
  const defaultHeaders = {
    'ngrok-skip-browser-warning': 'true'
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {})
    }
  });
  return response;
};

export const GET = {
  usuarios: (endpoint) => `${url}${enpoint.usuarios}/${endpoint}`,
  portafolios: () => `${url}${enpoint.portafolios}`,
  yo: () => `${url}${enpoint.yo}`,
  empresas: () => `${url}${enpoint.empresas}`,
  cv: () => `${url}${enpoint.cv}`
}
