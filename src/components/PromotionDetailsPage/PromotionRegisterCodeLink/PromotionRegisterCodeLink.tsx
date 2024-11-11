import { FC } from 'react';
import { Container, StyledLink } from './PromotionRegisterCodeLink.styled';
import { useRegisterCodeLink } from '@/hooks';
import { IProps } from './PromotionRegisterCodeLink.types';

const PromotionRegisterCodeLink: FC<IProps> = ({
  shouldShowTopSpacing = true,
}) => {
  const registerCodeLink = useRegisterCodeLink();

  return (
    <Container shouldShowTopSpacing={shouldShowTopSpacing}>
      <StyledLink to={registerCodeLink}>Зареєструвати код</StyledLink>
    </Container>
  );
};

export default PromotionRegisterCodeLink;
