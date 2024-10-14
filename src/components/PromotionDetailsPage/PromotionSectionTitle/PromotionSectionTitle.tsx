import { FC } from 'react';
import { Title } from './PromotionSectionTitle.styled';
import { IProps } from './PromotionSectionTitle.types';

const PromotionSectionTitle: FC<IProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default PromotionSectionTitle;
