import { FC } from 'react';
import Promotions from '@/components/Promotions';
import { Container, Section } from '@/components/General';

const PromotionsPage: FC = () => {
  return (
    <Section>
      <Container>
        <Promotions />
      </Container>
    </Section>
  );
};

export default PromotionsPage;
