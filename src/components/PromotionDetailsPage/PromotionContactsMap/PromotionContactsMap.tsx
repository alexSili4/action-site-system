import { FC, useState } from 'react';
import { ActiveMarkerId } from '@/types/types';
import { Container } from './PromotionContactsMap.styled';
import PromotionContactsMapHeader from '@PromotionDetailsPageComponents/PromotionContactsMapHeader';
import PromotionContactsVisicomMap from '@PromotionDetailsPageComponents/PromotionContactsVisicomMap';
import { smoothScroll } from '@/utils';
import { useTargetPromotionData } from '@/hooks';
import { IProps } from './PromotionContactsMap.types';

const PromotionContactsMap: FC<IProps> = ({ shops }) => {
  const [activeMarkerId, setActiveMarkerId] = useState<ActiveMarkerId>(null);
  const { coverageType } = useTargetPromotionData();
  const isNationalPromotion = coverageType === 'national';
  const targetShops = isNationalPromotion ? [] : shops;

  const setActiveMarker = (id: number) => {
    setActiveMarkerId(id);
    smoothScroll({ id: String(id), isNearestBlock: true });
  };

  return (
    <Container>
      <PromotionContactsMapHeader
        setActiveMarker={setActiveMarker}
        activeMarkerId={activeMarkerId}
        shops={targetShops}
        isNationalPromotion={isNationalPromotion}
      />
      <PromotionContactsVisicomMap
        setActiveMarker={setActiveMarker}
        activeMarkerId={activeMarkerId}
        shops={targetShops}
      />
    </Container>
  );
};

export default PromotionContactsMap;
