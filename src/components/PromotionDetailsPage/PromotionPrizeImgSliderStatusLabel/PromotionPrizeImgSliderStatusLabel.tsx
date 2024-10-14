import { FC } from 'react';
import WheelIcon from '@/icons/prizes/wheel.svg?react';
import { StatusLabel } from './PromotionPrizeImgSliderStatusLabel.styled';
import { IProps } from './PromotionPrizeImgSliderStatusLabel.types';

const PromotionPrizeImgSliderStatusLabel: FC<IProps> = ({ giftType }) => {
  const isWheelType = giftType === 'wheel';

  return (
    isWheelType && (
      <StatusLabel>
        <WheelIcon />
      </StatusLabel>
    )
  );
};

export default PromotionPrizeImgSliderStatusLabel;
