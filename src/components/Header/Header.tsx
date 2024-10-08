import { FC } from 'react';
import { StyledHeader } from './Header.styled';
import NavBar from '@/components/NavBar';
import { IProps } from './Header.types';
import Container from '@/components/Container';

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
