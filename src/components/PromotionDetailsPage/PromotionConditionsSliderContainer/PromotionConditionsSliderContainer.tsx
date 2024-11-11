import { FC, useEffect, useRef, useState } from 'react';
import {
  Container,
  RulesCard,
  RulesLink,
  RulesLinkTitle,
  Card,
  TitleWrap,
  Title,
  Cover,
  StepLabelWrap,
  StepLabel,
  Image,
} from './PromotionConditionsSliderContainer.styled';
import { theme } from '@/constants';
import { IProps } from './PromotionConditionsSliderContainer.types';
import { DivRef } from '@/types/types';
import { useTargetPromotionData } from '@/hooks';
import { getFileUrl } from '@/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import PromotionConditionsListAnimation from '@PromotionDetailsPageComponents/PromotionConditionsListAnimation';
import rulesCardBg from '@/images/conditions/rules-bg.jpg';
import { IoDocumentOutline } from 'react-icons/io5';
import { Swiper as ISwiper } from 'swiper';
import PromotionConditionsSliderControls from '@PromotionDetailsPageComponents/PromotionConditionsSliderControls';
import PromotionConditionsSliderPagination from '@PromotionDetailsPageComponents/PromotionConditionsSliderPagination';

const PromotionConditionsSliderContainer: FC<IProps> = ({ conditions }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideHeight, setSlideHeight] = useState<number | null>(null);
  const sliderContainerRef = useRef<DivRef>(null);
  const shouldChangeHeight = useRef(true);
  const { rulesPdf } = useTargetPromotionData();
  const sliderContainerHeight = sliderContainerRef.current?.scrollHeight;
  const isManyConditions = conditions.length > 1;

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
      <Swiper
        onSlideChange={onSlideChange}
        slidesPerView={1.075}
        grabCursor={true}
        breakpoints={{
          [theme.breakpoints.desktop]: { slidesPerView: 3.077 },
        }}
      >
        {conditions.map(
          (
            {
              title,
              gift_num: giftNum,
              img_source_json: imgSourceJson,
              main_img: mainImg,
            },
            idx
          ) => {
            const animationData = imgSourceJson && JSON.parse(imgSourceJson);
            const isAnimation = Boolean(imgSourceJson);
            const mainImgUrl = getFileUrl(mainImg);

            return (
              <SwiperSlide key={idx}>
                <Card>
                  <TitleWrap>
                    <Title>{title}</Title>
                  </TitleWrap>
                  <Cover>
                    {isAnimation ? (
                      <PromotionConditionsListAnimation
                        animationData={animationData}
                      />
                    ) : (
                      <Image src={mainImgUrl} />
                    )}
                    <StepLabelWrap>
                      <StepLabel>{giftNum}</StepLabel>
                    </StepLabelWrap>
                  </Cover>
                </Card>
              </SwiperSlide>
            );
          }
        )}
        {slideHeight && (
          <SwiperSlide key={rulesPdf}>
            <RulesCard bgImgUrl={rulesCardBg}>
              <RulesLink
                href={rulesPdf}
                download='rules'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <RulesLinkTitle>Правила акції</RulesLinkTitle>
                <IoDocumentOutline size={theme.iconSizes.rulesLink} />
              </RulesLink>
            </RulesCard>
          </SwiperSlide>
        )}
        {slideHeight && <PromotionConditionsSliderControls />}
        {isManyConditions && (
          <PromotionConditionsSliderPagination
            setActiveIndexByIndex={setActiveIndexByIndex}
            conditions={[...conditions, {}]}
            activeIndex={activeIndex}
          />
        )}
      </Swiper>
    </Container>
  );
};

export default PromotionConditionsSliderContainer;
