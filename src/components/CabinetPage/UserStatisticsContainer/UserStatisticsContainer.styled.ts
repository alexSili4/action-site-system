import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 24px;
  background-color: #f4f6f9;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
  }
`;
