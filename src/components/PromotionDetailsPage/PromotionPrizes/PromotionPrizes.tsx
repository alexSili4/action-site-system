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
  title,
  description,
  logo,
  showRegCodeLink = true,
  id,
}) => {
  const bigPrizes = prizes.filter(
    ({ show_type: showType }) => showType === 'big'
  );
  const basePrizes = prizes.filter(
    ({ show_type: showType }) => showType === 'base'
  );

  const showBigPrizesList = Boolean(bigPrizes.length);
  const showBasePrizesList = Boolean(basePrizes.length);

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
        {showBasePrizesList && <PromotionPrizesList prizes={basePrizes} />}
        {showRegCodeLink && <PromotionRegisterCodeLink />}
      </ContentWrap>
    </Container>
  );
};

export default PromotionPrizes;
