import * as S from './styles';
import { useApologies } from '../../../hooks/useApologies';
import { ApologiesList } from '../../ApologiesList';
import { MainApology } from '../../MainApology';
import { useState } from 'react';
import { Footer } from '../../Footer';

export const Pokedex = () => {
  const [currentApology, setCurrentApology] =  useState('');

  return (
    <S.Container>
      <div>
        <MainApology text={currentApology}/>
        <ApologiesList onChange={setCurrentApology}/>
      </div>
      <Footer />
    </S.Container>
  )
};