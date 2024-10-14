import { FC } from 'react';
import { IProps } from './PromotionPageBreadcrumbs.types';
import { PagePaths, SearchParamsKeys } from '@/constants';
import { getTranslatedPromotionsCategory } from '@/utils';
import { Link } from 'react-router-dom';
import {
  Container,
  DecorativeSymbol,
  Title,
} from './PromotionPageBreadcrumbs.styled';

const PromotionPageBreadcrumbs: FC<IProps> = ({
  promotionTitle,
  promotionCategory,
}) => {
  const promotionsPageLink = `${PagePaths.promotions}?${SearchParamsKeys.category}=${promotionCategory}`;
  const translatedPromotionCategory =
    getTranslatedPromotionsCategory(promotionCategory);

  return (
    <Container>
      <Link to={PagePaths.root}>Головна</Link>
      <DecorativeSymbol>/</DecorativeSymbol>
      <Link to={promotionsPageLink}>{translatedPromotionCategory}</Link>
      <DecorativeSymbol>/</DecorativeSymbol>
      <Title>{promotionTitle}</Title>
    </Container>
  );
};

export default PromotionPageBreadcrumbs;
