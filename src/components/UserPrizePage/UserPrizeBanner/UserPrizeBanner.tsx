import { FC } from 'react';
import { Container, PrizeImg, PrizeImgWrap } from './UserPrizeBanner.styled';
import { IProps } from './UserPrizeBanner.types';
// components
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';

const UserPrizeBanner: FC<IProps> = ({ prizeImg, prizeName }) => {
  return (
    <Container>
      <CabinetGoBackLink isShowOnDesk />
      <PrizeImgWrap>
        <PrizeImg src={prizeImg} alt={prizeName} />
      </PrizeImgWrap>
    </Container>
  );
};

export default UserPrizeBanner;
