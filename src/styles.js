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
        width: 90%;
      }
    }
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 1rem;
  font-size: 1.5rem;
  a {
    text-decoration: none;
    font-weight: 700;
    color: #db7093;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.15rem;
  }
`;