import { FC } from 'react';
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';
import CabinetPageBreadcrumbs from '@GeneralComponents/CabinetPageBreadcrumbs';
import prizeImg from '@/images/userPrize/мультипіч.png';
import { Container, PrizeImg, PrizeImgWrap } from './UserPrizeBanner.styled';

const UserPrizeBanner: FC = () => {
  return (
    <Container>
      <CabinetPageBreadcrumbs addPageTitle='Приз' />
      <CabinetGoBackLink />
      <PrizeImgWrap>
        {/* TODO fix */}
        <PrizeImg src={prizeImg} alt='приз' />
      </PrizeImgWrap>
    </Container>
  );
};

export default UserPrizeBanner;
