import { FC } from 'react';
import { useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  Container,
  SliderBtn,
} from './PromotionConditionsSliderControls.styled';
import { theme } from '@/constants';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const PromotionConditionsSliderControls: FC = () => {
  const swiper = useSwiper();

  const onNextBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    swiper.slideNext();
  };

  const onPrevBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    swiper.slidePrev();
  };

  return (
    <Container>
      <SliderBtn type='button' onClick={onPrevBtnClick}>
        <FaChevronLeft size={theme.iconSizes.conditionsSliderBtn} />
      </SliderBtn>
      <SliderBtn type='button' onClick={onNextBtnClick}>
        <FaChevronRight size={theme.iconSizes.conditionsSliderBtn} />
      </SliderBtn>
    </Container>
  );
};

export default PromotionConditionsSliderControls;
