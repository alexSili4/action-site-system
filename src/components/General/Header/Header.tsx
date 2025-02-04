import { FC } from 'react';
import {
  StyledHeaderWrap,
  StyledHeader,
  StyledHeaderBackground,
} from './Header.styled';
import { IProps } from './Header.types';
import { useIsPromotionDetailsPage, useIsScrollingUp } from '@/hooks';
// components
import Container from '@GeneralComponents/Container';
import NavBar from '@GeneralComponents/NavBar';

const Header: FC<IProps> = ({
  isDesktop,
  isFinishedPromotion,
  onRegisterCodeBtnClickOnAllPages,
  onRegisterCodeBtnClickOnPromotionPage,
}) => {
  const isPromotionDetailsPage = useIsPromotionDetailsPage();
  const { isScrollingUp, isScrolling } = useIsScrollingUp();

  const isHiddenRegCodeLink = isPromotionDetailsPage && isFinishedPromotion;
  const isColoredBackground = isScrolling && isPromotionDetailsPage;
  const shouldHideHeader = isPromotionDetailsPage && !isScrollingUp;

  return (
    <StyledHeaderWrap
      isPromotionDetailsPage={isPromotionDetailsPage}
      shouldHideHeader={shouldHideHeader}
    >
      {isPromotionDetailsPage && (
        <StyledHeaderBackground
          isColoredBackground={isColoredBackground}
        ></StyledHeaderBackground>
      )}
      <StyledHeader>
        <Container>
          <NavBar
            isDesktop={isDesktop}
            isShowRegCodeLink={!isHiddenRegCodeLink}
            isPromotionDetailsPage={isPromotionDetailsPage}
            onRegisterCodeBtnClickOnAllPages={onRegisterCodeBtnClickOnAllPages}
            onRegisterCodeBtnClickOnPromotionPage={
              onRegisterCodeBtnClickOnPromotionPage
            }
          />
        </Container>
      </StyledHeader>
    </StyledHeaderWrap>
  );
};

export default Header;
