import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
`;

export const ShopsListBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(6)};
  border: none;
  background-color: #f4f6f9;

  & > svg {
    color: #2e305b;
  }
`;

export const Title = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
`;

export const ListWrap = styled.div`
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0px;
  width: 100%;
  max-height: 320px;
  background-color: #f4f6f9;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f6f6f9;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a282f7;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-of-type) > label {
    border-bottom: 1px solid #e3e7ed;
  }
`;
