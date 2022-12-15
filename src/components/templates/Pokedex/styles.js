import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  
  >div:first-child {
    width: 100%;
    display: flex;
    background: #0a7bc9;
    padding: 20px;
    box-sizing: border-box;
    height: 90%;  
  }
  
  @media screen and (max-width: 900px) {
    >div:first-child {
      flex-direction: column;
      gap: 10px;
    }
  }
`;