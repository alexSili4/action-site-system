import { FC } from 'react';
import {
  StyledFooter,
  Copyright,
  LegalInfo,
  LegalInfoWrap,
  SunLink,
} from './Footer.styled';
import SocialLinksList from '@GeneralComponents/SocialLinksList';
import {
  useTargetPromotionData,
  useIsPromotionDetailsPage,
  useIsRootPage,
} from '@/hooks';

const Footer: FC = () => {
  const isRootPage = useIsRootPage();
  const { legalText } = useTargetPromotionData();
  const isPromotionDetailsPage = useIsPromotionDetailsPage();
  const shouldShowLegalInfo = isPromotionDetailsPage;

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
