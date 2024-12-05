import codesService from '@/services/codes.service';
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
  codeId,
}: IUsePrizesWheelSectionProps): IUsePrizesWheelSection => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [totalDegrees, setTotalDegrees] = useState<number>(0);
  const [partnerIdx, setPartnerIdx] = useState<number | null>(null);
  const [isWheelSpun, setIsWheelSpun] = useState<boolean>(false);

  const targetPartner = getTargetPartner({ partners, partnerIdx });

  const fetchPrizeIdx = async (codeId: number) => {
    setIsSpinning(true);

    const initialTotalDegrees = getInitialTotalDegrees(maxSpins);

    setTotalDegrees(initialTotalDegrees);

    try {
      const response = await codesService.spinWheel(codeId);

      const {
        gift: {
          partner: { id: newPartnerIdx },
        },
      } = response;

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
    } catch (error) {
      // TODO error handler
    }
  };

  const spinWheel = () => {
    if (isSpinning) return;

    fetchPrizeIdx(codeId);
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
