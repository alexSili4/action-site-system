import { FC } from 'react';
import { Container, StyledLink } from './PromotionRegisterCodeLink.styled';
import { IProps } from './PromotionRegisterCodeLink.types';
import { PagePaths } from '@/constants';

const PromotionRegisterCodeLink: FC<IProps> = ({
  shouldShowTopSpacing = true,
}) => {
  return (
    <Container shouldShowTopSpacing={shouldShowTopSpacing}>
      <StyledLink to={PagePaths.code}>Зареєструвати код</StyledLink>
    </Container>
  );
};

export default PromotionRegisterCodeLink;
