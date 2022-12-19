import styled, {css} from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 100vh;
  overflow: auto;
  overflow-block: initial;
  position: relative;
  
  &:focus-visible {
    outline: none;
  }
  @media screen and (max-width: 900px) {
    height: 100%;
  }
`;

export const ListContainer = styled.div`
  ${(props) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    top: ${'calc(50% - '+props.topHeight+'px)'};
    left: 0;
    box-sizing: border-box;
    padding-left: 70px;
    padding-right: 20px;
    overflow-x: hidden;

    @media screen and (max-width: 900px) {
      top: 0%;
      left: 0;
      padding-left: 0px;
      padding-right: 0px;
    }
  `}
`;
