import { FC } from 'react';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import PromotionContactsBanner from '@PromotionDetailsPageComponents/PromotionContactsBanner';
import PromotionContactsMap from '@PromotionDetailsPageComponents/PromotionContactsMap';
import { Container, ContentWrap } from './PromotionContacts.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionContacts.types';

const PromotionContacts: FC<IProps> = ({ shops }) => {
  return (
    <Container id={PromotionDetailsPageSections.contacts}>
      <PromotionSectionTitle title='Контакти' />
      <ContentWrap>
        <PromotionContactsMap shops={shops} />
        <PromotionContactsBanner />
      </ContentWrap>
    </Container>
  );
};

export default PromotionContacts;
