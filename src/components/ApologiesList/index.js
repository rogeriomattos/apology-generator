import * as S from './styles';
import apologiesList from '../../utils/apologiesList';
import pokeball from '../../assets/pokeball.png';
import { useContext } from 'react';
import { ApologyContext } from '../../context/ApologyContext';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ApologyItem } from '../ApologyItem';
import { useState } from 'react';

export const ApologiesList = () => {
  const { setCurrentApology, apologyIndex } = useContext(ApologyContext);
  const listRef =  useRef();
  const containerRef =  useRef();
  const [topHeight, setTopHeight] = useState(0);

  const handleScroll = (e) => {
    console.log('e', e);
  }

  useEffect(() => {
    setTopHeight(
      listRef?.current?.childNodes[apologyIndex]?.offsetHeight / 2
    );
  }, []);

  useEffect(() => {
    if(listRef?.current?.childNodes){
      const { childNodes } = listRef.current;
      let autura = 0;
      childNodes.forEach((item, index) => {
        if(index < apologyIndex){
          autura += (item.offsetHeight + 8);
        }
      });
      containerRef?.current.scroll(0, autura);
    }
  }, [apologyIndex]);

  return (
    <S.Container ref={containerRef}>
      <S.ListContainer ref={listRef} topHeight={topHeight}>
        {apologiesList.map((item, index) =>(
          <ApologyItem
            key={'key' + index} 
            index={index}
            item={item}
          />
        ))}
      </S.ListContainer>
    </S.Container>
  )
}