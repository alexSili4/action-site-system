import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0px;
  width: 100%;
  height: 156px;
  border: 1px solid #e3e7ed;
  border-radius: 8px;
  padding-top: ${({ theme }) => theme.spacing()};
  padding-bottom: ${({ theme }) => theme.spacing()};
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateY(100%);
`;

export const ListWrap = styled.div`
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9371f1;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li``;
