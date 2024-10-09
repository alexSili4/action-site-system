import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Card,
  ImgWrap,
  Title,
  TitleWrap,
} from './PromotionPrizesSlider.styled';
import PromotionPrizesSliderControls from '@/components/PromotionPrizesSliderControls';
import PromotionPrizesSliderPagination from '@/components/PromotionPrizesSliderPagination';
import { Swiper as ISwiper } from 'swiper';
import { IProps } from './PromotionPrizesSlider.types';

const PromotionPrizesSlider: FC<IProps> = ({ prizes }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isLoopMode = prizes.length > 1;

  const onSlideChange = (swiper: ISwiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      onSlideChange={onSlideChange}
      speed={800}
      spaceBetween={30}
      slidesPerView={1}
      loop={isLoopMode}
      grabCursor
    >
      {prizes.map(({ name }) => (
        <SwiperSlide key={name}>
          <Card>
            <ImgWrap></ImgWrap>
            <TitleWrap>
              <Title>{name}</Title>
            </TitleWrap>
          </Card>
        </SwiperSlide>
      ))}
      <PromotionPrizesSliderControls />
      <PromotionPrizesSliderPagination
        prizes={prizes}
        activeIndex={activeIndex}
      />
    </Swiper>
  );
};

export default PromotionPrizesSlider;
