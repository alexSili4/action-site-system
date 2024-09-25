import { FC, Suspense, useState } from 'react';
import { Content, Main } from './SharedLayout.styled';
import { Outlet, useLocation } from 'react-router-dom';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PagePaths, theme } from '@/constants';
import { useMediaQuery } from '@/hooks';
import AppBackground from '@/components/AppBackground';
import AnimatedModalWin from '@/components/AnimatedModalWin';
import { AnimatePresence } from 'framer-motion';

const SharedLayout: FC = () => {
  const [showRegisterCodeModalWin, setShowRegisterCodeModalWin] =
    useState<boolean>(false);
  const isDesktop = useMediaQuery(theme.breakpoints.desktop);
  const { pathname } = useLocation();

  const isRootPage = pathname === PagePaths.root;

  const setRegisterCodeModalWinState = () => {
    setShowRegisterCodeModalWin((prevState) => !prevState);
  };

  return (
    <>
      <AppBackground />
      <Content>
        <Header
          isRootPage={isRootPage}
          isDesktop={isDesktop}
          setRegisterCodeModalWinState={setRegisterCodeModalWinState}
        />
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
        <Footer isRootPage={isRootPage} />
      </Content>
      <AnimatePresence>
        <AnimatedModalWin
          setModalWinState={setRegisterCodeModalWinState}
          showModalWin={showRegisterCodeModalWin}
        >
          <p>registerCode</p>
        </AnimatedModalWin>
      </AnimatePresence>
    </>
  );
};

export default SharedLayout;
