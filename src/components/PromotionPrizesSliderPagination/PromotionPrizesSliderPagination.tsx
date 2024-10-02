import { FC, useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import {
  Button,
  List,
  ListItem,
} from './PromotionPrizesSliderPagination.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const PromotionPrizesSliderPagination: FC = () => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex);
    };

    swiper.on('slideChange', handleSlideChange);

    return () => {
      swiper.off('slideChange', handleSlideChange);
    };
  }, [swiper]);

  const onPaginationBtnClick = (index: number) => {
    swiper.slideTo(index);
    setActiveIndex(index);
  };

  return (
    <List>
      {swiper.slides.map((_, index) => {
        const isActiveBtn = index === activeIndex;

        const onClick = (e: BtnClickEvent) => {
          makeBlur(e.currentTarget);

          onPaginationBtnClick(index);
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
