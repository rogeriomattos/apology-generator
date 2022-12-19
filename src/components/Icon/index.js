import React from "react";
import * as S from './styles';

export const Icon = ({ children, onClick }) => {
  return (
    <S.Container onClick={onClick}>
      {children}
    </S.Container>
  );
} 