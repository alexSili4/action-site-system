import { FC, Suspense, useState } from 'react';
import { Content, Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import Loader from '@GeneralComponents/Loader';
import Header from '@GeneralComponents/Header';
import Footer from '@GeneralComponents/Footer';
import AppBackground from '@GeneralComponents/AppBackground';
import { theme } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { makeBlur } from '@/utils';
import { BtnClickEvent, IOutletContext } from '@/types/types';
import RegisterCodeModalWinSelectPromotionsLocation from '@GeneralComponents/RegisterCodeModalWinSelectPromotionsLocation';
import RegisterCodeModalWinSelectPromotion from '@GeneralComponents/RegisterCodeModalWinSelectPromotion';

const SharedLayout: FC = () => {
  const [
    showSelectPromotionsLocationModalWin,
    setShowSelectPromotionsLocationModalWin,
  ] = useState<boolean>(false);
  const [showSelectPromotionModalWin, setShowSelectPromotionModalWin] =
    useState<boolean>(false);
  const isDesktop = useMediaQuery(theme.breakpoints.desktop);
  const showOtherModalWin =
    showSelectPromotionsLocationModalWin || showSelectPromotionModalWin;
  const outletContext: IOutletContext = { showOtherModalWin };

  const setSelectPromotionsLocationModalWinState = () => {
    setShowSelectPromotionsLocationModalWin((prevState) => !prevState);
  };

  const setSelectPromotionModalWinState = () => {
    setShowSelectPromotionModalWin((prevState) => !prevState);
  };

  const onRegisterCodeBtnClickOnAllPages = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setSelectPromotionsLocationModalWinState();
  };

  const onRegisterCodeBtnClickOnPromotionPage = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setSelectPromotionModalWinState();
  };

  return (
    <>
      <AppBackground />
      <Content>
        <Header
          isDesktop={isDesktop}
          onRegisterCodeBtnClickOnAllPages={onRegisterCodeBtnClickOnAllPages}
          onRegisterCodeBtnClickOnPromotionPage={
            onRegisterCodeBtnClickOnPromotionPage
          }
        />
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet context={outletContext} />
          </Suspense>
        </Main>
        <Footer />
      </Content>
      <RegisterCodeModalWinSelectPromotionsLocation
        showModalWin={showSelectPromotionsLocationModalWin}
        setModalWinState={setSelectPromotionsLocationModalWinState}
      />
      <RegisterCodeModalWinSelectPromotion
        showModalWin={showSelectPromotionModalWin}
        setModalWinState={setSelectPromotionModalWinState}
      />
    </>
  );
};

export default SharedLayout;
