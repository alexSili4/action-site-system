import { FC } from 'react';
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';
import { Container, PrizeImg, PrizeImgWrap } from './UserPrizeBanner.styled';
import { IProps } from './UserPrizeBanner.types';
import { useLocation } from 'react-router-dom';
import { CabinetState } from '@/types/cabinet.types';

const UserPrizeBanner: FC<IProps> = ({ prizeImg, prizeName }) => {
  const {
    state: { from },
  }: CabinetState = useLocation();

  return (
    <Container>
      <CabinetGoBackLink from={from} isShowOnDesk />
      <PrizeImgWrap>
        <PrizeImg src={prizeImg} alt={prizeName} />
      </PrizeImgWrap>
    </Container>
  );
};

export default UserPrizeBanner;
