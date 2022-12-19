import styled, { css } from "styled-components";

export const ListItem = styled.div`
  ${(props) => props.isCurrent && css`
    background: #d7110e;
    padding: 6px 6px 6px 0;
    position: relative;
    width: 100%;
    &:before {
      content: "";
      position: absolute; 
      top: 0;
      right: 100%;
      width: 0px;
      border-top: ${props.test + 'px solid transparent'};
      border-bottom: ${props.test + 'px solid transparent'}; 
      border-right: ${props.test + 'px solid #d7110e'}; 
    }
    &:after {
      content: "";
      position: absolute; 
      top: 0;
      left: 100%;
      width: 300px;
      height: 100%;
      background: #d7110e;
    }

    @media screen and (max-width: 900px) {
      padding: 0;
      background: transparent;
      &:before, &:after {
        display: none;
      }
    }
  `}
`;

export const ListItemContent = styled.div`
  position: relative;
  cursor: pointer;
  background: #fea13e;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 50px 12px 12px 50px;
  border: 3px solid #000;

  img {
    width: 35px;
  }

  >div {
    background: #e9ebe4;
    width: 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 12px;
    overflow: hidden;
    font-size: 20px;
    font-weight: 500;
    box-sizing: border-box;

    span {
      overflow: hidden;
      &:last-child {
        width: 80%;
      }
    }
  }

  @media screen and (max-width: 900px) {
    gap: 8px;
  }
`;