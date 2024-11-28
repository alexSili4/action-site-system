import { FC, useEffect, useRef, useState } from 'react';
import { Container } from './PromotionConditionsSliderContainer.styled';
import { theme } from '@/constants';
import { IProps } from './PromotionConditionsSliderContainer.types';
import { DivRef } from '@/types/types';
import { Swiper as ISwiper } from 'swiper';
// components
import PromotionConditionsSlider from '@PromotionDetailsPageComponents/PromotionConditionsSlider';

const PromotionConditionsSliderContainer: FC<IProps> = ({
  conditions,
  rulesPdf,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideHeight, setSlideHeight] = useState<number | null>(null);
  const sliderContainerRef = useRef<DivRef>(null);
  const shouldChangeHeight = useRef(true);
  const sliderContainerHeight = sliderContainerRef.current?.scrollHeight;

  const onSlideChange = (swiper: ISwiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const setActiveIndexByIndex = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const shouldChangeSliderContainerHeight =
      sliderContainerHeight && shouldChangeHeight.current;

    if (shouldChangeSliderContainerHeight) {
      setSlideHeight(sliderContainerHeight);
      shouldChangeHeight.current = false;
    }
  }, [sliderContainerHeight]);

  return (
    <Container
      paddingSideMobile={theme.spacing(4)}
      paddingSideDesk={theme.spacing(8)}
      ref={sliderContainerRef}
      slideHeight={slideHeight}
    >
      <PromotionConditionsSlider
        rulesPdf={rulesPdf}
        conditions={conditions}
        activeIndex={activeIndex}
        onSlideChange={onSlideChange}
        setActiveIndexByIndex={setActiveIndexByIndex}
        slideHeight={slideHeight}
      />
    </Container>
  );
};

export default PromotionConditionsSliderContainer;
