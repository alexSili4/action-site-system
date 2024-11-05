import { FC } from 'react';
import RegisterCodeBanner from '@RegisterCodePageComponents/RegisterCodeBanner';
import { Container, ContentWrap } from './RegisterUserSection.styled';
import { IProps } from './RegisterUserSection.types';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import RegisterUserForm from '@RegisterCodePageComponents/RegisterUserForm';

const RegisterUserSection: FC<IProps> = ({ steps, currentStep }) => {
  return (
    <Container>
      <RegisterCodeBanner />
      <ContentWrap>
        <RegisterCodeStepsBar
          isHiddenOnMobile
          steps={steps}
          currentStep={currentStep}
        />
        <RegisterUserForm />
      </ContentWrap>
    </Container>
  );
};

export default RegisterUserSection;
