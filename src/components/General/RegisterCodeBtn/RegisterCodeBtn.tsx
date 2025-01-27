import { FC } from 'react';
import { useDefaultPromotionState, usePreviewPage } from '@/hooks';
import { StyledLink } from './RegisterCodeBtn.styled';
import { Messages, PagePaths } from '@/constants';

const RegisterCodeBtn: FC = () => {
  const { isPreviewPage } = usePreviewPage();
  const defaultPromotionState = useDefaultPromotionState();

  return (
    <StyledLink
      to={PagePaths.code}
      state={defaultPromotionState}
      isPreviewPage={isPreviewPage}
    >
      {Messages.regCodeElementTitle}
    </StyledLink>
  );
};

export default RegisterCodeBtn;
