import { FC } from 'react';
import { Container, StyledLink } from './PromotionRegisterCodeLink.styled';
import { IProps } from './PromotionRegisterCodeLink.types';
import { Messages, PagePaths } from '@/constants';
import { useDefaultPromotionState } from '@/hooks';

const PromotionRegisterCodeLink: FC<IProps> = ({
  shouldShowTopSpacing = true,
}) => {
  const defaultPromotionState = useDefaultPromotionState();

  return (
    <Container shouldShowTopSpacing={shouldShowTopSpacing}>
      <StyledLink to={PagePaths.code} state={defaultPromotionState}>
        {Messages.regCodeElementTitle}
      </StyledLink>
    </Container>
  );
};

export default PromotionRegisterCodeLink;
