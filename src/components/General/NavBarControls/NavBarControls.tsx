import { FC } from 'react';
import { Container, RegisterCodeBtn } from './NavBarControls.styled';
import { generalSettings, PagePaths, theme } from '@/constants';
import { IProps } from './NavBarControls.types';
import { PiUserBold } from 'react-icons/pi';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/store';
import { selectIsLoggedIn } from '@/store/auth/selectors';

const NavBarControls: FC<IProps> = ({
  isRootPage,
  setRegisterCodeModalWinState,
  isFake = false,
}) => {
  const isLoggedIn = useAuthStore(selectIsLoggedIn);
  const cabinetLinkContent = <PiUserBold size={theme.iconSizes.cabinet} />;
  const cabinetLink = isLoggedIn ? (
    <Link to={PagePaths.cabinet}>{cabinetLinkContent}</Link>
  ) : (
    <a href={generalSettings.authLink}>{cabinetLinkContent}</a>
  );

  const onRegisterCodeBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setRegisterCodeModalWinState();
  };

  return (
    <Container isRootPage={isRootPage} isFake={isFake}>
      <RegisterCodeBtn type='button' onClick={onRegisterCodeBtnClick}>
        Зареєструвати код
      </RegisterCodeBtn>
      {cabinetLink}
    </Container>
  );
};

export default NavBarControls;
