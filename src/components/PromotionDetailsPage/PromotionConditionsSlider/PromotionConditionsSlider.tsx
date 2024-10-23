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
  RulesCard,
  RulesLink,
  RulesLinkTitle,
} from './PromotionConditionsSlider.styled';
import { theme } from '@/constants';
import { IProps } from './PromotionConditionsSlider.types';
import PromotionConditionsSliderAnimation from '@PromotionDetailsPageComponents/PromotionConditionsSliderAnimation';
import { useTargetPromotionData } from '@/hooks';
import { IoDocumentOutline } from 'react-icons/io5';
import { getFileUrl } from '@/utils';
import rulesCardBg from '@/images/conditions/rules-bg.jpg';
import { DivRef } from '@/types/types';

const PromotionConditionsSlider: FC<IProps> = ({ conditions }) => {
  const { rulesPdf } = useTargetPromotionData();
  const [slideHeight, setSlideHeight] = useState<number | null>(null);
  const sliderContainerRef = useRef<DivRef>(null);
  const rulesPdfUrl = getFileUrl(rulesPdf);
  const deskSlidesPerView = 3.077;
  const isLoopMode = conditions.length > deskSlidesPerView;

  useEffect(() => {
    const slideHeight = sliderContainerRef.current?.scrollHeight;

    if (slideHeight) {
      setSlideHeight(slideHeight);
    }
  }, []);

  return (
    <Container ref={sliderContainerRef} slideHeight={slideHeight}>
      <Swiper
        speed={2000}
        spaceBetween={16}
        slidesPerView={1.075}
        loop={isLoopMode}
        grabCursor
        breakpoints={{
          [theme.breakpoints.desktop]: { slidesPerView: deskSlidesPerView },
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
        <SwiperSlide key={rulesPdfUrl}>
          <RulesCard bgImgUrl={rulesCardBg}>
            <RulesLink
              href={rulesPdfUrl}
              download
              target='_blank'
              rel='noopener noreferrer'
            >
              <RulesLinkTitle>Правила акції</RulesLinkTitle>
              <IoDocumentOutline size={theme.iconSizes.rulesLink} />
            </RulesLink>
          </RulesCard>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default PromotionConditionsSlider;
