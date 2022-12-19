import * as S from './styles';
import apologiesList from '../../utils/apologiesList';
import { useContext } from 'react';
import { ApologyContext } from '../../context/ApologyContext';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ApologyItem } from '../ApologyItem';
import { useState } from 'react';

export const ApologiesList = () => {
  const { apologyIndex, setIndex, searchText } = useContext(ApologyContext);
  const listRef =  useRef();
  const containerRef =  useRef();
  const [topHeight, setTopHeight] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const isScroll = useRef();

  const handleScroll = (e) => {
    console.log('e',  e);
    console.log('isScroll',  isScroll.current);
    // e.preventDefault();
    // if(isScroll.current){
    //   const processDebounce = debounce(() => {
    //     if(lastScrollTop > e.target.scrollTop) setIndex(apologyIndex - 1);
    //     if(lastScrollTop < e.target.scrollTop) setIndex(apologyIndex + 1);
    //     setLastScrollTop(e.target.scrollTop);
    //   });
    //   processDebounce();
    // }else {
    //   isScroll.current = true;
    // }
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
      isScroll.current = false;
      containerRef?.current.scroll(0, autura);
    }
  }, [apologyIndex]);

  useEffect(() => {
    containerRef?.current.scroll(0, 0);
  }, [searchText]);
  
  const filter = (item) => {
    const index = apologiesList.indexOf(item) + 1;

    return item.toUpperCase().includes(searchText.toUpperCase()) || (index < 10?`0${index}`:index).toString().includes(searchText);
  }
  return (
    <S.Container ref={containerRef} onScroll={handleScroll}>
      <S.ListContainer ref={listRef} topHeight={topHeight}>
        {apologiesList.filter(filter).map((item, index) =>(
          <ApologyItem
            key={'key' + index} 
            index={apologiesList.indexOf(item)}
            item={item}
          />
        ))}
      </S.ListContainer>
    </S.Container>
  )
}