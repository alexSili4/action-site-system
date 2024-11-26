import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Container,
  Card,
  Image,
  ImgWrap,
  Title,
  TitleWrap,
  LogoPartner,
  LabelsWrap,
} from './PromotionPrizeImgSlider.styled';
import { Swiper as ISwiper } from 'swiper';
import { IProps } from './PromotionPrizeImgSlider.types';
import { getFileUrl } from '@/utils';
// components
import PromotionPrizeImgSliderStatusLabel from '@PromotionDetailsPageComponents/PromotionPrizeImgSliderStatusLabel';
import PromotionPrizeImgSliderPagination from '@PromotionDetailsPageComponents/PromotionPrizeImgSliderPagination';
import PromotionPrizeImgSliderControls from '@PromotionDetailsPageComponents/PromotionPrizeImgSliderControls';

const PromotionPrizeImgSlider: FC<IProps> = ({
  prize: {
    gift: { images, name },
    partner,
    gift_type: giftType,
  },
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isManyImages = images.length > 1;
  const { logo: logoPartner = '' } = partner ?? {};
  const logoPartnerUrl = getFileUrl(logoPartner);

  const onSlideChange = (swiper: ISwiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Container>
      <Swiper
        onSlideChange={onSlideChange}
        speed={800}
        spaceBetween={30}
        slidesPerView={1}
        grabCursor
      >
        {images.map((item, index) => {
          const { image = '' } = item ?? {};
          const imageUrl = getFileUrl(image);

          return (
            <SwiperSlide key={index}>
              <Card>
                <ImgWrap>
                  <Image src={imageUrl} alt={name} />
                </ImgWrap>
              </Card>
            </SwiperSlide>
          );
        })}
        <LabelsWrap>
          {logoPartner && <LogoPartner src={logoPartnerUrl} />}
          <PromotionPrizeImgSliderStatusLabel giftType={giftType} />
        </LabelsWrap>
        <TitleWrap>
          <Title>{name}</Title>
        </TitleWrap>
        {isManyImages && <PromotionPrizeImgSliderControls />}
        {isManyImages && (
          <PromotionPrizeImgSliderPagination
            images={images}
            activeIndex={activeIndex}
          />
        )}
      </Swiper>
    </Container>
  );
};

export default PromotionPrizeImgSlider;
