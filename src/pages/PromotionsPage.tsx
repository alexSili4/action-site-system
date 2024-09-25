import Container from '@/components/Container';
import Promotions from '@/components/Promotions';
import Section from '@/components/Section';
import { FC } from 'react';

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
