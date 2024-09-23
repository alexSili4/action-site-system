import { FC, Suspense } from 'react';
import { Content, Main } from './SharedLayout.styled';
import { Outlet, useLocation } from 'react-router-dom';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PagePaths, theme } from '@/constants';
import { useMediaQuery } from '@/hooks';
import AppBackground from '@/components/AppBackground';

const SharedLayout: FC = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.desktop);
  const { pathname } = useLocation();

  const isRootPage = pathname === PagePaths.root;

  return (
    <>
      <AppBackground />
      <Content>
        <Header isRootPage={isRootPage} isDesktop={isDesktop} />
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
        <Footer isRootPage={isRootPage} />
      </Content>
    </>
  );
};

export default SharedLayout;
