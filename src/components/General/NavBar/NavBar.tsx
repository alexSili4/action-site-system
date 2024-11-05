import { FC } from 'react';
import AtbLogo from '@/icons/atb-logo.svg?react';
import { IProps } from './NavBar.types';
import { PagePaths } from '@/constants';
import { LogoLinkTitle, Nav } from './NavBar.styled';
import { Link } from 'react-router-dom';
import NavBarControls from '@GeneralComponents/NavBarControls';
import LocationFilter from '@GeneralComponents/LocationFilter';

const NavBar: FC<IProps> = ({
  isRootPage,
  isDesktop,
  isPromotionDetailsPage,
  onRegisterCodeBtnClick,
}) => {
  const showShortLogoLinkTitle = !isRootPage && !isDesktop;
  const showFakeNavControls = isRootPage && isDesktop;
  const logoLinkTitle = showShortLogoLinkTitle
    ? 'Акції'
    : 'Акції з подарунками';

  return (
    <Nav isRootPage={isRootPage} isDesktop={isDesktop}>
      {showFakeNavControls && (
        <NavBarControls
          isRootPage={isRootPage}
          isPromotionDetailsPage={isPromotionDetailsPage}
          onRegisterCodeBtnClick={onRegisterCodeBtnClick}
          isFake
        />
      )}
      <NavBarControls
        isRootPage={isRootPage}
        isPromotionDetailsPage={isPromotionDetailsPage}
        onRegisterCodeBtnClick={onRegisterCodeBtnClick}
      />
      <Link to={PagePaths.root}>
        <AtbLogo />
        <LogoLinkTitle>{logoLinkTitle}</LogoLinkTitle>
      </Link>
      {!isRootPage && <LocationFilter isRootPage={isRootPage} />}
    </Nav>
  );
};

export default NavBar;
