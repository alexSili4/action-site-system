import { FC } from 'react';
import { Container } from './PromotionContactsMapHeaderShopsListContainer.styled';
import { IProps } from './PromotionContactsMapHeaderShopsListContainer.types';
// components
import PromotionContactsMapHeaderShopsList from '@PromotionDetailsPageComponents/PromotionContactsMapHeaderShopsList';
import PromotionContactsMapHeaderFullShopsList from '@PromotionDetailsPageComponents/PromotionContactsMapHeaderFullShopsList';

const PromotionContactsMapHeaderShopsListContainer: FC<IProps> = ({
  shops,
  isNationalPromotion,
  onInputChange,
  onLinkClick,
  activeShopNum,
}) => {
  return (
    <Container isNationalPromotion={isNationalPromotion}>
      {isNationalPromotion ? (
        <PromotionContactsMapHeaderFullShopsList onLinkClick={onLinkClick} />
      ) : (
        <PromotionContactsMapHeaderShopsList
          onInputChange={onInputChange}
          activeShopNum={activeShopNum}
          shops={shops}
        />
      )}
    </Container>
  );
};

export default PromotionContactsMapHeaderShopsListContainer;
