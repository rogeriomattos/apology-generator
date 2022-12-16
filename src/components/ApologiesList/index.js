import * as S from './styles';
import apologiesList from '../../utils/apologiesList';
import pokeball from '../../assets/pokeball.png';
import { useContext } from 'react';
import { ApologyContext } from '../../context/ApologyContext';

export const ApologiesList = () => {
  const { setCurrentApology } = useContext(ApologyContext);

  return (
    <S.Container role="button" tabIndex="0" onKeyDown={(e) => console.log('key', e)}>
      {apologiesList.map((item, index) =>(
        <S.ListItem key={'key' + index} onClick={() => setCurrentApology(item, index)}>
          <img alt="Festival Promessas" src={pokeball}/>
          <div>
            <span>{`${index < 9 ? '0':''}` + (index + 1)}</span>
            <span>
              {item}
            </span>
          </div>
        </S.ListItem>
      ))}
    </S.Container>
  )
}