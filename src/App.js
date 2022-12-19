import { useEffect, useState } from 'react';
import { Pokedex } from './components/templates/Pokedex';
import { ApologyContext } from './context/ApologyContext';
import apologiesList from './utils/apologiesList';
import { useApologies } from './hooks/useApologies';

function App() {
  const [currentApology, setCurrentApology] = useState(apologiesList[0]);
  const [currentApologyIndex, setCurrentApologyIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [initialPage, setInitialPage] = useState(true);
  const { apologyIndex, drawApology, currentApology: randomApology} = useApologies();
  const [searchText, setSearchText] = useState('');

  const handleCurrentApology = (apology, index) => {
    setCurrentApology(apology);
    setLastIndex(currentApologyIndex);
    setCurrentApologyIndex(index);
  }

  const handleSetIndex = (index) => {
    handleCurrentApology(apologiesList[index], index);
  }

  useEffect(() => {
    if(randomApology)
      handleCurrentApology(randomApology,apologyIndex)
  }, [randomApology]);

  return (
    <ApologyContext.Provider value={{
      currentApology,
      apologyIndex: currentApologyIndex,
      lastIndex,
      setCurrentApology: handleCurrentApology,
      apologiesList,
      setIndex: handleSetIndex,
      initialPage,
      setInitialPage,
      drawApology,
      searchText,
      handleSearch: setSearchText
    }}>
      <Pokedex />
    </ApologyContext.Provider>
  );
}

export default App;
