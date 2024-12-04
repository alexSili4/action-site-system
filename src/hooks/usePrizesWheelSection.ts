import { IUsePrizesWheelSectionProps } from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import {
  getFinalTotalDegrees,
  getInitialTotalDegrees,
  getTargetPrize,
  makeBlur,
} from '@/utils';
import { useState } from 'react';

const usePrizesWheelSection = ({
  prizes,
  spinningMs,
  maxSpins,
}: IUsePrizesWheelSectionProps) => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [totalDegrees, setTotalDegrees] = useState<number>(0);
  const [prizeIdx, setPrizeIdx] = useState<number | null>(null);
  const [isWheelSpun, setIsWheelSpun] = useState<boolean>(false);

  const targetPrize = getTargetPrize({ prizeIdx, prizes });

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const initialTotalDegrees = getInitialTotalDegrees(maxSpins);

    setTotalDegrees(initialTotalDegrees);

    // TODO fix
    // fetchPrizeIdx
    setTimeout(() => {
      // TODO fix
      const newPrizeIdx = Math.floor(Math.random() * prizes.length);
      setPrizeIdx(newPrizeIdx);

      const finalTotalDegrees = getFinalTotalDegrees({
        prizesLength: prizes.length,
        newPrizeIdx,
        initialTotalDegrees,
      });
      setTotalDegrees(finalTotalDegrees);

      setTimeout(() => {
        setIsSpinning(false);
        setIsWheelSpun(true);
      }, spinningMs);
    }, 5000);
  };

  const onSpinWheelBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    if (isWheelSpun) return;

    spinWheel();
  };

  return {
    totalDegrees,
    prizeIdx,
    onSpinWheelBtnClick,
    isWheelSpun,
    targetPrize,
  };
};

export default usePrizesWheelSection;
