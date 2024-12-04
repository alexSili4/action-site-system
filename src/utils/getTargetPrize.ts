import { IGetTargetPrizeProps } from '@/types/types';

const getTargetPrize = ({ prizeIdx, prizes }: IGetTargetPrizeProps) => {
  const isPrize = prizeIdx !== null;
  const targetPrize = isPrize ? prizes[prizeIdx] : null;

  return targetPrize;
};

export default getTargetPrize;
