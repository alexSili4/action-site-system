import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(8)};
    padding: ${({ theme }) => theme.spacing(8)};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ListItem = styled.li``;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 8px;
  padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(6)}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme }) => theme.spacing(14)};
  }
`;
