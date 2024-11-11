import { FC } from 'react';
import { StyledLink } from './PromotionRegisterCodeLink.styled';
import { useRegisterCodeLink } from '@/hooks';
import { IProps } from './PromotionRegisterCodeLink.types';

const PromotionRegisterCodeLink: FC<IProps> = ({ margin = true }) => {
  const registerCodeLink = useRegisterCodeLink();

  return (
    <StyledLink to={registerCodeLink} margin={margin}>
      Зареєструвати код
    </StyledLink>
  );
};

export default PromotionRegisterCodeLink;
