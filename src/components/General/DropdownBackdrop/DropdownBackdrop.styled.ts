import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.dropdownBackdrop};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: pink;
  opacity: 0.4;
`;
