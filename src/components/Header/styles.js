import styled, {css} from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #313632;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  height: 8vh;
  box-sizing: border-box;
  >div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:first-child {
      padding-left: 16px;
      padding-top: 8px;
      padding-bottom: 8px;
      width: 100%;
    }
    &:last-child {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-right: 16px;
      padding-left: 16px;
      border-bottom: 1px solid #f72208;
      background:#f72208;
      position: relative;
      width: 70%;
      height: 100%;
      a {
        text-decoration: none;
        color: #fff;

        &:active {
          text-decoration: none;
          color: #fff;
        }
      }
      &:before {
        content: "";
        position: absolute; 
        top: 0;
        right: 100%;
        width: 0px;
        ${props => css`
          border-top: ${props.size + 'px solid transparent'};
          border-bottom: ${props.size + 'px solid #f72208'}; 
          border-right: ${props.size + 'px solid  #f72208'}; 
          border-left: ${props.size + 'px solid transparent'};
        `}
      }
      @media screen and (max-width: 900px) {
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 10px;
        row-gap: 0;
        padding-left: 0;
        width: 80%;
        span {
          width: 100%;
          font-size: 12px;
        }
      }
    }
    >img {
      width: 30px;
    }
  }
`;