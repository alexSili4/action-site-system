import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import PromotionDetails from '@PromotionDetailsPageComponents/PromotionDetails';
import { usePromotionDetailsPage } from '@/hooks';
import PromotionDetailsNavBar from '@PromotionDetailsPageComponents/PromotionDetailsNavBar';

const PromotionDetailsPage: FC = () => {
  const {
    conditions,
    faqs,
    otherPrizes,
    wheelPrizes,
    winners,
    shops,
    promotion,
  } = usePromotionDetailsPage();

  return (
    <>
      <Section>
        <Container>
          {promotion && (
            <PromotionDetails
              faqs={faqs}
              otherPrizes={otherPrizes}
              wheelPrizes={wheelPrizes}
              conditions={conditions}
              winners={winners}
              shops={shops}
              promotion={promotion}
            />
          )}
        </Container>
      </Section>
      <PromotionDetailsNavBar />
    </>
  );
};

export default PromotionDetailsPage;
