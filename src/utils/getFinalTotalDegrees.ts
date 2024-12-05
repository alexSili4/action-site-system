import { IGetFinalTotalDegreesProps } from '@/types/types';

const getFinalTotalDegrees = ({
  partners,
  newPartnerIdx,
  initialTotalDegrees,
}: IGetFinalTotalDegreesProps): number => {
  const degreesPerSector = 360 / partners.length;
  const partnerIdx = partners.findIndex(({ id }) => id === newPartnerIdx);
  const baseRotation = degreesPerSector * partnerIdx;
  const randomOffset = Math.random() * 30 - 15;
  const targetDegree = 360 - (baseRotation + randomOffset);

  const finalTotalDegrees = initialTotalDegrees + targetDegree;

  return finalTotalDegrees;
};

export default getFinalTotalDegrees;
