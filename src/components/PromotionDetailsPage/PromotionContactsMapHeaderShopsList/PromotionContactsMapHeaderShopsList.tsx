import { FC } from 'react';
import { List, ListItem } from './PromotionContactsMapHeaderShopsList.styled';
import PromotionContactsMapShop from '@PromotionDetailsPageComponents/PromotionContactsMapShop';
import { IProps } from './PromotionContactsMapHeaderShopsList.types';

const PromotionContactsMapHeaderShopsList: FC<IProps> = ({
  markers,
  onInputChange,
  activeMarkerId,
}) => {
  return (
    <List>
      {markers.map(({ id, popupText }) => {
        const checked = id === activeMarkerId;

        return (
          <ListItem key={id}>
            <PromotionContactsMapShop
              checked={checked}
              value={id}
              name={popupText}
              onChange={onInputChange}
              id={String(id)}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default PromotionContactsMapHeaderShopsList;
