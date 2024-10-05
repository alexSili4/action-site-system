import { FC, useState } from 'react';
import PromotionContactsVisicomMap from '@/components/PromotionContactsVisicomMap';

const PromotionContactsMap: FC = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const setActiveMarkerId = (id: number) => {
    setActiveMarker(id);
  };

  return <PromotionContactsVisicomMap setActiveMarker={setActiveMarkerId} />;
};

export default PromotionContactsMap;
