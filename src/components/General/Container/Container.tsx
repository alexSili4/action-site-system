import { FC } from 'react';
import { IProps } from './Container.types';
import { StyledContainer } from './Container.styled';

const Container: FC<IProps> = ({ children, compactPadding = false }) => {
  return (
    <StyledContainer compactPadding={compactPadding}>
      {children}
    </StyledContainer>
  );
};

export default Container;
