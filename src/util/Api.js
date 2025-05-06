export const url = "http://localhost:3003/api/v1/";

export const enpoint = {
  usuarios: "usuarios",
  portafolios: "portafolio",
  yo: "yo",
  empresas: "empresas",
  cv: "CV"
};

export const GET = {
  usuarios: (endpoint) => `${url}${enpoint.usuarios}/${endpoint}`,
  portafolios: () => `${url}${enpoint.portafolios}`,
  yo: () => `${url}${enpoint.yo}`,
  empresas: () => `${url}${enpoint.empresas}`,
  cv: () => `${url}${enpoint.cv}`
}
