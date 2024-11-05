import { FC } from 'react';
import {
  Container,
  RegisterCodeLink,
  ContentWrap,
} from './PromotionPrizes.styled';
import { IProps } from './PromotionPrizes.types';

import PromotionPrizesBanner from '@PromotionDetailsPageComponents/PromotionPrizesBanner';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import PromotionPrizesList from '@PromotionDetailsPageComponents/PromotionPrizesList';
import { useRegisterCodeLink } from '@/hooks';

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
  const registerCodeLink = useRegisterCodeLink();

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
        {showRegCodeLink && (
          <RegisterCodeLink to={registerCodeLink}>
            Зареєструвати код
          </RegisterCodeLink>
        )}
      </ContentWrap>
    </Container>
  );
};

export default PromotionPrizes;
