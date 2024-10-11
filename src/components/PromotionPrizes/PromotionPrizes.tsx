import { FC } from 'react';
import { Container, RegisterCodeLink } from './PromotionPrizes.styled';
import PromotionPrizesList from '@/components/PromotionPrizesList';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import { IProps } from './PromotionPrizes.types';
import { PagePaths } from '@/constants';
import PromotionPrizesBanner from '@/components/PromotionPrizesBanner';

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
      {showBigPrizesList && (
        <PromotionPrizesBanner
          prizes={bigPrizes}
          description={description}
          logo={logo}
        />
      )}
      {showBasePrizesList && <PromotionPrizesList prizes={basePrizes} />}
      {showRegCodeLink && (
        <RegisterCodeLink to={PagePaths.code}>
          Зареєструвати код
        </RegisterCodeLink>
      )}
    </Container>
  );
};

export default PromotionPrizes;
