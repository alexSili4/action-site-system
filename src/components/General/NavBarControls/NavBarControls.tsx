import { FC } from 'react';
import {
  Container,
  RegisterCodeBtn,
  RegisterCodeLink,
  CabinetLink,
} from './NavBarControls.styled';
import { PagePaths, theme } from '@/constants';
import { IProps } from './NavBarControls.types';
import { PiUserBold } from 'react-icons/pi';
import { useRegisterCodeLink } from '@/hooks';

const NavBarControls: FC<IProps> = ({
  isRootPage,
  isPromotionDetailsPage,
  onRegisterCodeBtnClick,
  isFake = false,
}) => {
  const registerCodeLink = useRegisterCodeLink();
  const regCodeElementTitle = 'Зареєструвати код';
  const regCodeElement = isPromotionDetailsPage ? (
    <RegisterCodeLink to={registerCodeLink}>
      {regCodeElementTitle}
    </RegisterCodeLink>
  ) : (
    <RegisterCodeBtn type='button' onClick={onRegisterCodeBtnClick}>
      {regCodeElementTitle}
    </RegisterCodeBtn>
  );

  return (
    <Container isRootPage={isRootPage} isFake={isFake}>
      {regCodeElement}
      <CabinetLink to={PagePaths.cabinet}>
        <PiUserBold size={theme.iconSizes.cabinet} />
      </CabinetLink>
    </Container>
  );
};

export default NavBarControls;
