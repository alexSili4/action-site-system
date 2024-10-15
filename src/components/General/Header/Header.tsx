import { FC } from 'react';
import { StyledHeader } from './Header.styled';
import { IProps } from './Header.types';
import Container from '@GeneralComponents/Container';
import NavBar from '@GeneralComponents/NavBar';

const Header: FC<IProps> = ({
  isRootPage,
  isDesktop,
  setRegisterCodeModalWinState,
}) => {
  return (
    <StyledHeader>
      <Container>
        <NavBar
          isRootPage={isRootPage}
          isDesktop={isDesktop}
          setRegisterCodeModalWinState={setRegisterCodeModalWinState}
        />
      </Container>
    </StyledHeader>
  );
};

export default Header;
