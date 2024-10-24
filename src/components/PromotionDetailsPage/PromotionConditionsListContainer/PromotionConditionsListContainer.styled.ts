import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(14)};
  }
`;
