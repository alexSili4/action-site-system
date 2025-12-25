import { FC } from 'react';
import {
  StyledHeaderWrap,
  StyledHeader,
  StyledHeaderBackground,
  NewYearToggleBtn,
  StyledNewyearHeaderBackground,
} from './Header.styled';
import { IProps } from './Header.types';
import { useIsScrollingUp } from '@/hooks';
// components
import Container from '@GeneralComponents/Container';
import NavBar from '@GeneralComponents/NavBar';
import { PiSnowflake } from 'react-icons/pi';
import { ClassNames } from '@/constants';

const Header: FC<IProps> = ({
  isDesktop,
  isPromotionDetailsPage,
  isShowRegCodeLink,
  onRegisterCodeBtnClickOnAllPages,
  onRegisterCodeBtnClickOnPromotionPage,
}) => {
  const { isScrollingUp, isScrolling } = useIsScrollingUp(200);

  const isColoredBackground = isScrolling && isPromotionDetailsPage;
  const shouldHideHeader = isPromotionDetailsPage && !isScrollingUp;

  return (
    <StyledHeaderWrap
      isPromotionDetailsPage={isPromotionDetailsPage}
      shouldHideHeader={shouldHideHeader}
    >
      {isPromotionDetailsPage && (
        <>
          <StyledHeaderBackground
            isColoredBackground={isColoredBackground}
          ></StyledHeaderBackground>
          <StyledNewyearHeaderBackground
            isColoredBackground={isColoredBackground}
          ></StyledNewyearHeaderBackground>
        </>
      )}
      <StyledHeader>
        <Container>
          <NewYearToggleBtn
            type='button'
            onClick={() => document.body.classList.toggle(ClassNames.newYear)}
          >
            <PiSnowflake size={24} />
          </NewYearToggleBtn>
          <NavBar
            isDesktop={isDesktop}
            isShowRegCodeLink={isShowRegCodeLink}
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
