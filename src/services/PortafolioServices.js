import { GET, fetchWithNgrok } from '../util/Api';

export const getPortafolios = async () => {
  const response = await fetchWithNgrok(GET.portafolios());
  const data = await response.json();
  return data;
};

export const yoMetadata = async () => {
  const response = await fetchWithNgrok(GET.yo());
  const data = await response.json();
  return data;
}