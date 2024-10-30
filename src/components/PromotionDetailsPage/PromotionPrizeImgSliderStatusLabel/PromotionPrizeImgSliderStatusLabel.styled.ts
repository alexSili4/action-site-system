import styled from '@emotion/styled';

export const StatusLabel = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.prizeStatus};
  top: -8px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background-color: #9066cc;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 16px;
    right: 16px;
  }
`;
