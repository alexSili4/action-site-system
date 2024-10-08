import styled from '@emotion/styled';
import {
  IStyledDatePickerBtn,
  IStyledProps,
} from './PromotionsDatePicker.types';
import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.promotionsDatePicker};
  height: 100%;
`;

export const DatePickerBtn = styled.button<IStyledDatePickerBtn>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(6)};
  border: none;
  background-color: transparent;

  & > svg {
    color: ${({ showDatePicker }) => (showDatePicker ? '#383e45' : '#7e8494')};
    transition: transform ${({ theme }) => theme.transitionDurationAndFunc},
      color ${({ theme }) => theme.transitionDurationAndFunc};

    &:first-of-type {
      color: ${({ showDatePicker }) =>
        showDatePicker ? '#383e45' : '#bcc3d3'};
    }

    &:last-of-type {
      color: ${({ isSelectedDate }) => isSelectedDate && '#FD4B3C'};
      transform: rotate(
        ${({ showDatePicker }) => (showDatePicker ? 180 : 0)}deg
      );
    }
  }

  &:is(:hover, :focus) > svg:last-of-type {
    transform: rotate(${({ showDatePicker }) => (showDatePicker ? 0 : 180)}deg);
  }
`;

export const BtnLabel = styled.span<IStyledProps>`
  color: ${({ showDatePicker }) => (showDatePicker ? '#383e45' : '#7e8494')};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const DatePickerContainer = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  transform: translateY(100%);
`;
