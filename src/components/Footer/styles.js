import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  background: #ccc;
  padding: 8px 16px;
  box-shadow: 0px 0px 5px 2px #000;
  background-image: linear-gradient(#3ab9a1, #2c8776, #11302b, #0f2621);
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  min-height: 10%;
  >div {
    display: flex;
    gap: 8px;
  }

  .random {
    border-radius: 40px;
    width: auto;
    padding: 0 8px;
    display: flex; 
    gap: 8px;

    @media screen and (max-width: 900px) {
      border-radius: 50%;
      width: 50px;
      padding: 0;
      display: flex; 
      gap: 0px;
      span {
        display: none;
      }
    }
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  div {
    width: 50px;
  }
  input {
    border-radius: 4px;
    max-width: 100%;
    min-width: 350px;
    font-size: 20px;
    padding: 0 8px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    input { 
      min-width: 0px;
      width: 65%;
    }
  }
`;