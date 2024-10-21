import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './PromotionConditionsSliderAnimation.types';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { Container } from './PromotionConditionsSliderAnimation.styled';
import { DivRef } from '@/types/types';

const PromotionConditionsSliderAnimation: FC<IProps> = ({ animationData }) => {
  const [scale, setScale] = useState<number>(0);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const containerRef = useRef<DivRef>(null);

  useEffect(() => {
    const containerWidth = containerRef.current?.scrollWidth ?? 0;
    const containerHeight = containerRef.current?.scrollHeight ?? 0;

    const animationWidth =
      lottieRef.current?.animationContainerRef.current?.scrollWidth ?? 0;
    const animationHeight =
      lottieRef.current?.animationContainerRef.current?.scrollHeight ?? 0;

    const horizontalScale = containerWidth / animationWidth;
    const verticalScale = containerHeight / animationHeight;

    const scale = Math.max(horizontalScale, verticalScale);

    setScale(scale);
  }, []);

  const onMouseEnter = () => {
    lottieRef.current?.setDirection(1);
    lottieRef.current?.play();
  };

  const onMouseLeave = () => {
    lottieRef.current?.setDirection(-1);
    lottieRef.current?.play();
  };

  return (
    <Container
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={containerRef}
      scale={scale}
    >
      <Lottie
        animationData={animationData}
        lottieRef={lottieRef}
        loop={false}
        autoplay={false}
      />
    </Container>
  );
};

export default PromotionConditionsSliderAnimation;
