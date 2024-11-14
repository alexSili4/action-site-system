import { FC } from 'react';
import { StyledHeader } from './Header.styled';
import { IProps } from './Header.types';
import Container from '@GeneralComponents/Container';
import NavBar from '@GeneralComponents/NavBar';
import { useIsPromotionDetailsPage, useIsScrollingUp } from '@/hooks';

const Header: FC<IProps> = ({
  isRootPage,
  isDesktop,
  onRegisterCodeBtnClick,
}) => {
  const isPromotionDetailsPage = useIsPromotionDetailsPage();
  const { isScrollingUp, isScrolling } = useIsScrollingUp();

  const isMulticolorHeader =
    isPromotionDetailsPage && isScrolling && isScrollingUp;
  const shouldHideHeader = isPromotionDetailsPage && !isScrollingUp;

  return (
    <StyledHeader
      shouldHideHeader={shouldHideHeader}
      isMulticolorHeader={isMulticolorHeader}
      isPromotionDetailsPage={isPromotionDetailsPage}
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
