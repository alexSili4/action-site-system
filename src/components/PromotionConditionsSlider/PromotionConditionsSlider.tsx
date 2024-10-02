import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Card,
  Container,
  Cover,
  Title,
  TitleWrap,
} from './PromotionConditionsSlider.styled';
import { theme } from '@/constants';

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

  return (
    <Container>
      <Swiper
        speed={800}
        spaceBetween={16}
        slidesPerView={1.075}
        loop
        grabCursor
        breakpoints={{
          [theme.breakpoints.desktop]: { slidesPerView: 3.077 },
        }}
      >
        {conditions.map(({ title }) => (
          <SwiperSlide key={title}>
            <Card>
              <TitleWrap>
                <Title>{title}</Title>
              </TitleWrap>
              <Cover></Cover>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default PromotionConditionsSlider;
