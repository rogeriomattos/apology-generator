import * as S from './styles'; 
import pokeball from '../../assets/pokeball_white.png';
import { useEffect } from 'react';
import { useState } from 'react';

export const MainApology = ({ text }) => {
  const [rotate, setRotate] = useState(-20);
  
  useEffect(() => {
    setRotate(state => state + 10);
  }, [text]);

  return (
    <S.Container>
      <S.BorderEnphasy/>
      <S.BorderEnphasy/>
      <S.Content>
        <div>
          {text}
        </div>
        <S.Image src={pokeball} rotate={rotate}/>
      </S.Content>
      <S.BorderEnphasy/>
      <S.BorderEnphasy/>
    </S.Container>
  )
}