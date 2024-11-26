import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${({ theme: { spacing } }) => `${spacing(7)} ${spacing(10)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
`;
