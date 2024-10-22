import { FC } from 'react';
import { StyledSection } from './HeroSection.styled';
import { IProps } from './HeroSection.types';

const HeroSection: FC<IProps> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default HeroSection;
