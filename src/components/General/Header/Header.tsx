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
  const { isScrollingDown, isScrolling } = useIsScrollingDown();

  const isTransparentHeader =
    (isPromotionDetailsPage && !isScrolling) ||
    (isPromotionDetailsPage && isScrollingDown);

  return (
    <StyledHeader
      isPromotionDetailsPage={isPromotionDetailsPage}
      isScrollingDown={isScrollingDown}
      isTransparentHeader={isTransparentHeader}
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
