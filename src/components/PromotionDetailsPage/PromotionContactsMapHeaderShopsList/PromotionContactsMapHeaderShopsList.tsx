import { FC } from 'react';
import { List, ListItem } from './PromotionContactsMapHeaderShopsList.styled';
import { IProps } from './PromotionContactsMapHeaderShopsList.types';
// components
import PromotionContactsMapShop from '@PromotionDetailsPageComponents/PromotionContactsMapShop';
import { generalSettings } from '@/constants';

const PromotionContactsMapHeaderShopsList: FC<IProps> = ({
  shops,
  onInputChange,
  activeShopNum,
}) => {
  return (
    <List>
      {shops.map(
        ({
          shop_num: shopNum,
          work_hours: workHours,
          street,
          city: { name: cityName },
          geo_lat: geoLat,
          geo_long: geoLong,
        }) => {
          const checked = shopNum === activeShopNum;

          const targetWorkHours = workHours
            ? workHours
            : generalSettings.defaultDataText;
          const activeMapMarker = Boolean(geoLong) && Boolean(geoLat);

          return (
            <ListItem key={shopNum}>
              <PromotionContactsMapShop
                checked={checked}
                value={shopNum}
                onChange={onInputChange}
                id={String(shopNum)}
                workHours={targetWorkHours}
                address={street}
                location={cityName}
                disabled={!activeMapMarker}
              />
            </ListItem>
          );
        }
      )}
    </List>
  );
};

export default PromotionContactsMapHeaderShopsList;
