import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Card,
  Image,
  ImgWrap,
  StatusLabel,
  Title,
  TitleWrap,
} from './PromotionPrizeImgSlider.styled';
import PromotionPrizeImgSliderControls from '@/components/PromotionPrizeImgSliderControls';
import PromotionPrizeImgSliderPagination from '@/components/PromotionPrizeImgSliderPagination';
import { Swiper as ISwiper } from 'swiper';
import { IProps } from './PromotionPrizeImgSlider.types';
import { getFileUrl } from '@/utils';

const PromotionPrizeImgSlider: FC<IProps> = ({
  prize: {
    gift: { images, name },
  },
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isLoopMode = images.length > 1;

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
      {images.map(({ image }, index) => {
        const imageUrl = getFileUrl(image);

        return (
          <SwiperSlide key={index}>
            <StatusLabel></StatusLabel>
            <Card>
              <ImgWrap>
                <Image src={imageUrl} alt={name} />
              </ImgWrap>
            </Card>
          </SwiperSlide>
        );
      })}
      <TitleWrap>
        <Title>{name}</Title>
      </TitleWrap>
      <PromotionPrizeImgSliderControls />
      <PromotionPrizeImgSliderPagination
        images={images}
        activeIndex={activeIndex}
      />
    </Swiper>
  );
};

export default PromotionPrizeImgSlider;
