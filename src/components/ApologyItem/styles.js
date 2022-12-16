import styled, { css } from "styled-components";

export const ListItem = styled.div`
  ${(props) => props.isCurrent && css`
    background: #d7110e;
    padding: 6px 6px 6px 0;
    position: relative;
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
  border: 1px solid #000;

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
    box-sizing: border-box;

    span {
      overflow: hidden;
      &:last-child {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 900px) {
    gap: 8px;
  }
`;