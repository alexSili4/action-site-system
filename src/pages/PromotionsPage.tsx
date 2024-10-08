import { FC } from 'react';
import Container from '@/components/Container';
import Promotions from '@/components/Promotions';
import Section from '@/components/Section';
import { usePromotionsPage } from '@/hooks';

const PromotionsPage: FC = () => {
  usePromotionsPage();

  return (
    <Section>
      <Container>
        <Promotions />
      </Container>
    </Section>
  );
};

export default PromotionsPage;
