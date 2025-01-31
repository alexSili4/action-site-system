import { FC } from 'react';
import { Container, ContentWrap, Text } from './RegisterCodeSection.styled';
import { IProps } from './RegisterCodeSection.types';
// components
import RegisterCodeForm from '@RegisterCodePageComponents/RegisterCodeForm';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';

const RegisterCodeSection: FC<IProps> = ({
  rulesPdf,
  supportServiceText,
  onSuccessRegisterCode,
  updatePromotion,
  isPromotion,
}) => {
  return (
    <Container>
      <ContentWrap>
        <RegisterCodeStepsBar />
        <RegisterCodeForm
          updatePromotion={updatePromotion}
          onSuccessRegisterCode={onSuccessRegisterCode}
          rulesPdf={rulesPdf}
          isPromotion={isPromotion}
        />
        <Text>{supportServiceText}</Text>
      </ContentWrap>
    </Container>
  );
};

export default RegisterCodeSection;
