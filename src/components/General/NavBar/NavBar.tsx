import { FC } from 'react';
import AtbLogo from '@/icons/atbLogo.svg?react';
import { IProps } from './NavBar.types';
import { PagePaths } from '@/constants';
import { LogoLinkTitle, Nav, StyledLink, AtbLogoCap } from './NavBar.styled';
import {
  useIsRootPage,
  useIsScrollingUp,
  useIsErrorPage,
  useIsRegisterCodePage,
} from '@/hooks';
// components
import NavBarControls from '@GeneralComponents/NavBarControls';
import LocationFilter from '@GeneralComponents/LocationFilter';
import atbLogoCap from '@/images/new-year/atb-logo-cap.webp';

const NavBar: FC<IProps> = ({
  isDesktop,
  isShowRegCodeLink,
  isPromotionDetailsPage,
  onRegisterCodeBtnClickOnAllPages,
  onRegisterCodeBtnClickOnPromotionPage,
}) => {
  const isRegisterCodePage = useIsRegisterCodePage();
  const isRootPage = useIsRootPage();
  const { isErrorPage } = useIsErrorPage();
  const { isScrolling } = useIsScrollingUp(0);
  const showShortLogoLinkTitle = !isRootPage && !isDesktop;
  const showFakeNavControls = isRootPage && isDesktop;
  const logoLinkTitle = showShortLogoLinkTitle
    ? 'Акції'
    : 'Акції з подарунками';
  const isScrolledPromotionDetailsPage = isPromotionDetailsPage && isScrolling;
  const hideLocationFilter =
    isScrolledPromotionDetailsPage ||
    isRootPage ||
    isErrorPage ||
    isRegisterCodePage;

  return (
    <Nav isRootPage={isRootPage}>
      {showFakeNavControls && (
        <NavBarControls
          isShowRegCodeLink={isShowRegCodeLink}
          isRootPage={isRootPage}
          onRegisterCodeBtnClickOnAllPages={onRegisterCodeBtnClickOnAllPages}
          onRegisterCodeBtnClickOnPromotionPage={
            onRegisterCodeBtnClickOnPromotionPage
          }
          isFake
        />
      )}
      <NavBarControls
        isShowRegCodeLink={isShowRegCodeLink}
        isRootPage={isRootPage}
        onRegisterCodeBtnClickOnAllPages={onRegisterCodeBtnClickOnAllPages}
        onRegisterCodeBtnClickOnPromotionPage={
          onRegisterCodeBtnClickOnPromotionPage
        }
      />
      <StyledLink
        to={PagePaths.root}
        isDesktop={isDesktop}
        isRootPage={isRootPage}
      >
        <AtbLogo />
        <AtbLogoCap
          src={atbLogoCap}
          alt=''
          isDesktop={isDesktop}
          isRootPage={isRootPage}
        />
        <LogoLinkTitle>{logoLinkTitle}</LogoLinkTitle>
      </StyledLink>
      {!hideLocationFilter && <LocationFilter isRootPage={isRootPage} />}
    </Nav>
  );
};

export default NavBar;
