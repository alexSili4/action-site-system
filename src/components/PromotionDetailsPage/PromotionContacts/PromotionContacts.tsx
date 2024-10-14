import { FC } from 'react';
import {
  PromotionSectionTitle,
  PromotionContactsBanner,
  PromotionContactsMap,
} from '@/components/PromotionDetailsPage';
import { Container, ContentWrap } from './PromotionContacts.styled';
import { PromotionDetailsPageSections } from '@/constants';

const PromotionContacts: FC = () => {
  return (
    <Container id={PromotionDetailsPageSections.contacts}>
      <PromotionSectionTitle title='Контакти' />
      <ContentWrap>
        <PromotionContactsMap />
        <PromotionContactsBanner />
      </ContentWrap>
    </Container>
  );
};

export default PromotionContacts;
