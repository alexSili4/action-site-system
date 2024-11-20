import styled from '@emotion/styled';
import { IStyledProps } from './LocationList.types';

export const Container = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    background-color: rgba(147, 113, 241, 0.17);
    border-radius: 100px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      margin-bottom: ${({ theme }) => theme.spacing(8)};
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9371f1;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
  height: 100%;
`;

export const ListItem = styled.li`
  & > a {
    display: block;
    padding-left: ${({ theme }) => theme.spacing(4)};
  }
`;

export const LinkTitleWrap = styled.span`
  display: block;

  li:is(:last-of-type) > a > & {
    padding-bottom: ${({ theme }) => theme.spacing(4)};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      padding-bottom: ${({ theme }) => theme.spacing(8)};
    }
  }
`;

export const LinkPart = styled.span<IStyledProps>`
  color: ${({ isTitle }) => (isTitle ? '#3f3d5c' : '#7e8494')};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
`;
