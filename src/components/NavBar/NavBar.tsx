import { FC } from 'react';
import AtbLogo from '@/icons/atb-logo.svg?react';
import { IProps } from './NavBar.types';
import { PagePaths } from '@/constants';
import { LogoLinkTitle, Nav } from './NavBar.styled';
import { Link } from 'react-router-dom';
import LocationFilter from '@/components/LocationFilter';
import NavControls from '@/components/NavControls';

const NavBar: FC<IProps> = ({ isRootPage, isDesktop }) => {
  const showShortLogoLinkTitle = !isDesktop && !isRootPage;
  const logoLinkTitle = showShortLogoLinkTitle
    ? 'Акції'
    : 'Акції з подарунками';

  return (
    <Nav isRootPage={isRootPage} isDesktop={isDesktop}>
      <NavControls isRootPage={isRootPage} isFake />
      <NavControls isRootPage={isRootPage} />
      <Link to={PagePaths.root}>
        <AtbLogo />
        <LogoLinkTitle>{logoLinkTitle}</LogoLinkTitle>
      </Link>
      <LocationFilter isRootPage={isRootPage} isHidden />
    </Nav>
  );
};

export default NavBar;
