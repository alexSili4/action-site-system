import { FC } from 'react';
import { Container } from './RegisterCodeStepsBar.styled';
import { IProps } from './RegisterCodeStepsBar.types';

const RegisterCodeStepsBar: FC<IProps> = ({ isHiddenOnMobile }) => {
  return (
    <Container isHiddenOnMobile={isHiddenOnMobile}>
      RegisterCodeStepsBar
    </Container>
  );
};

export default RegisterCodeStepsBar;
