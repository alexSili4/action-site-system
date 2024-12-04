import { IGetTargetPartnerProps } from '@/types/types';

const getTargetPartner = ({ partnerIdx, partners }: IGetTargetPartnerProps) => {
  const isPartner = partnerIdx !== null;
  const targetPartner = isPartner ? partners[partnerIdx] : null;

  return targetPartner;
};

export default getTargetPartner;
