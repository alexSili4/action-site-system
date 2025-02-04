import { FC } from 'react';
import { IProps } from './FinishedPromoLabel.types';
import { Image } from './FinishedPromoLabel.styled';

const FinishedPromoLabel: FC<IProps> = ({ finishedPromoLabel }) => {
  return <Image src={finishedPromoLabel} />;
};

export default FinishedPromoLabel;
