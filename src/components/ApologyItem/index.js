import * as S from './styles';
import pokeball from '../../assets/pokeball.png';
import { useContext } from 'react';
import { ApologyContext } from '../../context/ApologyContext';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const ApologyItem = ({item, index}) => {
  const { setCurrentApology, apologyIndex } = useContext(ApologyContext);
  const listItemRef = useRef();
  const [height, setHeight] = useState();
  useEffect(() => {
    if(index == apologyIndex)
      setHeight(listItemRef.current.offsetHeight / 2);
  }, [apologyIndex]);
  return (
    <S.ListItem ref={listItemRef} isCurrent={apologyIndex === index} test={height}>
      <S.ListItemContent key={'key' + index} onClick={() => setCurrentApology(item, index)}>
        <img alt="Festival Promessas" src={pokeball}/>
        <div>
          <span>{`${index < 9 ? '0':''}` + (index + 1)}</span>
          <span>
            {item}
          </span>
        </div>
      </S.ListItemContent>
    </S.ListItem>
  );
}