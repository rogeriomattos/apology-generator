import styled, {css} from "styled-components";
import diamondIcon from '../../../assets/diamond-fill.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  overflow: hidden;
  position: relative;

  >div:first-child {
    width: 100%;
    display: flex;
    background: #0a7bc9;
    padding: 0px 0px 0px 0px; 
    box-sizing: border-box;
    height: 90%;  
    &:before {
      content: "";
      background-image: url(${diamondIcon});
      position: absolute;
      width: 100%;
      height: 100vh;
      background-size: 25px;
      filter: opacity(0.08);
    }
  }
  
  @media screen and (max-width: 900px) {
    >div:first-child {
      flex-direction: column;
      gap: 10px;
      padding: 10px;
    }
  }
`;

export const BgInitial = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 5;
  background: #0a7bc9;
  
  &:before {
      content: "";
      background-image: url(${diamondIcon});
      position: absolute;
      width: 100%;
      height: 100vh;
      background-size: 25px;
      filter: opacity(0.08);
  }
  
  img {
    max-width: 100%;
    top: 50%;
    left: 50%;
    position: absolute;
    transition: transform 1s;
    
    cursor: pointer;

    @media screen and (max-width: 900px) {
      width: 100%;
    }

    ${props => props.initialPage?css`
      transform: translate(-50%, -50%) scale(1);
    `
    :css`
      transform: translate(-50%, -50%) scale(10);
    `}
  }
`;