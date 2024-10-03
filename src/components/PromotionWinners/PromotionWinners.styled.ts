import styled from '@emotion/styled';

export const Container = styled.div``;

export const PromotionWinnersTableWrap = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-bottom: ${({ theme }) => theme.spacing(8)};
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #9371f1;
      border-radius: 100px;
      cursor: pointer;
    }
  }
`;
