import { FC } from 'react';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import PromotionContactsBanner from '@/components/PromotionContactsBanner';
import { Container, ContentWrap } from './PromotionContacts.styled';

const PromotionContacts: FC = () => {
  return (
    <Container>
      <PromotionSectionTitle title='Контакти' />
      <ContentWrap>
        <div>map</div>
        <PromotionContactsBanner />
      </ContentWrap>
    </Container>
  );
};

export default PromotionContacts;
