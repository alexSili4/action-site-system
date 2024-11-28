import { FC } from 'react';
import {
  StyledFooter,
  Copyright,
  LegalInfo,
  LegalInfoWrap,
  SunLink,
} from './Footer.styled';
import {
  useIsPromotionDetailsPage,
  useIsRootPage,
  useTargetPromotionData,
} from '@/hooks';
// components
import SocialLinksList from '@GeneralComponents/SocialLinksList';

const Footer: FC = () => {
  const { legalText } = useTargetPromotionData();
  const isRootPage = useIsRootPage();
  const isPromotionDetailsPage = useIsPromotionDetailsPage();
  const shouldShowLegalInfo = isPromotionDetailsPage && legalText;

  return (
    <StyledFooter
      isRootPage={isRootPage}
      isPromotionDetailsPage={isPromotionDetailsPage}
    >
      <SocialLinksList />
      <Copyright isRootPage={isRootPage}>
        © 2010-2024 ТОВ "АТБ-Маркет". Всі права захищено.
      </Copyright>
      <SunLink
        href='https://sun.agency/'
        target='_blank'
        rel='noopener noreferrer nofollow'
        isRootPage={isRootPage}
      >
        Зроблено Сонцем ●
      </SunLink>
      {shouldShowLegalInfo && (
        <LegalInfoWrap>
          <LegalInfo dangerouslySetInnerHTML={{ __html: legalText }} />
        </LegalInfoWrap>
      )}
    </StyledFooter>
  );
};

export default Footer;
