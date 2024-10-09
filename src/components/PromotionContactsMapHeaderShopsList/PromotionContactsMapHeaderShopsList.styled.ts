import styled from '@emotion/styled';

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-of-type) > label {
    border-bottom: 1px solid #e3e7ed;
  }
`;
