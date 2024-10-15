import { FC } from 'react';
import RegisterCodeStepsBar from '@RegisterCodePage/RegisterCodeStepsBar';
import RegisterCodeSection from '@RegisterCodePage/RegisterCodeSection';
import { Container } from './RegisterCode.styled';

const RegisterCode: FC = () => {
  return (
    <Container>
      <RegisterCodeStepsBar isHiddenOnMobile={false} />
      <RegisterCodeSection />
    </Container>
  );
};

export default RegisterCode;
