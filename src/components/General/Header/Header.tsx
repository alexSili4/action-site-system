import { FC } from 'react';
import { StyledHeader } from './Header.styled';
import { IProps } from './Header.types';
import Container from '@GeneralComponents/Container';
import NavBar from '@GeneralComponents/NavBar';

const Header: FC<IProps> = ({
  isPromotionDetailsPage,
  isRootPage,
  isDesktop,
  onRegisterCodeBtnClick,
}) => {
  return (
    <StyledHeader>
      <Container>
        <NavBar
          isRootPage={isRootPage}
          isDesktop={isDesktop}
          isPromotionDetailsPage={isPromotionDetailsPage}
          onRegisterCodeBtnClick={onRegisterCodeBtnClick}
        />
      </Container>
    </StyledHeader>
  );
};

export default Header;
