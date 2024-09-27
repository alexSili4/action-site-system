import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 174px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;
