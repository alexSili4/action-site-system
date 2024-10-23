import { FC, useState } from 'react';
import { ActiveShopNum } from '@/types/shop.types';
import { Container } from './PromotionContactsMap.styled';
import PromotionContactsMapHeader from '@PromotionDetailsPageComponents/PromotionContactsMapHeader';
import PromotionContactsVisicomMap from '@PromotionDetailsPageComponents/PromotionContactsVisicomMap';
import { smoothScroll } from '@/utils';
import { useTargetPromotionData } from '@/hooks';
import { IProps } from './PromotionContactsMap.types';

const PromotionContactsMap: FC<IProps> = ({ shops }) => {
  const [activeShopNum, setActiveShopNum] = useState<ActiveShopNum>(null);
  const { coverageType } = useTargetPromotionData();
  const isNationalPromotion = coverageType === 'national';
  const targetShops = isNationalPromotion ? [] : shops;

  const setActiveShop = (id: number) => {
    setActiveShopNum(id);
    smoothScroll({ id: String(id), isNearestBlock: true });
  };

  return (
    <Container>
      <PromotionContactsMapHeader
        setActiveShop={setActiveShop}
        activeShopNum={activeShopNum}
        shops={targetShops}
        isNationalPromotion={isNationalPromotion}
      />
      <PromotionContactsVisicomMap
        setActiveShop={setActiveShop}
        activeShopNum={activeShopNum}
        shops={targetShops}
      />
    </Container>
  );
};

export default PromotionContactsMap;
