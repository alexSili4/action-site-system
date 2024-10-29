import styled from '@emotion/styled';
import { IStyledProps } from './CertificateStatusLabel.types';

export const Container = styled.span<IStyledProps>`
  color: ${({ isErrorStatus, isSuccessStatus }) =>
    isErrorStatus ? '#F23C30' : isSuccessStatus ? '#66D012' : '#0897FF'};

  & > svg {
    display: block;
  }
`;
