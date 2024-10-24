import { FC } from 'react';
import { Container, RegisterCodeLink } from './PromotionPrizes.styled';
import { IProps } from './PromotionPrizes.types';
import { PagePaths, SearchParamsKeys } from '@/constants';
import PromotionPrizesBanner from '@PromotionDetailsPageComponents/PromotionPrizesBanner';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import PromotionPrizesList from '@PromotionDetailsPageComponents/PromotionPrizesList';
import { useCityId, usePromotionId } from '@/hooks';

const PromotionPrizes: FC<IProps> = ({
  prizes,
  title,
  description,
  logo,
  showRegCodeLink = true,
  id,
}) => {
  const cityId = useCityId();
  const promotionId = usePromotionId();
  const bigPrizes = prizes.filter(
    ({ show_type: showType }) => showType === 'big'
  );
  const basePrizes = prizes.filter(
    ({ show_type: showType }) => showType === 'base'
  );

  const showBigPrizesList = Boolean(bigPrizes.length);
  const showBasePrizesList = Boolean(basePrizes.length);

  const registerCodeLink = `${PagePaths.code}/${promotionId}?${SearchParamsKeys.cityId}=${cityId}`;

  return (
    <Container id={id}>
      <PromotionSectionTitle title={title} />
      {showBigPrizesList && (
        <PromotionPrizesBanner
          prizes={bigPrizes}
          description={description}
          logo={logo}
        />
      )}
      {showBasePrizesList && <PromotionPrizesList prizes={basePrizes} />}
      {showRegCodeLink && (
        <RegisterCodeLink to={registerCodeLink}>
          Зареєструвати код
        </RegisterCodeLink>
      )}
    </Container>
  );
};

export default PromotionPrizes;
