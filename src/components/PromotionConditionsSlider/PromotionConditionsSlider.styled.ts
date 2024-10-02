import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(14)};
  }
`;

export const Card = styled.div``;

export const TitleWrap = styled.div``;

export const Title = styled.p``;

export const Cover = styled.div``;
