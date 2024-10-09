import { FC } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import PromotionDetails from '@/components/PromotionDetails';
import PromotionDetailsNavBar from '@/components/PromotionDetailsNavBar';
import { usePromotionDetailsPage } from '@/hooks';

const PromotionDetailsPage: FC = () => {
  const { conditions, faqs, prizes } = usePromotionDetailsPage();

  return (
    <>
      <Section>
        <Container>
          <PromotionDetails
            faqs={faqs}
            prizes={prizes}
            conditions={conditions}
          />
        </Container>
      </Section>
      <PromotionDetailsNavBar />
    </>
  );
};

export default PromotionDetailsPage;
