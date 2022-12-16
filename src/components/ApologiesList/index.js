import * as S from './styles';
import apologiesList from '../../utils/apologiesList';
import pokeball from '../../assets/pokeball.png';
import { useContext } from 'react';
import { ApologyContext } from '../../context/ApologyContext';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ApologyItem } from '../ApologyItem';

export const ApologiesList = () => {
  const { setCurrentApology, apologyIndex } = useContext(ApologyContext);
  const listRef =  useRef();
  const containerRef =  useRef();
  

  const handleScroll = (e) => {
    console.log('e', e);
  }

  useEffect(() => {
    containerRef.current.addEventListener('scroll', handleScroll);
    console.log('listRef.current', containerRef.current);

    // return listRef.current.removeEventListener('scroll');
  }, []);

  useEffect(() => {
    if(listRef?.current?.childNodes){
      const { childNodes } = listRef.current;
      console.log('offsetHeight', childNodes[apologyIndex].offsetHeight);
    }
  }, [listRef])

  return (
    <S.Container ref={containerRef}>
      <S.ListContainer ref={listRef}>
        {apologiesList.map((item, index) =>(
          <ApologyItem
            index={index}
            item={item}
          />
        ))}
      </S.ListContainer>
    </S.Container>
  )
}