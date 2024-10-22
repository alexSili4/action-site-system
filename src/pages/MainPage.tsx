import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import HeroSection from '@MainPageComponents/HeroSection';
import AppInfo from '@MainPageComponents/AppInfo';

const NotFoundPage: FC = () => (
  <HeroSection>
    <Container>
      <AppInfo />
    </Container>
  </HeroSection>
);

export default NotFoundPage;
