import { FC } from 'react';
import { Container, CabinetLink } from './NavBarControls.styled';
import { PagePaths, theme } from '@/constants';
import { IProps } from './NavBarControls.types';
import { PiUserBold } from 'react-icons/pi';
import RegisterCodeBtn from '@GeneralComponents/RegisterCodeBtn';

const NavBarControls: FC<IProps> = ({
  isRootPage,
  onRegisterCodeBtnClickOnAllPages,
  onRegisterCodeBtnClickOnPromotionPage,
  isFake = false,
}) => {
  return (
    <Container isRootPage={isRootPage} isFake={isFake}>
      <RegisterCodeBtn
        onRegisterCodeBtnClickOnAllPages={onRegisterCodeBtnClickOnAllPages}
        onRegisterCodeBtnClickOnPromotionPage={
          onRegisterCodeBtnClickOnPromotionPage
        }
      />
      <CabinetLink to={PagePaths.cabinet}>
        <PiUserBold size={theme.iconSizes.cabinet} />
      </CabinetLink>
    </Container>
  );
};

export default NavBarControls;
