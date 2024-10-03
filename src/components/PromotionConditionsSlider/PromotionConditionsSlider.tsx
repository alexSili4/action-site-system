import { FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Card,
  Container,
  Cover,
  Title,
  TitleWrap,
  StepLabelWrap,
  StepLabel,
} from './PromotionConditionsSlider.styled';
import { theme } from '@/constants';
import { Autoplay } from 'swiper/modules';

const PromotionConditionsSlider: FC = () => {
  // TODO delete conditions
  const conditions: { title: string }[] = [
    { title: 'тут дуже довгий текст, а в інших слайдах його не буде' },
    { title: 'тут інший текст' },
    { title: 'тут інший текст2' },
    { title: 'тут інший текст3' },
    { title: 'тут інший текст4' },
    { title: 'тут інший текст5' },
  ];
  const [slideHeight, setSlideHeight] = useState<number | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slideHeight = sliderContainerRef.current?.scrollHeight;

    if (slideHeight) {
      setSlideHeight(slideHeight);
    }
  }, []);

  return (
    <Container ref={sliderContainerRef} slideHeight={slideHeight}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        speed={2000}
        spaceBetween={16}
        slidesPerView={1.075}
        loop
        grabCursor
        breakpoints={{
          [theme.breakpoints.desktop]: { slidesPerView: 3.077 },
        }}
      >
        {conditions.map(({ title }, index) => (
          <SwiperSlide key={title}>
            <Card>
              <TitleWrap>
                <Title>{title}</Title>
              </TitleWrap>
              <Cover>
                <StepLabelWrap>
                  <StepLabel>{index + 1}</StepLabel>
                </StepLabelWrap>
              </Cover>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default PromotionConditionsSlider;
