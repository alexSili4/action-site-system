import { FC } from 'react';
import {
  ListWrap,
  List,
  ListItem,
} from './PromotionContactsMapHeaderShopsList.styled';
import PromotionContactsMapShop from '@/components/PromotionContactsMapShop';
import { InputChangeEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { IProps } from './PromotionContactsMapHeaderShopsList.types';

const PromotionContactsMapHeaderShopsList: FC<IProps> = ({
  markers,
  activeMarkerId,
  setActiveMarker,
}) => {
  return (
    <ListWrap>
      <List>
        {markers.map(({ id, popupText }) => {
          const checked = id === activeMarkerId;

          const onPromotionContactsMapShopChange = (e: InputChangeEvent) => {
            makeBlur(e.currentTarget);

            setActiveMarker(Number(e.currentTarget.value));
          };

          return (
            <ListItem key={id}>
              <PromotionContactsMapShop
                checked={checked}
                value={id}
                name={popupText}
                onChange={onPromotionContactsMapShopChange}
                id={String(id)}
              />
            </ListItem>
          );
        })}
      </List>
    </ListWrap>
  );
};

export default PromotionContactsMapHeaderShopsList;
