import styled from '@emotion/styled';

export const Container = styled.div`
  flex-shrink: 0;
  width: 2px;
  height: 34px;
  background-color: #e3e7ed;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;
