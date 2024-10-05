import { FC } from 'react';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import PromotionContactsBanner from '@/components/PromotionContactsBanner';
import PromotionContactsMap from '@/components/PromotionContactsMap';
import { Container, ContentWrap } from './PromotionContacts.styled';

const PromotionContacts: FC = () => {
  return (
    <Container>
      <PromotionSectionTitle title='Контакти' />
      <ContentWrap>
        <PromotionContactsMap />
        <PromotionContactsBanner />
      </ContentWrap>
    </Container>
  );
};

export default PromotionContacts;
