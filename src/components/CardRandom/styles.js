import styled from 'styled-components';

export const Container = styled.div`
  position: relative; 
  border: 4px #db7093 solid;
  border-radius: 4px;
  padding: 1.15rem 1rem;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  box-sizing: border-box;

  &.non-padding {
    padding: 0;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    font-size: 2rem;
    min-height: 300px;
    &.non-padding {
      min-height: auto;
    }
  }
`;

export const ApologyIndex = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 1rem;
`;