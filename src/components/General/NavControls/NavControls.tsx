import { FC } from 'react';
import { CabinetLink, Container, RegisterCodeBtn } from './NavControls.styled';
import { theme } from '@/constants';
import { IProps } from './NavControls.types';
import { PiUserBold } from 'react-icons/pi';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const NavControls: FC<IProps> = ({
  isRootPage,
  setRegisterCodeModalWinState,
  isFake = false,
}) => {
  const cabinetLinkUrl = `${
    import.meta.env.VITE_APP_SERVER_URL
  }/oidcauth?authclient=oidc`;

  const onRegisterCodeBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setRegisterCodeModalWinState();
  };

  return (
    <Container isRootPage={isRootPage} isFake={isFake}>
      <RegisterCodeBtn type='button' onClick={onRegisterCodeBtnClick}>
        Зареєструвати код
      </RegisterCodeBtn>
      <CabinetLink href={cabinetLinkUrl}>
        <PiUserBold size={theme.iconSizes.cabinet} />
      </CabinetLink>
    </Container>
  );
};

export default NavControls;
