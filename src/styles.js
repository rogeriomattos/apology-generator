import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
  text-align: center;

  div {
    &:first-child{
      width: 50%;
      @media screen and (max-width: 600px) {
        width: 80%;
      }
    }
  }
`;