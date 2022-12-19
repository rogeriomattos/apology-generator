import * as S from './styles';
import { IoCloseOutline, IoReturnUpForwardOutline, IoSearch } from 'react-icons/io5';
import { TfiReload } from 'react-icons/tfi';
import { Icon } from '../Icon';
import { useContext } from 'react';
import { ApologyContext } from '../../context/ApologyContext';

export const Footer = () => {
  const { setInitialPage } = useContext(ApologyContext);

  return (
    <S.Container>
      <Icon>
        <IoSearch />
      </Icon>
      <div>
        <Icon>
          <TfiReload />
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