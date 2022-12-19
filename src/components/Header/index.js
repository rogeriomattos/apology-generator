import * as S from './styles';
import pokeball from '../../assets/pokeball.png';
import { ApologyContext } from '../../context/ApologyContext';
import { useContext } from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { FaYoutube, FaTwitch, FaTwitter, FaTiktok } from 'react-icons/fa';


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
          <span>Siga o Zé nas redes sociais:</span>
          <a href="https://www.youtube.com/@ZeRenacho" title="Youtube @ZeRenacho" alt="Youtube @ZeRenacho" target="_blank">
            <FaYoutube /> 
          </a>
          <a href="https://www.twitch.tv/zerenacho" title="Twitch zerenacho" alt="Twitch zerenacho" target="_blank">
            <FaTwitch />
          </a>
          <a href="https://www.tiktok.com/@zerenacho" title="TikTok @ZeRenacho" alt="TikTok @ZeRenacho" target="_blank">
            <FaTiktok />
          </a>
          <a href="https://twitter.com/ZeRenacho" title="Twitter ZeRenacho" alt="Twitter ZeRenacho" target="_blank">
            <FaTwitter />
          </a>
      </div>
    </S.Container>
  )
}