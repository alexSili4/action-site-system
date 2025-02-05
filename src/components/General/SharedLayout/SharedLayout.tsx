import { FC, Suspense, useState } from 'react';
import { Content, Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { useIsPromotionDetailsPage, useIsTablet } from '@/hooks';
import { makeBlur } from '@/utils';
import { BtnClickEvent, IOutletContext, StringOrNull } from '@/types/types';
// components
import Loader from '@GeneralComponents/Loader';
import Header from '@GeneralComponents/Header';
import Footer from '@GeneralComponents/Footer';
import AppBackground from '@GeneralComponents/AppBackground';

const SharedLayout: FC = () => {
  const [isFinishedPromotion, setIsFinishedPromotion] =
    useState<boolean>(false);
  const [legalText, setLegalText] = useState<StringOrNull>(null);
  const [
    showSelectPromotionsLocationModalWin,
    setShowSelectPromotionsLocationModalWin,
  ] = useState<boolean>(false);
  const [showSelectPromotionModalWin, setShowSelectPromotionModalWin] =
    useState<boolean>(false);
  const isPromotionDetailsPage = useIsPromotionDetailsPage();
  const isTablet = useIsTablet();
  const showOtherModalWin =
    showSelectPromotionsLocationModalWin || showSelectPromotionModalWin;
  const isHiddenRegCodeLink = isPromotionDetailsPage && isFinishedPromotion;
  const isShowRegCodeLink = !isHiddenRegCodeLink;

  const updateIsFinishedPromotion = (data: boolean) => {
    setIsFinishedPromotion(data);
  };

  const updateLegalText = (data: StringOrNull) => {
    setLegalText(data);
  };

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
    isShowRegCodeLink,
    showOtherModalWin,
    updateLegalText,
    updateIsFinishedPromotion,
  };

  return (
    <>
      <AppBackground />
      <Content>
        <Header
          isShowRegCodeLink={isShowRegCodeLink}
          isPromotionDetailsPage={isPromotionDetailsPage}
          isDesktop={isTablet}
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
        <Footer legalText={legalText} />
      </Content>
    </>
  );
};

export default SharedLayout;
