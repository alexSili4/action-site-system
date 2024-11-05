import { FC, Suspense, useState } from 'react';
import { Content, Main } from './SharedLayout.styled';
import { Outlet, useLocation } from 'react-router-dom';
import Loader from '@GeneralComponents/Loader';
import Header from '@GeneralComponents/Header';
import Footer from '@GeneralComponents/Footer';
import AppBackground from '@GeneralComponents/AppBackground';
import AnimatedModalWinContainer from '@GeneralComponents/AnimatedModalWinContainer';
import { PagePaths, theme } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';

const SharedLayout: FC = () => {
  const [showRegisterCodeModalWin, setShowRegisterCodeModalWin] =
    useState<boolean>(false);
  const isDesktop = useMediaQuery(theme.breakpoints.desktop);
  const { pathname } = useLocation();

  const isRootPage = pathname === PagePaths.root;
  const isPromotionDetailsPage = pathname.startsWith(
    PagePaths.promotionDetailsPageExample
  );

  const setRegisterCodeModalWinState = () => {
    setShowRegisterCodeModalWin((prevState) => !prevState);
  };

  const onRegisterCodeBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setRegisterCodeModalWinState();
  };

  return (
    <>
      <AppBackground />
      <Content>
        <Header
          isRootPage={isRootPage}
          isPromotionDetailsPage={isPromotionDetailsPage}
          isDesktop={isDesktop}
          onRegisterCodeBtnClick={onRegisterCodeBtnClick}
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
