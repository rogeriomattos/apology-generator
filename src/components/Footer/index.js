import * as S from './styles';
import { IoCloseOutline, IoReturnUpForwardOutline, IoSearch } from 'react-icons/io5';
import { TfiReload } from 'react-icons/tfi';
import { Icon } from '../Icon';
import { useContext, useState } from 'react';
import { ApologyContext } from '../../context/ApologyContext';

export const Footer = () => {
  const { setInitialPage, drawApology, handleSearch } = useContext(ApologyContext);
  const [openSearchText, setOpenSearchText] = useState(false);

  const togleSearch = () => {
    setOpenSearchText(state => !state);
    handleSearch('');
  }

  return (
    <S.Container>
      <S.SearchContainer>
        <Icon onClick={togleSearch}>
          <IoSearch />
        </Icon>
        {openSearchText &&
        <input type="text" autoFocus onChange={(e) => handleSearch(e.target.value)}/>}
      </S.SearchContainer>
      <div>
        <Icon onClick={drawApology} className="random">
          <TfiReload />
          <span>Aleatório</span>
        </Icon>
        <Icon onClick={() => setInitialPage(true)}>
          <IoCloseOutline />
        </Icon>
      </div>
      {/* <Icon>
        <IoReturnUpForwardOutline />
      </Icon> */}
    </S.Container>
  )
}