import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li``;
