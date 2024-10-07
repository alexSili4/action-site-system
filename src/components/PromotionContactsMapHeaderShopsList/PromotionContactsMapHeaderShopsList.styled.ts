import styled from '@emotion/styled';

export const ListWrap = styled.div`
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0px;
  width: 100%;
  max-height: 320px;
  background-color: #f4f6f9;
  box-shadow: -4px 20px 20px 0px rgba(32, 31, 47, 0.1);
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-height: calc(513px - 73.2px);
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-of-type) > label {
    border-bottom: 1px solid #e3e7ed;
  }
`;
