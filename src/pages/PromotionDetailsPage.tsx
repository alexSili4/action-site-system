import { FC } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import PromotionDetails from '@/components/PromotionDetails';

const PromotionDetailsPage: FC = () => {
  return (
    <Section>
      <Container>
        <PromotionDetails />
      </Container>
    </Section>
  );
};

export default PromotionDetailsPage;
