import styled, {css} from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 0;
  overflow: hidden;
  @media screen and (max-width: 900px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  overflow: hidden;
  background: #fff;
  height: 100%;
  width: 70%;
  box-sizing: border-box;
  border: 3px solid #000;
  border-radius: 10%/50%;
  background-image: linear-gradient(#a4d4ec, #bbdff1, #FFF, #fff, #fff, #fff, #FFF, #bbdff1, #a4d4ec);

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding: 0 30px;
  text-align: center;
  div {
    overflow: hidden;
    z-index:2;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
    font-size: 24px;
    width: 90%;
  }
`;


export const Image = styled.img`
    position: absolute;
    height: 300px;
    top: 50%;
    left: -5%;
    opacity: 0.5;
    transform: translate(-5%,-50%)${props => css`rotate(${props.rotate+'deg'})`};
    transition: transform .3s; 
    z-index:1;

    @media screen and (max-width: 900px) {
      height: 150px;
      left: -20%;
    }
`;

export const BorderEnphasy = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;

  &:first-child {
    top: 20%;
    left: 12%;
    border-left: 10px solid red;
    border-top: 10px solid red;
  }
  
  &:nth-child(2) {
    top: 20%;
    right: 12%;
    border-right: 10px solid red;
    border-top: 10px solid red;
  }

  &:nth-child(4) {
    bottom: 20%;
    left: 12%;
    border-left: 10px solid red;
    border-bottom: 10px solid red;
  }
  &:last-child {
    bottom: 20%;
    right: 12%;
    border-right: 10px solid red;
    border-bottom: 10px solid red;
  }

  @media screen and (max-width: 900px) {
    &:first-child {
      top: 10%;
      left: 0%;
    }
    
    &:nth-child(2) {
      top: 10%;
      right: 0%;
    }

    &:nth-child(4) {
      bottom: 10%;
      left: 0%;
    }
    &:last-child {
      bottom: 10%;
      right: 0%;
    }
  }
`;

export const PrevText = styled.span`
  position: absolute;
  bottom: 90%;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: .4;
`;
export const NextText = styled.span`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: .4;
`;