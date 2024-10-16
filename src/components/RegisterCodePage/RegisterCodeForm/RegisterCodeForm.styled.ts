import styled from '@emotion/styled';
import { IStyledProps } from './RegisterCodeForm.types';

export const Form = styled.form`
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const InputWrap = styled.div<IStyledProps>`
  position: relative;
  display: flex;
  border-radius: 8px;
  outline: 5px solid
    ${({ isError }) => (isError ? '#ffecec' : 'rgba(193, 190, 255, 0.3)')};
`;

export const LabelWrap = styled.div`
  position: absolute;
  left: 9px;
  bottom: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const Label = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
`;

export const InputDelimiterWrap = styled.div<IStyledProps>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: ${({ isError }) => (isError ? '#ffecec' : '#e6e5f8')};
`;

export const InputDelimiter = styled.div`
  width: 6px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ErrorMessage = styled.p`
  margin-top: ${({ theme }) => theme.spacing(3)};
  color: #ff6363;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
`;
