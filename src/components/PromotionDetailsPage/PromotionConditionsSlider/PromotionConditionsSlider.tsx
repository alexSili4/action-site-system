import { FC } from 'react';
import { getFileUrl } from '@/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import rulesCardBg from '@/images/conditions/rules-bg.jpg';
import { IoDocumentOutline } from 'react-icons/io5';
import { IProps } from './PromotionConditionsSlider.types';
import { theme } from '@/constants';
import {
  Card,
  Cover,
  Image,
  RulesLink,
  RulesLinkTitle,
  StepLabel,
  StepLabelWrap,
  Title,
  TitleWrap,
} from './PromotionConditionsSlider.styled';
import PromotionConditionsListAnimation from '@PromotionDetailsPageComponents/PromotionConditionsListAnimation';
// components
import PromotionConditionsSliderControls from '@PromotionDetailsPageComponents/PromotionConditionsSliderControls';
import PromotionConditionsSliderPagination from '@PromotionDetailsPageComponents/PromotionConditionsSliderPagination';

const PromotionConditionsSlider: FC<IProps> = ({
  rulesPdf,
  conditions,
  slideHeight,
  activeIndex,
  onSlideChange,
  setActiveIndexByIndex,
}) => {
  const isManyConditions = conditions.length > 1;
  const shouldShowSliderPagination = isManyConditions && slideHeight;
  const lastStepNum = conditions.length + 1;

  return (
    <Swiper
      onSlideChange={onSlideChange}
      slidesPerView={1.075}
      grabCursor={true}
      breakpoints={{
        [theme.breakpoints.tablet]: { slidesPerView: 2.12 },
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
          <Card>
            <TitleWrap>
              <Title>Умови акції</Title>
            </TitleWrap>
            <Cover bgImgUrl={rulesCardBg}>
              <RulesLink
                href={rulesPdf}
                download='rules'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <RulesLinkTitle>Правила акції</RulesLinkTitle>
                <IoDocumentOutline size={theme.iconSizes.rulesLink} />
              </RulesLink>
              <StepLabelWrap>
                <StepLabel>{lastStepNum}</StepLabel>
              </StepLabelWrap>
            </Cover>
          </Card>
        </SwiperSlide>
      )}
      {slideHeight && <PromotionConditionsSliderControls />}
      {shouldShowSliderPagination && (
        <PromotionConditionsSliderPagination
          setActiveIndexByIndex={setActiveIndexByIndex}
          conditions={[...conditions, {}]}
          activeIndex={activeIndex}
        />
      )}
    </Swiper>
  );
};

export default PromotionConditionsSlider;
