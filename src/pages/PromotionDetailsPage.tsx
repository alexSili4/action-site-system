import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import {
  PromotionDetails,
  PromotionDetailsNavBar,
} from '@/components/PromotionDetailsPage';
import { usePromotionDetailsPage } from '@/hooks';

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
