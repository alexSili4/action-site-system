import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0px;
  width: 100%;
  border: 1px solid #e3e7ed;
  border-radius: 8px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) =>
    `${theme.spacing()} ${theme.spacing(2)} ${theme.spacing(2)}`};
  transform: translateY(100%);
`;

export const List = styled.ul``;

export const ListItem = styled.li``;
