import { FC } from 'react';
import {
  Button,
  List,
  ListItem,
} from './PromotionPrizesSliderPagination.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { IProps } from './PromotionPrizesSliderPagination.types';
import { useSwiper } from 'swiper/react';

const PromotionPrizesSliderPagination: FC<IProps> = ({
  prizes,
  activeIndex,
}) => {
  const swiper = useSwiper();

  return (
    <List>
      {prizes.map((_, index) => {
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

export default PromotionPrizesSliderPagination;
