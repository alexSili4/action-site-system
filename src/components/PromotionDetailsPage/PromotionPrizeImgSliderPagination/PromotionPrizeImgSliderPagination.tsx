import { FC } from 'react';
import {
  Button,
  List,
  ListItem,
} from './PromotionPrizeImgSliderPagination.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { IProps } from './PromotionPrizeImgSliderPagination.types';
import { useSwiper } from 'swiper/react';

const PromotionPrizesSliderPagination: FC<IProps> = ({
  images,
  activeIndex,
}) => {
  const swiper = useSwiper();

  return (
    <List>
      {images.map((_, index) => {
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
