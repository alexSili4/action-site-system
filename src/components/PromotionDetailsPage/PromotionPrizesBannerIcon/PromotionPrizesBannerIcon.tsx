import { FC } from 'react';
import { IProps } from './PromotionPrizesBannerIcon.types';
import { Image } from './PromotionPrizesBannerIcon.styled';

const PromotionPrizesBannerIcon: FC<IProps> = ({ src }) => {
  return <Image src={src} />;
};

export default PromotionPrizesBannerIcon;
