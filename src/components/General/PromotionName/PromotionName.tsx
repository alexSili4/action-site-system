import { FC } from 'react';
import { Name } from './PromotionName.styled';
import { IProps } from './PromotionName.types';

const PromotionName: FC<IProps> = ({ name }) => {
  return <Name>{name}</Name>;
};

export default PromotionName;
