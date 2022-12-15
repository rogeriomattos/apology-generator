import * as S from './styles';
import apologiesList from '../../utils/apologiesList';
import pokeball from '../../assets/pokeball.png';
import { useEffect } from 'react';

export const ApologiesList = ({
  onChange
}) => {

  useEffect(() => {
    onChange(apologiesList[0]);
  }, []);

  return (
    <S.Container role="button" tabIndex="0" onKeyDown={(e) => console.log('key', e)}>
      {apologiesList.map((item, index) =>(
        <S.ListItem key={'key' + index} onClick={() => onChange(item)}>
          <img alt="Festival Promessas" src={pokeball}/>
          <div>
            <span>{index + 1}</span>
            <span>
              {item}
            </span>
          </div>
        </S.ListItem>
      ))}
    </S.Container>
  )
}