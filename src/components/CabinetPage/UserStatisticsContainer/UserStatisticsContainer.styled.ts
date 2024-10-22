import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 24px;
  background-color: #f4f6f9;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-grow: 1;
    border-radius: 16px;
  }
`;
