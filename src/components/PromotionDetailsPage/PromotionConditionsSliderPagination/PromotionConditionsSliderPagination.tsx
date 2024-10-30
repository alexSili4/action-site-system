import { FC } from 'react';
import {
  Button,
  List,
  ListItem,
} from './PromotionConditionsSliderPagination.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { IProps } from './PromotionConditionsSliderPagination.types';
import { useSwiper } from 'swiper/react';

const PromotionConditionsSliderPagination: FC<IProps> = ({
  conditions,
  activeIndex,
}) => {
  const swiper = useSwiper();

  return (
    <List>
      {conditions.map((_, index) => {
        const isActiveBtn = index === activeIndex;

        const onClick = (e: BtnClickEvent) => {
          makeBlur(e.currentTarget);

          swiper.slideTo(index);
        };

        return (
          <ListItem key={index}>
            <Button
              type='button'
              onClick={onClick}
              isActiveBtn={isActiveBtn}
            ></Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default PromotionConditionsSliderPagination;
