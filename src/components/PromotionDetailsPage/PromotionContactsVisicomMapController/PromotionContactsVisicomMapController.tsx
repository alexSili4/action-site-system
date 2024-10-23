import { FC, useEffect } from 'react';
import { IProps } from './PromotionContactsVisicomMapController.types';
import { useMap } from 'react-leaflet';

const PromotionContactsVisicomMapController: FC<IProps> = ({
  activeShopNum,
  shops,
}) => {
  const map = useMap();
  const targetMarker = shops.find(
    ({ shop_num: shopNum }) => shopNum === activeShopNum
  );

  useEffect(() => {
    if (targetMarker) {
      map.flyTo({
        lat: Number(targetMarker.geo_lat),
        lng: Number(targetMarker.geo_long),
      });
    }
  }, [map, targetMarker]);

  return null;
};

export default PromotionContactsVisicomMapController;
