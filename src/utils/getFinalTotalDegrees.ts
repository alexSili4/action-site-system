import { IGetFinalTotalDegreesProps } from '@/types/types';

const getFinalTotalDegrees = ({
  prizesLength,
  newPrizeIdx,
  initialTotalDegrees,
}: IGetFinalTotalDegreesProps): number => {
  const degreesPerSector = 360 / prizesLength;
  const baseRotation = degreesPerSector * newPrizeIdx;
  const randomOffset = Math.random() * 30 - 15;
  const targetDegree = 360 - (baseRotation + randomOffset);

  const finalTotalDegrees = initialTotalDegrees + targetDegree;

  return finalTotalDegrees;
};

export default getFinalTotalDegrees;
