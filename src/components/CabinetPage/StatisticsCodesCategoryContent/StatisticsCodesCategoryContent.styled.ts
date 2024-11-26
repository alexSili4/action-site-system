import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(7)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(8)};
    height: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: calc((100% - ${({ theme }) => theme.spacing(3)}) / 2);
  }
`;
