import { FC } from 'react';
import { Container } from './PromotionContactsMapHeaderShopsListContainer.styled';
import { IProps } from './PromotionContactsMapHeaderShopsListContainer.types';
import PromotionContactsMapHeaderShopsList from '@PromotionDetailsPageComponents/PromotionContactsMapHeaderShopsList';
import PromotionContactsMapHeaderFullShopsList from '@PromotionDetailsPageComponents/PromotionContactsMapHeaderFullShopsList';

const PromotionContactsMapHeaderShopsListContainer: FC<IProps> = ({
  markers,
  activeMarkerId,
  isNationalPromotion,
  onInputChange,
  onLinkClick,
}) => {
  return (
    <Container isNationalPromotion={isNationalPromotion}>
      {isNationalPromotion ? (
        <PromotionContactsMapHeaderFullShopsList onLinkClick={onLinkClick} />
      ) : (
        <PromotionContactsMapHeaderShopsList
          onInputChange={onInputChange}
          activeMarkerId={activeMarkerId}
          markers={markers}
        />
      )}
    </Container>
  );
};

export default PromotionContactsMapHeaderShopsListContainer;
