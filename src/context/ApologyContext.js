import { createContext } from 'react';
import apologiesList from '../utils/apologiesList';

export const ApologyContext = createContext({
  currentApology: apologiesList[0],
  apologyIndex: 0,
  lastIndex: 0,
  setCurrentApology: (apology, index) => {},
  apologiesList
});