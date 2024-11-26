import { FC, Suspense, useState } from 'react';
import { Content, Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { theme } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { makeBlur } from '@/utils';
import { BtnClickEvent, IOutletContext } from '@/types/types';
// components
import RegisterCodeModalWinSelectPromotionsLocation from '@GeneralComponents/RegisterCodeModalWinSelectPromotionsLocation';
import RegisterCodeModalWinSelectPromotion from '@GeneralComponents/RegisterCodeModalWinSelectPromotion';
import Loader from '@GeneralComponents/Loader';
import Header from '@GeneralComponents/Header';
import Footer from '@GeneralComponents/Footer';
import AppBackground from '@GeneralComponents/AppBackground';

const SharedLayout: FC = () => {
  const [
    showSelectPromotionsLocationModalWin,
    setShowSelectPromotionsLocationModalWin,
  ] = useState<boolean>(false);
  const [showSelectPromotionModalWin, setShowSelectPromotionModalWin] =
    useState<boolean>(false);
  const isDesktop = useMediaQuery(theme.breakpoints.tablet);
  const showOtherModalWin =
    showSelectPromotionsLocationModalWin || showSelectPromotionModalWin;

  const toggleShowSelectPromotionsLocationModalWin = () => {
    setShowSelectPromotionsLocationModalWin((prevState) => !prevState);
  };

  const toggleShowSelectPromotionModalWin = () => {
    setShowSelectPromotionModalWin((prevState) => !prevState);
  };

  const onRegisterCodeBtnClickOnAllPages = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowSelectPromotionsLocationModalWin();
  };

  const onRegisterCodeBtnClickOnPromotionPage = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowSelectPromotionModalWin();
  };

  const outletContext: IOutletContext = {
    showOtherModalWin,
    onEmptyPrizesListBtnClick: onRegisterCodeBtnClickOnAllPages,
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
        setModalWinState={toggleShowSelectPromotionsLocationModalWin}
        toggleShowSelectPromotionsLocationModalWin={
          toggleShowSelectPromotionsLocationModalWin
        }
      />
      <RegisterCodeModalWinSelectPromotion
        showModalWin={showSelectPromotionModalWin}
        setModalWinState={toggleShowSelectPromotionModalWin}
        toggleShowSelectPromotionModalWin={toggleShowSelectPromotionModalWin}
      />
    </>
  );
};

export default SharedLayout;
