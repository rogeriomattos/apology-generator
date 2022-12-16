import { useEffect, useState, useContext } from 'react';
import { ApologyContext } from '../../context/ApologyContext';
import apologiesList from '../../utils/apologiesList';
import pokeball from '../../assets/pokeball_white.png';
import * as S from './styles'; 

export const MainApology = () => {
  const [rotate, setRotate] = useState(0);
  const { currentApology, apologyIndex, lastIndex } = useContext(ApologyContext);

  useEffect(() => {
    setRotate(state => {
      if(apologyIndex > lastIndex) return state + ( 10 * (apologyIndex - lastIndex));
      if(apologyIndex < lastIndex) return state - ( 10 * (lastIndex - apologyIndex));
      return state;
    });
  }, [currentApology]);

  return (
    <S.Container>
      <S.BorderEnphasy/>
      <S.BorderEnphasy/>
      <S.Content>
        <div>
          {apologyIndex > 0 && 
          <S.PrevText>
            {apologiesList[apologyIndex - 1]}
          </S.PrevText>}
          <span>
            {currentApology}
          </span>
          {apologyIndex < apologiesList.length - 1  &&
          <S.NextText>
            {apologiesList[apologyIndex + 1]}
          </S.NextText>}
        </div>
        <S.Image src={pokeball} rotate={rotate}/>
      </S.Content>
      <S.BorderEnphasy/>
      <S.BorderEnphasy/>
    </S.Container>
  )
}