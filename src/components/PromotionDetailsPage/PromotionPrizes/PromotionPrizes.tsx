import { FC } from 'react';
import { Container, ContentWrap } from './PromotionPrizes.styled';
import { IProps } from './PromotionPrizes.types';
// components
import PromotionPrizesBanner from '@PromotionDetailsPageComponents/PromotionPrizesBanner';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import PromotionPrizesList from '@PromotionDetailsPageComponents/PromotionPrizesList';
import PromotionRegisterCodeLink from '@PromotionDetailsPageComponents/PromotionRegisterCodeLink';

const PromotionPrizes: FC<IProps> = ({
  prizes,
  bigPrizes,
  title,
  description,
  logo,
  showRegCodeLink = true,
  id,
  isShowRegCodeLink,
}) => {
  const showBigPrizesList = Boolean(bigPrizes.length);
  const showPrizesList = Boolean(prizes.length);
  const shouldShowRegCodeLink = isShowRegCodeLink && showRegCodeLink;

  return (
    <Container id={id}>
      <PromotionSectionTitle title={title} />
      <ContentWrap>
        {showBigPrizesList && (
          <PromotionPrizesBanner
            prizes={bigPrizes}
            description={description}
            logo={logo}
          />
        )}
        {showPrizesList && <PromotionPrizesList prizes={prizes} />}
        {shouldShowRegCodeLink && <PromotionRegisterCodeLink />}
      </ContentWrap>
    </Container>
  );
};

export default PromotionPrizes;
