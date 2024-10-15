import { useTargetPromotion } from '@/hooks';
import { FC } from 'react';
import { Container, ContentWrap, Text } from './RegisterCodeSection.styled';
import RegisterCodeBanner from '@RegisterCodePage/RegisterCodeBanner';
import RegisterCodeForm from '@RegisterCodePage/RegisterCodeForm';
import RegisterCodeStepsBar from '@RegisterCodePage/RegisterCodeStepsBar';

const RegisterCodeSection: FC = () => {
  const { hot_line_phone: hotLinePhone } = useTargetPromotion() ?? {};

  return (
    <Container>
      <RegisterCodeBanner />
      <ContentWrap>
        <RegisterCodeStepsBar isHiddenOnMobile />
        <RegisterCodeForm />
        <Text>
          Якщо Вам не вдалося зареєструвати акційний код зверніться на гарячу
          лінію за телефоном {hotLinePhone} ({'???графік роботи???'})
        </Text>
      </ContentWrap>
    </Container>
  );
};

export default RegisterCodeSection;
