import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import PromotionDetails from '@PromotionDetailsPageComponents/PromotionDetails';
import { usePromotionDetailsPage } from '@/hooks';
import PromotionDetailsNavBar from '@PromotionDetailsPageComponents/PromotionDetailsNavBar';

const PromotionDetailsPage: FC = () => {
  const { conditions, faqs, prizes, winners } = usePromotionDetailsPage();

  return (
    <>
      <Section>
        <Container>
          <PromotionDetails
            faqs={faqs}
            prizes={prizes}
            conditions={conditions}
            winners={winners}
          />
        </Container>
      </Section>
      <PromotionDetailsNavBar />
    </>
  );
};

export default PromotionDetailsPage;
