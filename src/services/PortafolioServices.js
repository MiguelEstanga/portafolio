import { GET } from '../util/Api';

export const getPortafolios = async () => {
  
  const response = await fetch(GET.portafolios());
  const data = await response.json();
 
  return data;
};

export const yoMetadata = async () =>{
    const response = await fetch(GET.yo());
    const data = await response.json();
  
    return data ;
}