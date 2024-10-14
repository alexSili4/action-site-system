import { FC, useEffect } from 'react';
import { IProps } from './PromotionContactsVisicomMapController.types';
import { useMap } from 'react-leaflet';

const PromotionContactsVisicomMapController: FC<IProps> = ({
  activeMarkerId,
  markers,
}) => {
  const map = useMap();
  const targetMarker = markers.find(({ id }) => id === activeMarkerId);

  useEffect(() => {
    if (targetMarker) {
      map.flyTo({
        lat: targetMarker.position[0],
        lng: targetMarker.position[1],
      });
    }
  }, [map, targetMarker]);

  return null;
};

export default PromotionContactsVisicomMapController;
