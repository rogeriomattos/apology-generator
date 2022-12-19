import * as S from './styles';
import { useApologies } from '../../../hooks/useApologies';
import { ApologiesList } from '../../ApologiesList';
import { MainApology } from '../../MainApology';
import { useState } from 'react';
import { Footer } from '../../Footer';
import { ApologyContext } from '../../../context/ApologyContext';
import { useContext } from 'react';
import dexBg from '../../../assets/Dex_bg_2.png';
import { useEffect } from 'react';

export const Pokedex = () => {
  const arrowUp = 38;
  const arrowDown = 40;
  const { setCurrentApology, apologyIndex, apologiesList, initialPage, setInitialPage } = useContext(ApologyContext);
  const [stylesIntialPage, setStylesIntialPage] = useState({});

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

  useEffect(() => {
    if(initialPage) {
      setStylesIntialPage({});
      return;
    }

    setTimeout(() => {
      setStylesIntialPage({
        zIndex: -1,
        overflow: 'hidden'
      });
    }, 700);
  }, [initialPage]);

  return (
    <>
      <S.BgInitial initialPage={initialPage} style={stylesIntialPage}>
        <img src={dexBg} onClick={() => setInitialPage(false)}/>
      </S.BgInitial>
      
      <S.Container role="button" tabIndex="0" onKeyDown={handleKeyDown}>
        <div>
          <MainApology/>
          <ApologiesList/>
        </div>
        <Footer />
      </S.Container>
    </>
  )
};