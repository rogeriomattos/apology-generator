import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  background: #ccc;
  padding: 8px 16px;
  height: 8%;
  box-shadow: 0px 0px 5px 2px #000;
  background-image: linear-gradient(#3ab9a1, #2c8776, #11302b, #0f2621);
  z-index: 1;
  >div {
    &:last-child {
      display: flex;
      gap: 8px;
    }
  }
`;