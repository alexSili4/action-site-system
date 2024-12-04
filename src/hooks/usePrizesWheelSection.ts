import {
  IUsePrizesWheelSection,
  IUsePrizesWheelSectionProps,
} from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import {
  getFinalTotalDegrees,
  getInitialTotalDegrees,
  getTargetPartner,
  makeBlur,
} from '@/utils';
import { useState } from 'react';

const usePrizesWheelSection = ({
  partners,
  spinningMs,
  maxSpins,
}: IUsePrizesWheelSectionProps): IUsePrizesWheelSection => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [totalDegrees, setTotalDegrees] = useState<number>(0);
  const [partnerIdx, setPartnerIdx] = useState<number | null>(null);
  const [isWheelSpun, setIsWheelSpun] = useState<boolean>(false);

  const targetPartner = getTargetPartner({ partners, partnerIdx });

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const initialTotalDegrees = getInitialTotalDegrees(maxSpins);

    setTotalDegrees(initialTotalDegrees);

    // TODO fix
    // fetchPrizeIdx
    const newPartnerIdx = Math.floor(Math.random() * partners.length);
    setPartnerIdx(newPartnerIdx);

    const finalTotalDegrees = getFinalTotalDegrees({
      partnersLength: partners.length,
      newPartnerIdx,
      initialTotalDegrees,
    });
    setTotalDegrees(finalTotalDegrees);

    setTimeout(() => {
      setIsSpinning(false);
      setIsWheelSpun(true);
    }, spinningMs);
  };

  const onSpinWheelBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    if (isWheelSpun) return;

    spinWheel();
  };

  return {
    totalDegrees,
    onSpinWheelBtnClick,
    isWheelSpun,
    targetPartner,
  };
};

export default usePrizesWheelSection;
