import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import HeroSection from '@MainPageComponents/HeroSection';
import AppInfo from '@MainPageComponents/AppInfo';

const MainPage: FC = () => {
   return (
    <HeroSection>
      <Container>
        <AppInfo />
      </Container>
    </HeroSection>
  );
};

export default MainPage;
