import { useState } from 'react';
import * as S from './styles';
import { Button } from './components/Button';
import { CardRandom } from './components/CardRandom';
import apologiesData from './utils/apologiesList';

function App() {
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

  return (
    <>
      <S.Container>
        <S.ApologiesLength>Total de desculpas: {apologiesData.length}</S.ApologiesLength>
        <CardRandom text={apologyText} apologyIndex={apologyIndex} />
        <Button onClick={drawApology}/>
        <S.Footer>
          Siga o Zé para ouvir mais promessas em <a target="_blank" href='https://www.twitch.tv/zerenacho' rel="noreferrer">twitch.tv/zerenacho</a>
        </S.Footer>
      </S.Container>
    </>
  );
}

export default App;
