import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import HeroSection from '@/components/HeroSection';
import AppInfo from '@/components/AppInfo';

const NotFoundPage: FC = () => (
  <HeroSection>
    <Container>
      <AppInfo />
    </Container>
  </HeroSection>
);

export default NotFoundPage;
