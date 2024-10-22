import styled from '@emotion/styled';

export const Container = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    align-self: center;
  }
`;
