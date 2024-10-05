import { FC, useState } from 'react';
import PromotionContactsVisicomMap from '@/components/PromotionContactsVisicomMap';
import { ActiveMarkerId, Shops } from '@/types/types';
import { Container } from './PromotionContactsMap.styled';
import PromotionContactsMapHeader from '@/components/PromotionContactsMapHeader';

const PromotionContactsMap: FC = () => {
  // TODO elete markers
  const markers: Shops = [
    { id: 1, position: [50.4501, 30.5234], popupText: 'Киев' },
    { id: 2, position: [49.8383, 24.0232], popupText: 'Львов' },
    { id: 3, position: [48.9226, 24.7103], popupText: 'Ивано-Франковск' },
  ];

  const [activeMarkerId, setActiveMarkerId] = useState<ActiveMarkerId>(null);

  const setActiveMarker = (id: number) => {
    setActiveMarkerId(id);
  };

  return (
    <Container>
      <PromotionContactsMapHeader
        setActiveMarker={setActiveMarker}
        activeMarkerId={activeMarkerId}
        markers={markers}
      />
      <PromotionContactsVisicomMap
        setActiveMarker={setActiveMarker}
        activeMarkerId={activeMarkerId}
        markers={markers}
      />
    </Container>
  );
};

export default PromotionContactsMap;
