import styled from '@emotion/styled';
import { IStyledProps } from './RegisterCodeBanner.types';

export const Container = styled.div<IStyledProps>`
  padding: ${({ theme: { spacing } }) =>
    `${spacing(6)} ${spacing(5)} ${spacing(55)}`};
  background-image: url(${({ bannerMobUrl }) => bannerMobUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
`;
