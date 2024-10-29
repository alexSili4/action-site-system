import { FC } from 'react';
import { useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  Container,
  SliderBtn,
} from './PromotionConditionsSliderControls.styled';
import { theme } from '@/constants';

const PromotionConditionsSliderControls: FC = () => {
  const swiper = useSwiper();

  const onNextBtnClick = () => {
    swiper.slideNext();
  };

  const onPrevBtnClick = () => {
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
