import React from "react";
import * as S from './styles';

export const Icon = ({ children, onClick, className }) => {
  return (
    <S.Container onClick={onClick} className={className}>
      {children}
    </S.Container>
  );
} 