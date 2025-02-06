import { FC } from 'react';
import AtbLogo from '@/icons/atbLogo.svg?react';
import { IProps } from './NavBar.types';
import { PagePaths } from '@/constants';
import { LogoLinkTitle, Nav, StyledLink } from './NavBar.styled';
import { useIsRootPage, useIsScrollingUp, useIsErrorPage } from '@/hooks';
// components
import NavBarControls from '@GeneralComponents/NavBarControls';
import LocationFilter from '@GeneralComponents/LocationFilter';

const NavBar: FC<IProps> = ({
  isDesktop,
  isShowRegCodeLink,
  isPromotionDetailsPage,
  onRegisterCodeBtnClickOnAllPages,
  onRegisterCodeBtnClickOnPromotionPage,
}) => {
  const isRootPage = useIsRootPage();
  const isErrorPage = useIsErrorPage();
  const { isScrolling } = useIsScrollingUp(0);
  const showShortLogoLinkTitle = !isRootPage && !isDesktop;
  const showFakeNavControls = isRootPage && isDesktop;
  const logoLinkTitle = showShortLogoLinkTitle
    ? 'Акції'
    : 'Акції з подарунками';
  const isScrolledPromotionDetailsPage = isPromotionDetailsPage && isScrolling;
  const hideLocationFilter =
    isScrolledPromotionDetailsPage || isRootPage || isErrorPage;

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
        <LogoLinkTitle>{logoLinkTitle}</LogoLinkTitle>
      </StyledLink>
      {!hideLocationFilter && <LocationFilter isRootPage={isRootPage} />}
    </Nav>
  );
};

export default NavBar;
