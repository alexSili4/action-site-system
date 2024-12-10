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
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  backdrop-filter: blur(20px);
  background-color: rgba(255, 241, 204, 0.14);

  & > div {
    width: calc(100% - 16px - 16px);

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      width: 566px;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  padding: ${({ theme: { spacing } }) => `${spacing(12)} ${spacing(5)}`};
  border-radius: 16px;
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
  border-right: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 5px 5px 0px 0px rgb(232, 196, 125);
  background-color: #ffeecc;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 566px;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(12)} ${spacing(16)} ${spacing(14)}`};
  }
`;
