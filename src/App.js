import { useState } from 'react';
import * as S from './styles';
import { Button } from './components/Button';
import { CardRandom } from './components/CardRandom';
import apologiesData from './utils/apologiesList';

function App() {
  const [apologiesList, setApologiesList] = useState(apologiesData);
  const [apologyText, setApologyText] = useState();

  const drawApology = () => {
    const index = Math.floor(Math.random() * apologiesList.length);
    
    setApologyText(apologiesList[index])
    if(apologiesList.length > 1)
      setApologiesList(apologiesList.filter((el, i) => i !== index))
    else
      setApologiesList(apologiesData);
  } 

  return (
    <S.Container>
      <CardRandom text={apologyText} />
      <Button onClick={drawApology}/>
    </S.Container>
  );
}

export default App;
