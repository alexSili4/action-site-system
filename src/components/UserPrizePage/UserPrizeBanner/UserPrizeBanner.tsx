import { FC } from 'react';
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';
import prizeImg from '@/kitchen-machine.png';
import { Container, PrizeImg, PrizeImgWrap } from './UserPrizeBanner.styled';

const UserPrizeBanner: FC = () => {
  return (
    <Container>
      <CabinetGoBackLink isShowOnDesk />
      <PrizeImgWrap>
        {/* TODO fix */}
        <PrizeImg src={prizeImg} alt='приз' />
      </PrizeImgWrap>
    </Container>
  );
};

export default UserPrizeBanner;
