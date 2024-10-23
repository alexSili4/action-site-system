import { FC } from 'react';
import { List, ListItem } from './PromotionContactsMapHeaderShopsList.styled';
import PromotionContactsMapShop from '@PromotionDetailsPageComponents/PromotionContactsMapShop';
import { IProps } from './PromotionContactsMapHeaderShopsList.types';

const PromotionContactsMapHeaderShopsList: FC<IProps> = ({
  shops,
  onInputChange,
  activeShopNum,
}) => {
  return (
    <List>
      {shops.map(({ shop_num: shopNum, work_hours: workHours, street }) => {
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
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default PromotionContactsMapHeaderShopsList;
