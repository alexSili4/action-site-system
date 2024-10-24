import { FC } from 'react';
import { Container, RegisterCodeBtn } from './NavBarControls.styled';
import { PagePaths, theme } from '@/constants';
import { IProps } from './NavBarControls.types';
import { PiUserBold } from 'react-icons/pi';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { Link } from 'react-router-dom';

const NavBarControls: FC<IProps> = ({
  isRootPage,
  setRegisterCodeModalWinState,
  isFake = false,
}) => {
  const onRegisterCodeBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setRegisterCodeModalWinState();
  };

  return (
    <Container isRootPage={isRootPage} isFake={isFake}>
      <RegisterCodeBtn type='button' onClick={onRegisterCodeBtnClick}>
        Зареєструвати код
      </RegisterCodeBtn>
      <Link to={PagePaths.cabinet}>
        <PiUserBold size={theme.iconSizes.cabinet} />
      </Link>
    </Container>
  );
};

export default NavBarControls;
