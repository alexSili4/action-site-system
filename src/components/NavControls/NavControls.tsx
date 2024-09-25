import { FC } from 'react';
import { CabinetLink, Container, RegisterCodeBtn } from './NavControls.styled';
import { PagePaths, theme } from '@/constants';
import { IProps } from './NavControls.types';
import { PiUserBold } from 'react-icons/pi';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const NavControls: FC<IProps> = ({
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
      <CabinetLink to={PagePaths.cabinet}>
        <PiUserBold size={theme.iconSizes.cabinet} />
      </CabinetLink>
    </Container>
  );
};

export default NavControls;
