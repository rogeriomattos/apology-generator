import { useEffect, useState, useContext } from 'react';
import { ApologyContext } from '../../context/ApologyContext';
import pokeball from '../../assets/pokeball_white.png';
import * as S from './styles'; 

export const MainApology = () => {
  const [rotate, setRotate] = useState(-20);
  const { currentApology, apologyIndex } = useContext(ApologyContext);

  useEffect(() => {
    setRotate(state => state + 10);
  }, [currentApology]);

  return (
    <S.Container>
      <S.BorderEnphasy/>
      <S.BorderEnphasy/>
      <S.Content>
        <div>
          {currentApology}
        </div>
        <S.Image src={pokeball} rotate={rotate}/>
      </S.Content>
      <S.BorderEnphasy/>
      <S.BorderEnphasy/>
    </S.Container>
  )
}