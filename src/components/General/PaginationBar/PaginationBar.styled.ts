import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    justify-content: space-between;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(7)};
  }
`;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const TemplateItem = styled.li`
  & > button {
    cursor: auto;

    &:is(:hover, :focus) {
      color: none;
    }
  }
`;
