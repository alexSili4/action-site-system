import { FC } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import PromotionDetails from '@/components/PromotionDetails';
import PromotionDetailsNavBar from '@/components/PromotionDetailsNavBar';

const PromotionDetailsPage: FC = () => {
  return (
    <>
      <Section>
        <Container>
          <PromotionDetails />
        </Container>
      </Section>
      <PromotionDetailsNavBar />
    </>
  );
};

export default PromotionDetailsPage;
