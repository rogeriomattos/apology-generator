import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 100vh;
  overflow: auto;
  overflow-block: initial;
  &:focus-visible {
    outline: none;
  }
  @media screen and (max-width: 900px) {
    height: 100%;
  }
`;

export const ListItem = styled.div`
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