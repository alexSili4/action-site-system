import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(12)};
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
overflow:hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spacing(20)};
  }
`;

export const PromotionRegisterCodeLinkContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    padding-top: ${({ theme }) => theme.spacing(8)};
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
  }
`;
