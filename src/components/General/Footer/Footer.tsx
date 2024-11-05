import { FC, useEffect } from 'react';
import {
  StyledFooter,
  Copyright,
  LegalInfo,
  LegalInfoWrap,
} from './Footer.styled';
import SocialLinksList from '@GeneralComponents/SocialLinksList';
import { IProps } from './Footer.types';
import { useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';

const Footer: FC<IProps> = ({ isRootPage }) => {
  const { pathname } = useLocation();
  const isPromotionDetailsPage = pathname.startsWith(
    `${PagePaths.promotions}/`
  );
  const shouldShowLegalInfo = isPromotionDetailsPage;

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <StyledFooter
      isRootPage={isRootPage}
      isPromotionDetailsPage={isPromotionDetailsPage}
    >
      <SocialLinksList />
      <Copyright isRootPage={isRootPage}>
        © 2010-2024 ТОВ "АТБ-Маркет". Всі права захищено.
      </Copyright>
      {shouldShowLegalInfo && (
        <LegalInfoWrap>
          <LegalInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </LegalInfo>
        </LegalInfoWrap>
      )}
    </StyledFooter>
  );
};

export default Footer;
