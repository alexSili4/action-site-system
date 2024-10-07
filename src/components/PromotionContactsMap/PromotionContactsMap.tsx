import { FC, useState } from 'react';
import PromotionContactsVisicomMap from '@/components/PromotionContactsVisicomMap';
import { ActiveMarkerId, Shops } from '@/types/types';
import { Container } from './PromotionContactsMap.styled';
import PromotionContactsMapHeader from '@/components/PromotionContactsMapHeader';
import { smoothScroll } from '@/utils';

const PromotionContactsMap: FC = () => {
  // TODO elete markers
  const markers: Shops = [
    { id: 1, position: [50.4501, 30.5234], popupText: 'Київ' },
    { id: 2, position: [49.8383, 24.0232], popupText: 'Львів' },
    { id: 3, position: [48.9226, 24.7103], popupText: 'Івано-Франківськ' },
    { id: 4, position: [49.9935, 36.2304], popupText: 'Харків' },
    { id: 5, position: [46.4825, 30.7233], popupText: 'Одеса' },
    { id: 6, position: [48.6208, 22.2879], popupText: 'Ужгород' },
    { id: 7, position: [48.4647, 35.0462], popupText: 'Дніпро' },
    { id: 8, position: [49.5535, 25.5948], popupText: 'Тернопіль' },
    { id: 9, position: [49.5897, 34.5503], popupText: 'Полтава' },
    { id: 10, position: [50.6199, 26.2516], popupText: 'Рівне' },
    { id: 11, position: [47.8388, 35.1396], popupText: 'Запоріжжя' },
    { id: 12, position: [48.0066, 37.8058], popupText: 'Донецьк' },
    { id: 13, position: [47.0947, 37.5434], popupText: 'Маріуполь' },
    { id: 14, position: [50.2547, 28.6587], popupText: 'Житомир' },
    { id: 15, position: [49.2328, 28.481], popupText: 'Вінниця' },
    { id: 16, position: [49.4457, 32.0518], popupText: 'Черкаси' },
    { id: 17, position: [50.9077, 34.7981], popupText: 'Суми' },
    { id: 18, position: [51.4982, 31.2893], popupText: 'Чернігів' },
    { id: 19, position: [48.7345, 37.5792], popupText: 'Горлівка' },
    { id: 20, position: [46.9659, 31.9974], popupText: 'Миколаїв' },
  ];

  const [activeMarkerId, setActiveMarkerId] = useState<ActiveMarkerId>(null);

  const setActiveMarker = (id: number) => {
    setActiveMarkerId(id);
    smoothScroll(String(id));
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
