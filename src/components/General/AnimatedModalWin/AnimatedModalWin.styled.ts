import styled from '@emotion/styled';

export const BackdropWrap = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.animatedModalWin};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing(7)};
  background-color: rgba(18, 20, 23, 0.5);
`;

export const Container = styled.div`
  position: relative;
  border-radius: 30px;
  background-color: #ffffff;
  padding: ${({ theme }) => theme.spacing(10)};
  overflow: hidden;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  border: 0;
  background-color: transparent;

  &:is(:hover, :focus) svg {
    color: blueviolet;
  }

  & svg {
    display: block;
    color: #121417;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
  }
`;
