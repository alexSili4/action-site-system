import { FC, useState } from 'react';
import PromotionContactsVisicomMap from '@/components/PromotionContactsVisicomMap';
import { ActiveMarkerId } from '@/types/types';

const PromotionContactsMap: FC = () => {
  const [activeMarkerId, setActiveMarkerId] = useState<ActiveMarkerId>(null);

  const setActiveMarker = (id: number) => {
    setActiveMarkerId(id);
  };

  return (
    <PromotionContactsVisicomMap
      setActiveMarker={setActiveMarker}
      activeMarkerId={activeMarkerId}
    />
  );
};

export default PromotionContactsMap;
