import { FC } from 'react';
import { Container, ContentWrap, Text } from './RegisterCodeSection.styled';
import { IProps } from './RegisterCodeSection.types';
// components
import RegisterCodeForm from '@RegisterCodePageComponents/RegisterCodeForm';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';

const RegisterCodeSection: FC<IProps> = ({
  rulesPdf,
  hotLinePhone,
  hotLineWorkHours,
  onSuccessRegisterCode,
  updatePromotion,
}) => {
  return (
    <Container>
      <ContentWrap>
        <RegisterCodeStepsBar />
        <RegisterCodeForm
          updatePromotion={updatePromotion}
          onSuccessRegisterCode={onSuccessRegisterCode}
          rulesPdf={rulesPdf}
        />
        <Text>
          Якщо Вам не вдалося зареєструвати акційний код зверніться на гарячу
          лінію за телефоном {hotLinePhone} ({hotLineWorkHours})
        </Text>
      </ContentWrap>
    </Container>
  );
};

export default RegisterCodeSection;
