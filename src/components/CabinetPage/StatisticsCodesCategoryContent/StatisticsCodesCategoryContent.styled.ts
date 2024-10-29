import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: calc((100% - ${({ theme }) => theme.spacing(3)}) / 2);
  }
`;
