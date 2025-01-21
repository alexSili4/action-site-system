import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import HeroSection from '@MainPageComponents/HeroSection';
import AppInfo from '@MainPageComponents/AppInfo';

const MainPage: FC = () => {
  // const { searchParams } = useSetSearchParams();

  // const code = searchParams.get(SearchParamsKeys.code);

  // useEffect(() => {
  //   if (code) {
  //     const qrCodePath = getQrCodePath(code);

  //     window.location.href = qrCodePath;
  //   }
  // }, [code]);

  return (
    <HeroSection>
      <Container>
        <AppInfo />
      </Container>
    </HeroSection>
  );
};

export default MainPage;
