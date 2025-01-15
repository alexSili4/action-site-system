import styled from '@emotion/styled';
import { IStyledContainerProps } from './PromotionContactsMapShop.types';

export const Container = styled.label<IStyledContainerProps>`
  display: block;
  padding: ${({ theme }) => theme.spacing(6)};
  transition: background-color
    ${({ theme }) => theme.transitionDurationAndFunc.other};
  cursor: ${({ disabled }) => !disabled && 'pointer'};

  &:is(:hover, :focus, :has(input:checked)) {
    background-color: ${({ disabled }) => !disabled && '#9066cc'};
  }

  &:is(:hover, :focus, :has(input:checked)) > span > span {
    color: ${({ theme, disabled }) => !disabled && theme.colors.white};
  }
`;

export const TitleWrap = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const Name = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const Location = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const Address = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const WorkHours = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const RadioBtn = styled.input`
  position: absolute;
  transform: scale(0);
`;
