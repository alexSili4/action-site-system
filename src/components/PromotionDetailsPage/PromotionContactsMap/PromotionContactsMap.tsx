import { FC, useState } from 'react';
import { ActiveShopNum } from '@/types/shop.types';
import { Container } from './PromotionContactsMap.styled';
import { smoothScroll } from '@/utils';
import { IProps } from './PromotionContactsMap.types';
// components
import PromotionContactsVisicomMap from '@PromotionDetailsPageComponents/PromotionContactsVisicomMap';
import PromotionContactsMapHeader from '@PromotionDetailsPageComponents/PromotionContactsMapHeader';

const PromotionContactsMap: FC<IProps> = ({ shops, isNationalPromotion }) => {
  const [activeShopNum, setActiveShopNum] = useState<ActiveShopNum>(null);
  const targetShops = isNationalPromotion ? [] : shops;

  const setActiveShop = (id: number) => {
    setActiveShopNum(id);
    smoothScroll({ id: String(id), block: 'nearest' });
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
