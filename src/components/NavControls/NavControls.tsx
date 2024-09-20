import { FC } from 'react';
import { CabinetLink, Container, RegisterCodeBtn } from './NavControls.styled';
import { PagePaths, theme } from '@/constants';
import { IProps } from './NavControls.types';
import { PiUserBold } from 'react-icons/pi';

const NavControls: FC<IProps> = ({ isRootPage, isFake = false }) => {
  return (
    <Container isRootPage={isRootPage} isFake={isFake}>
      <RegisterCodeBtn type='button'>Зареєструвати код</RegisterCodeBtn>
      <CabinetLink to={PagePaths.cabinet}>
        <PiUserBold size={theme.iconSizes.cabinet} />
      </CabinetLink>
    </Container>
  );
};

export default NavControls;
