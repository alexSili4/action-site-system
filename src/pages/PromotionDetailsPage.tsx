import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import PromotionDetails from '@PromotionDetailsPageComponents/PromotionDetails';
import { usePromotionDetailsPage } from '@/hooks';
import PromotionDetailsNavBar from '@PromotionDetailsPageComponents/PromotionDetailsNavBar';
import NotFoundError from '@ErrorPageComponents/NotFoundError';

const PromotionDetailsPage: FC = () => {
  const {
    conditions,
    faqs,
    otherPrizes,
    wheelPrizes,
    winners,
    shops,
    promotion,
    shouldShowPromotionDetails,
    isFinishedPromotion,
    isShowRegCodeLink,
    showPromotionsWinnersNavLink,
    showPromotionsPrizesNavLink,
  } = usePromotionDetailsPage();

  return (
    <>
      <Section>
        <Container>
          {shouldShowPromotionDetails ? (
            promotion && (
              <PromotionDetails
                isFinishedPromotion={isFinishedPromotion}
                isShowRegCodeLink={isShowRegCodeLink}
                faqs={faqs}
                otherPrizes={otherPrizes}
                wheelPrizes={wheelPrizes}
                conditions={conditions}
                winners={winners}
                shops={shops}
                promotion={promotion}
              />
            )
          ) : (
            <NotFoundError />
          )}
        </Container>
      </Section>
      <PromotionDetailsNavBar
        showPromotionsWinnersNavLink={showPromotionsWinnersNavLink}
        showPromotionsPrizesNavLink={showPromotionsPrizesNavLink}
      />
    </>
  );
};

export default PromotionDetailsPage;
