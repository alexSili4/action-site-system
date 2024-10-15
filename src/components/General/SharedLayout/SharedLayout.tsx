import { FC, Suspense, useState } from 'react';
import { Content, Main } from './SharedLayout.styled';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Loader,
  Header,
  Footer,
  AppBackground,
  AnimatedModalWinContainer,
} from '@/components/General';
import { PagePaths, theme } from '@/constants';
import { useMediaQuery } from '@/hooks';

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
      <AnimatedModalWinContainer
        setModalWinState={setRegisterCodeModalWinState}
        showModalWin={showRegisterCodeModalWin}
      >
        <p>registerCode</p>
      </AnimatedModalWinContainer>
    </>
  );
};

export default SharedLayout;
