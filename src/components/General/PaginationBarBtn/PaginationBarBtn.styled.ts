import { IStyledButtonProps, IStyledItemProps } from './PaginationBarBtn.types';
import styled from '@emotion/styled';
import { setBtnDisplayProp } from '@/utils';

export const Item = styled.li<IStyledItemProps>`
  display: ${({ currentPage, page, step }) =>
    setBtnDisplayProp({ currentPage, page, step: step ?? 0 })};
`;

export const Button = styled.button<IStyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background-color: ${({ isNavBtn }) => (isNavBtn ? '#9066CC' : '#ffeecc')};
  box-shadow: 3px 3px 0px 0px
      ${({ isNavBtn }) => (isNavBtn ? '#7A4EBD' : '#e8c47d')},
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  color: ${({ isActivePageBtn, isNavBtn, theme }) =>
    isNavBtn ? theme.colors.white : isActivePageBtn ? '#383E45' : '#C69C4A'};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other},
    box-shadow ${({ theme }): string => theme.transitionDurationAndFunc.other};

  &:not(:disabled):is(:hover, :focus) {
    color: ${({ isNavBtn }) => !isNavBtn && '#383e45'};
    box-shadow: 1px 1px 0px 0px
        ${({ isNavBtn }) => (isNavBtn ? '#7A4EBD' : '#e8c47d')},
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  }
`;
