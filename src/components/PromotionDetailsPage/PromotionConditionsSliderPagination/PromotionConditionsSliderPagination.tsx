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
  const isFullConditionsList = conditions.length > 3;

  useEffect(() => {
    swiper.slideTo(activeIndex);
  }, [activeIndex, swiper]);

  return (
    <List>
      {conditions.map((_, index) => {
        const lastIndex = conditions.length - 1;
        const isLastIndex = index === lastIndex;
        const isAnExtraIndex = isLastIndex || index === lastIndex - 1;
        const isActiveBtn = index === activeIndex;
        const isAnExtraDeskButton = isFullConditionsList && isAnExtraIndex;
        const isAnExtraTabletButton = isFullConditionsList && isLastIndex;


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
              isAnExtraDeskButton={isAnExtraDeskButton}
              isAnExtraTabletButton={isAnExtraTabletButton}
            ></Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default PromotionConditionsSliderPagination;
