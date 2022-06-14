import styled from 'styled-components';

export const ApologiesLength = styled.span`
  padding: 1rem 0;
  text-align: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
  text-align: center;

  div {
    &:nth-child(2){
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