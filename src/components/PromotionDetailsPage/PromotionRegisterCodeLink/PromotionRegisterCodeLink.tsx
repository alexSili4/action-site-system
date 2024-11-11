import { FC } from 'react';
import { StyledLink } from './PromotionRegisterCodeLink.styled';
import { useRegisterCodeLink } from '@/hooks';
import { IProps } from './PromotionRegisterCodeLink.types';

const PromotionRegisterCodeLink: FC<IProps> = ({ topMargin = true }) => {
  const registerCodeLink = useRegisterCodeLink();

  return (
    <StyledLink to={registerCodeLink} topMargin={topMargin}>
      Зареєструвати код
    </StyledLink>
  );
};

export default PromotionRegisterCodeLink;
