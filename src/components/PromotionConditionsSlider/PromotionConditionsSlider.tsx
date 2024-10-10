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
import { IProps } from './PromotionConditionsSlider.types';
import PromotionConditionsSliderAnimation from '@/components/PromotionConditionsSliderAnimation';

const PromotionConditionsSlider: FC<IProps> = ({ conditions }) => {
  const [slideHeight, setSlideHeight] = useState<number | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const isLoopMode = conditions.length > 1;

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
        // autoplay={{ delay: 2000 }}
        speed={2000}
        spaceBetween={16}
        slidesPerView={1.075}
        loop={isLoopMode}
        grabCursor
        breakpoints={{
          [theme.breakpoints.desktop]: { slidesPerView: 3.077 },
        }}
      >
        {conditions.map(
          (
            { title, gift_num: giftNum, img_source_json: imgSourceJson },
            index
          ) => {
            const animationData = JSON.parse(imgSourceJson);

            return (
              <SwiperSlide key={index}>
                <Card>
                  <TitleWrap>
                    <Title>{title}</Title>
                  </TitleWrap>
                  <Cover>
                    <PromotionConditionsSliderAnimation
                      animationData={animationData}
                    />
                    <StepLabelWrap>
                      <StepLabel>{giftNum}</StepLabel>
                    </StepLabelWrap>
                  </Cover>
                </Card>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </Container>
  );
};

export default PromotionConditionsSlider;
