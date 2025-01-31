import { FC, Suspense, useState } from 'react';
import { Content, Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { theme } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { makeBlur } from '@/utils';
import { BtnClickEvent, IOutletContext, StringOrNull } from '@/types/types';
// components
import Loader from '@GeneralComponents/Loader';
import Header from '@GeneralComponents/Header';
import Footer from '@GeneralComponents/Footer';
import AppBackground from '@GeneralComponents/AppBackground';

const SharedLayout: FC = () => {
  const [legalText, setLegalText] = useState<StringOrNull>(null);
  const [
    showSelectPromotionsLocationModalWin,
    setShowSelectPromotionsLocationModalWin,
  ] = useState<boolean>(false);
  const [showSelectPromotionModalWin, setShowSelectPromotionModalWin] =
    useState<boolean>(false);
  const isDesktop = useMediaQuery(theme.breakpoints.tablet);
  const showOtherModalWin =
    showSelectPromotionsLocationModalWin || showSelectPromotionModalWin;

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
    showOtherModalWin,
    updateLegalText,
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
        <Footer legalText={legalText} />
      </Content>
    </>
  );
};

export default SharedLayout;
