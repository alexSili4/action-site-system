import { setBtnDisplayProp } from '@/utils';
import styled from '@emotion/styled';
import { IStyledProps } from './PaginationBar.types';
import { IStyledButtonProps } from '@GeneralComponents/PaginationBarBtn/PaginationBarBtn.types';

export const List = styled.ul`
  display: flex;
  margin-left: auto;
`;

export const Item = styled.li<IStyledProps>`
  display: ${({ currentPage, page, step }) =>
    setBtnDisplayProp({ currentPage, page, step })};

  &:first-of-type button {
  }

  &:last-of-type button {
  }
`;

export const TemplateItem = styled.li`
  & button {
    cursor: auto;

    &:is(:hover, :focus) {
      box-shadow: none;
    }
  }
`;

export const Button = styled.button<IStyledButtonProps>`
  min-width: 30px;
  padding: ${({ theme }): string => theme.spacing(2)};
  background-color: ${({ isActivePageBtn }) => (isActivePageBtn ? '' : '')};
  border: none;
  border-color: transparent;
  color: ${({ isActivePageBtn }) => (isActivePageBtn ? '' : '')};
  font-family: ${() => ''};
  font-size: ${() => ''}px;
  font-weight: ${() => ''};
  transition: box-shadow
    ${({ theme }): string => theme.transitionDurationAndFunc};

  &:is(:hover, :focus, :active) {
    outline: none;
    box-shadow: ${(): string => ''};
  }
`;
