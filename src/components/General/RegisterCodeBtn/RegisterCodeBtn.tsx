import { FC } from 'react';
import { usePreviewPage } from '@/hooks';
import { StyledLink } from './RegisterCodeBtn.styled';
import { Messages, PagePaths } from '@/constants';

const RegisterCodeBtn: FC = () => {
  const { isPreviewPage } = usePreviewPage();

  return (
    <StyledLink to={PagePaths.code} isPreviewPage={isPreviewPage}>
      {Messages.regCodeElementTitle}
    </StyledLink>
  );
};

export default RegisterCodeBtn;
