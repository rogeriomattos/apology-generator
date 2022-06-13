import styled from 'styled-components';

export const Container = styled.div` 
  border: 4px #db7093 solid;
  border-radius: 4px;
  padding: 1rem;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
    min-height: 300px;
  }
`;