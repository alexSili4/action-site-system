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
  padding-top: ${({ theme }) => theme.spacing(60)};
  padding-bottom: ${({ theme }) => theme.spacing(60)};
  backdrop-filter: blur(20px);
  background-color: rgba(255, 241, 204, 0.14);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(50)};
    padding-bottom: ${({ theme }) => theme.spacing(50)};
  }
`;

export const Container = styled.div`
  position: relative;
  width: 343px;
  padding-top: ${({ theme }) => theme.spacing(28)};
  padding-bottom: ${({ theme }) => theme.spacing(16)};
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
  border-right: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 5px 5px 0px 0px #7a4ebd;
  background-image: linear-gradient(
    188.97deg,
    rgb(231, 59, 243) -34.635%,
    rgb(162, 130, 247) 98.22%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 901px;
    padding-top: ${({ theme }) => theme.spacing(18)};
    padding-bottom: ${({ theme }) => theme.spacing(37)};
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background-color: #ffeecc;
  box-shadow: 3px 3px 0px 0px #e8c47d,
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  & svg {
    color: #4e3811;
  }

  &:is(:hover, :focus) {
    box-shadow: 1px 1px 0px 0px #e8c47d,
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 24px;
    right: 24px;
  }
`;
