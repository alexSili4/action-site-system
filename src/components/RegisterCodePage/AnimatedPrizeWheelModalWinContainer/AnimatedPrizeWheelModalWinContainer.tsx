import { FC } from 'react';
import { IProps } from './AnimatedPrizeWheelModalWinContainer.types';
import { AnimatePresence } from 'framer-motion';
// components
import AnimatedPrizeWheelModalWin from '@RegisterCodePageComponents/AnimatedPrizeWheelModalWin';
import { getFileUrl } from '@/utils';

const AnimatedPrizeWheelModalWinContainer: FC<IProps> = ({
  moveToNextStep,
  showModalWin,
  targetPrize,
}) => {
  const {
    price,
    partner: { logo },
    discount,
  } = targetPrize;
  const logoUrl = getFileUrl(logo);
  const prize = price ? `${price}₴` : `${discount}%`;

  return (
    <AnimatePresence>
      {showModalWin && (
        <AnimatedPrizeWheelModalWin
          moveToNextStep={moveToNextStep}
          logoUrl={logoUrl}
          prize={prize}
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedPrizeWheelModalWinContainer;
