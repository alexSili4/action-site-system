import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Card,
  ImgWrap,
  Title,
  TitleWrap,
} from './PromotionPrizesSlider.styled';
import PromotionPrizesSliderControls from '@/components/PromotionPrizesSliderControls';

const PromotionPrizesSlider: FC = () => {
  // TODO delete prizes
  const prizes: { title: string }[] = [
    { title: 'Кавомашина PHILIPS 3шт' },
    { title: 'Мультипіч PHILIPS 10шт' },
    { title: 'Сертифікат на 200 грн в мережі магазинів Foxtrot' },
    { title: 'Сертифікат на 200 грн в мережі магазинів Люксоптика' },
    { title: 'Кухонна машина PHILIPS 5шт' },
  ];

  return (
    <Swiper
      modules={[Pagination]}
      speed={800}
      spaceBetween={30}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      grabCursor
    >
      {prizes.map(({ title }) => (
        <SwiperSlide>
          <Card>
            <ImgWrap></ImgWrap>
            <TitleWrap>
              <Title>{title}</Title>
            </TitleWrap>
          </Card>
        </SwiperSlide>
      ))}
      <PromotionPrizesSliderControls />
    </Swiper>
  );
};

export default PromotionPrizesSlider;
