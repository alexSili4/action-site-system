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
  } = targetPrize;
  const logoUrl = getFileUrl(logo);

  return (
    <AnimatePresence>
      {showModalWin && (
        <AnimatedPrizeWheelModalWin
          moveToNextStep={moveToNextStep}
          logoUrl={logoUrl}
          price={price}
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedPrizeWheelModalWinContainer;
