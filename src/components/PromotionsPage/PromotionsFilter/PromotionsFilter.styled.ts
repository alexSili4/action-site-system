import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: space-between;
  }
`;
