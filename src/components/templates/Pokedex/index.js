import * as S from './styles';
import { useApologies } from '../../../hooks/useApologies';
import { ApologiesList } from '../../ApologiesList';
import { MainApology } from '../../MainApology';
import { useState } from 'react';
import { Footer } from '../../Footer';
import { ApologyContext } from '../../../context/ApologyContext';
import { useContext } from 'react';

export const Pokedex = () => {
  const arrowUp = 38;
  const arrowDown = 40;
  const { setCurrentApology, apologyIndex, apologiesList } = useContext(ApologyContext);

  const handleKeyDown = (e) => {
    if(e.keyCode === arrowUp && apologyIndex !== 0) {
      const newIndex = apologyIndex - 1;
      setCurrentApology(apologiesList[newIndex], newIndex);
    }
    if(e.keyCode === arrowDown && apologyIndex !== apologiesList.length - 1){
      const newIndex = apologyIndex + 1;
      setCurrentApology(apologiesList[newIndex], newIndex);
    }
  }

  return (
    <S.Container role="button" tabIndex="0" onKeyDown={handleKeyDown}>
      <div>
        <MainApology/>
        <ApologiesList/>
      </div>
      <Footer />
    </S.Container>
  )
};