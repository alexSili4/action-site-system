import { FC } from 'react';
import { IProps } from './AnimatedPrizeWheelModalWinContainer.types';
import { AnimatePresence } from 'framer-motion';
// components
import AnimatedPrizeWheelModalWin from '@RegisterCodePageComponents/AnimatedPrizeWheelModalWin';
import { getFileUrl } from '@/utils';

const AnimatedPrizeWheelModalWinContainer: FC<IProps> = ({
  moveToNextStep,
  showModalWin,
  targetPartner: { logo, name },
}) => {
  const logoUrl = getFileUrl(logo);

  return (
    <AnimatePresence>
      {showModalWin && (
        <AnimatedPrizeWheelModalWin
          moveToNextStep={moveToNextStep}
          logoUrl={logoUrl}
          partnerName={name}
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedPrizeWheelModalWinContainer;
