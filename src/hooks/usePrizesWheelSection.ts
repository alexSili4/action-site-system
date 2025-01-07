import codesService from '@/services/codes.service';
import { IGift } from '@/types/code.types';
import {
  IUsePrizesWheelSection,
  IUsePrizesWheelSectionProps,
} from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import {
  getFinalTotalDegrees,
  getInitialTotalDegrees,
  makeBlur,
} from '@/utils';
import { useState } from 'react';
import useServiceUnavailablePageNavigate from './useServiceUnavailablePageNavigate';

const usePrizesWheelSection = ({
  partners,
  spinningMs,
  maxSpins,
  codeId,
}: IUsePrizesWheelSectionProps): IUsePrizesWheelSection => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [totalDegrees, setTotalDegrees] = useState<number>(0);
  const [isWheelSpun, setIsWheelSpun] = useState<boolean>(false);
  const [targetPrize, setTargetPrize] = useState<IGift | null>(null);
  const navigate = useServiceUnavailablePageNavigate();
  const sectorSize = 360 / partners.length;
  const sectorGradientStart = 360 - sectorSize / 2;
  const isOddPartnersNumber = Boolean(partners.length % 2);

  const fetchPrizeIdx = async (codeId: number) => {
    setIsSpinning(true);

    const initialTotalDegrees = getInitialTotalDegrees(maxSpins);

    setTotalDegrees(initialTotalDegrees);

    try {
      const response = await codesService.spinWheel(codeId);

      const { gift } = response;

      const {
        partner: { id: newPartnerIdx },
      } = gift;
      const finalTotalDegrees = getFinalTotalDegrees({
        partners,
        newPartnerIdx,
        initialTotalDegrees,
      });
      setTargetPrize(gift);
      setTotalDegrees(finalTotalDegrees);

      setTimeout(() => {
        setIsSpinning(false);
        setIsWheelSpun(true);
      }, spinningMs);
    } catch (error) {
      navigate(true);
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
    targetPrize,
    sectorSize,
    sectorGradientStart,
    isOddPartnersNumber,
  };
};

export default usePrizesWheelSection;
