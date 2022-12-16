import * as S from './styles';
import apologiesList from '../../utils/apologiesList';
import { useContext } from 'react';
import { ApologyContext } from '../../context/ApologyContext';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ApologyItem } from '../ApologyItem';
import { useState } from 'react';

function debounce(func, timeout = 300){
  let timer;
  console.log('deba')
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export const ApologiesList = () => {
  const { apologyIndex, setIndex } = useContext(ApologyContext);
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

  return (
    <S.Container ref={containerRef} onScroll={handleScroll}>
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