import * as S from './styles';
import pokeball from '../../assets/pokeball.png';
import { ApologyContext } from '../../context/ApologyContext';
import { useContext } from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const { apologiesList} = useContext(ApologyContext);
  const [size, setSize] = useState(1);

  const bynumberRef = useRef();
  useEffect(() => {
    console.log('bynumberRef.current.offsetHeight ', bynumberRef.current.offsetHeight );
    setSize(bynumberRef.current.offsetHeight / 2);
  }, []);
  console.log('size', size);
  return (
    <S.Container size={size}>
      <div>
        <img src={pokeball}/> 
        <span>{apologiesList.length}</span>
      </div>
      <div ref={bynumberRef}>
        By Number
      </div>
    </S.Container>
  )
}