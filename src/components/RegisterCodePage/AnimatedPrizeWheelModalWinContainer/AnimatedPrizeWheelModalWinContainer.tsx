import { FC } from 'react';
import { IProps } from './AnimatedPrizeWheelModalWinContainer.types';
import { AnimatePresence } from 'framer-motion';
// components
import AnimatedPrizeWheelModalWin from '@RegisterCodePageComponents/AnimatedPrizeWheelModalWin';

const AnimatedPrizeWheelModalWinContainer: FC<IProps> = ({
  moveToNextStep,
  showModalWin,
  targetPrize,
}) => {
  return (
    <AnimatePresence>
      {showModalWin && (
        <AnimatedPrizeWheelModalWin
          moveToNextStep={moveToNextStep}
          targetPrize={targetPrize}
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedPrizeWheelModalWinContainer;
