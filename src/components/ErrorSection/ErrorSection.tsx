import { FC } from 'react';
import { StyledSection } from './ErrorSection.styled';
import { IProps } from './ErrorSection.types';

const ErrorSection: FC<IProps> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default ErrorSection;
