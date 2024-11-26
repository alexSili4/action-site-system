import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.spacing(12)};
  }
`;

export const ListItem = styled.li`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: calc((100% - ${({ theme }) => theme.spacing(4)}) / 2);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: calc((100% - ${({ theme }) => theme.spacing(4)} * 2) / 3);
  }
`;
