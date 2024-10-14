import styled from '@emotion/styled';

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
  }
`;

export const ContentWrap = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: ${({ theme }) => theme.spacing(12)}; */
  /* margin-top: ${({ theme }) => theme.spacing(8)}; */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* display: flex; */
    /* flex-direction: row-reverse; */
    /* gap: ${({ theme }) => theme.spacing(29)}; */
    /* padding: ${({ theme }) => theme.spacing(10)}; */
  }
`;