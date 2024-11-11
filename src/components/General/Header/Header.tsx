import { FC } from 'react';
import { StyledHeader } from './Header.styled';
import { IProps } from './Header.types';
import Container from '@GeneralComponents/Container';
import NavBar from '@GeneralComponents/NavBar';
import { useIsPromotionDetailsPage, useIsScrollingDown } from '@/hooks';

const Header: FC<IProps> = ({
  isRootPage,
  isDesktop,
  onRegisterCodeBtnClick,
}) => {
  const isPromotionDetailsPage = useIsPromotionDetailsPage();
  const isScrollingDown = useIsScrollingDown();

  return (
    <StyledHeader
      isPromotionDetailsPage={isPromotionDetailsPage}
      isScrollingDown={isScrollingDown}
    >
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
