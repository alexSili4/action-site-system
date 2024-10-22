import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;
