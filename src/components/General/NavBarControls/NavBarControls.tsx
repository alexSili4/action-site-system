import { FC } from 'react';
import { Container, CabinetLink } from './NavBarControls.styled';
import { PagePaths, theme } from '@/constants';
import { IProps } from './NavBarControls.types';
import { PiUserBold } from 'react-icons/pi';
// components
import RegisterCodeBtn from '@GeneralComponents/RegisterCodeBtn';

const NavBarControls: FC<IProps> = ({
  isRootPage,
  isShowRegCodeLink,
  isFake = false,
}) => {
  return (
    <Container
      isRootPage={isRootPage}
      isFake={isFake}
      isShowRegCodeLink={isShowRegCodeLink}
    >
      {isShowRegCodeLink && <RegisterCodeBtn />}
      <CabinetLink to={PagePaths.cabinet}>
        <PiUserBold size={theme.iconSizes.cabinet} />
      </CabinetLink>
    </Container>
  );
};

export default NavBarControls;
