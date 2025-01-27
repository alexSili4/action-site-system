import { FC } from 'react';
import { Container, ContentWrap } from './PromotionContacts.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionContacts.types';
// components
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import PromotionContactsBanner from '@PromotionDetailsPageComponents/PromotionContactsBanner';
import PromotionContactsMap from '@PromotionDetailsPageComponents/PromotionContactsMap';

const PromotionContacts: FC<IProps> = ({
  shops,
  hotLineEmail,
  hotLinePhone,
  bannerDt,
  bannerMob,
  isNationalPromotion,
  validHotLinePhone,
}) => {
  return (
    <Container id={PromotionDetailsPageSections.contacts}>
      <PromotionSectionTitle title='Контакти' />
      <ContentWrap>
        <PromotionContactsMap
          shops={shops}
          isNationalPromotion={isNationalPromotion}
        />
        <PromotionContactsBanner
          hotLineEmail={hotLineEmail}
          hotLinePhone={hotLinePhone}
          bannerDt={bannerDt}
          bannerMob={bannerMob}
          validHotLinePhone={validHotLinePhone}
        />
      </ContentWrap>
    </Container>
  );
};

export default PromotionContacts;
