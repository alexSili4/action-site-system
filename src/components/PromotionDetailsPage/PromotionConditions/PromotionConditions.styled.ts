import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(12)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(20)};
  }
`;

export const PromotionRegisterCodeLinkContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-top: ${({ theme }) => theme.spacing(8)};
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
  }
`;
