import { FC, useEffect } from 'react';
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
  setActiveIndexByIndex,
}) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(activeIndex);
  }, [activeIndex, swiper]);

  return (
    <List>
      {conditions.map((_, index) => {
        const isActiveBtn = index === activeIndex;

        const onClick = (e: BtnClickEvent) => {
          makeBlur(e.currentTarget);

          setActiveIndexByIndex(index);
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
