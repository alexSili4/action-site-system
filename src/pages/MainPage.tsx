import { FC, useEffect } from 'react';
import Container from '@GeneralComponents/Container';
import HeroSection from '@MainPageComponents/HeroSection';
import AppInfo from '@MainPageComponents/AppInfo';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';
import { getQrCodePath } from '@/utils';

const MainPage: FC = () => {
  const { searchParams } = useSetSearchParams();
  const code = searchParams.get(SearchParamsKeys.code);

  useEffect(() => {
    if (code) {
      // const qrCodePath = `${PagePaths.qr}/${SearchParamsKeys.code}=${code}`;
      const qrCodePath = getQrCodePath(code);

      window.location.href = qrCodePath;
    }
  }, [code]);

  return (
    <HeroSection>
      <Container>
        <AppInfo />
      </Container>
    </HeroSection>
  );
};

export default MainPage;
