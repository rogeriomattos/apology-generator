import { useState } from 'react';
import { Pokedex } from './components/templates/Pokedex';
import { ApologyContext } from './context/ApologyContext';
import apologiesList from './utils/apologiesList';

function App() {
  const [currentApology, setCurrentApology] = useState(apologiesList[0]);
  const [currentApologyIndex, setCurrentApologyIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  const handleCurrentApology = (apology, index) => {
    setCurrentApology(apology);
    setLastIndex(currentApologyIndex);
    setCurrentApologyIndex(index);
  }

  const handleSetIndex = (index) => {
    console.log('handleSetIndex', index);
    handleCurrentApology(apologiesList[index], index);
  }

  return (
    <ApologyContext.Provider value={{
      currentApology,
      apologyIndex: currentApologyIndex,
      lastIndex,
      setCurrentApology: handleCurrentApology,
      apologiesList,
      setIndex: handleSetIndex
    }}>
      <Pokedex />
    </ApologyContext.Provider>
  );
}

export default App;
