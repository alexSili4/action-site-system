import styled from '@emotion/styled';
import { IStyledProps } from './UserCodeStatus.types';

export const Container = styled.div<IStyledProps>`
  padding: ${({ theme: { spacing } }) => `${spacing(2)} ${spacing(3)}`};
  border-radius: 20px;
  background-color: ${({ isErrorStatus, isSuccessStatus }) =>
    isErrorStatus
      ? 'rgba(242, 60, 48, 0.1)'
      : isSuccessStatus
      ? 'rgba(102, 208, 18, 0.1)'
      : 'rgba(8, 151, 255, 0.1)'};
`;

export const StatusWrap = styled.div<IStyledProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  & > svg {
    flex-shrink: 0;
    color: ${({ isErrorStatus, isSuccessStatus }) =>
      isErrorStatus ? '#F23C30' : isSuccessStatus ? '#66D012' : '#0897FF'};
  }
`;

export const StatusText = styled.p<IStyledProps>`
  color: ${({ isErrorStatus, isSuccessStatus }) =>
    isErrorStatus ? '#F23C30' : isSuccessStatus ? '#43B02A' : '#0897FF'};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;
