import { FC } from 'react';
import { List, ListItem } from './PromotionContactsMapHeaderShopsList.styled';
import { IProps } from './PromotionContactsMapHeaderShopsList.types';
// components
import PromotionContactsMapShop from '@PromotionDetailsPageComponents/PromotionContactsMapShop';

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
        }) => {
          const checked = shopNum === activeShopNum;

          return (
            <ListItem key={shopNum}>
              <PromotionContactsMapShop
                checked={checked}
                value={shopNum}
                onChange={onInputChange}
                id={String(shopNum)}
                workSchedule={workHours}
                address={street}
                location={cityName}
              />
            </ListItem>
          );
        }
      )}
    </List>
  );
};

export default PromotionContactsMapHeaderShopsList;
