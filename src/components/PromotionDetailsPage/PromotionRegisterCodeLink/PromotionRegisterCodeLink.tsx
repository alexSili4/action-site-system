import { FC } from 'react';
import { StyledLink } from './PromotionRegisterCodeLink.styled';
import { useRegisterCodeLink } from '@/hooks';
import { IProps } from './PromotionRegisterCodeLink.types';

const PromotionRegisterCodeLink: FC<IProps> = ({
  shouldShowTopMargin = true,
}) => {
  const registerCodeLink = useRegisterCodeLink();

  return (
    <StyledLink to={registerCodeLink} shouldShowTopMargin={shouldShowTopMargin}>
      Зареєструвати код
    </StyledLink>
  );
};

export default PromotionRegisterCodeLink;
