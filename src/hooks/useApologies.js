
import { useState } from 'react';
import apologiesData from '../utils/apologiesList';

export const useApologies = () => {
  const [apologyIndex, setApologyIndex] = useState(0);
  const [apologiesList, setApologiesList] = useState(apologiesData);
  const [apologyText, setApologyText] = useState();

  const drawApology = () => {
    const index = Math.floor(Math.random() * apologiesList.length);
    
    setApologyText(apologiesList[index])
    if(apologiesList.length > 1){
      setApologyIndex(apologiesData.indexOf(apologiesList[index]))
      setApologiesList(apologiesList.filter((el, i) => i !== index))
    }
    else
      setApologiesList(apologiesData);
  } 

  return {
    drawApology,
    apologyIndex,
    currentApology: apologyText
  }
};