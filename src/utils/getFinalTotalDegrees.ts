import { IGetFinalTotalDegreesProps } from '@/types/types';

const getFinalTotalDegrees = ({
  partnersLength,
  newPartnerIdx,
  initialTotalDegrees,
}: IGetFinalTotalDegreesProps): number => {
  const degreesPerSector = 360 / partnersLength;
  const baseRotation = degreesPerSector * newPartnerIdx;
  const randomOffset = Math.random() * 30 - 15;
  const targetDegree = 360 - (baseRotation + randomOffset);

  const finalTotalDegrees = initialTotalDegrees + targetDegree;

  return finalTotalDegrees;
};

export default getFinalTotalDegrees;
