import { FC } from 'react';
import { IProps } from './RegisterCodeBanner.types';
import { Container, BannerWrap } from './RegisterCodeBanner.styled';

const RegisterCodeBanner: FC<IProps> = ({ bannerMobUrl, bannerDtUrl }) => {
  return (
    <Container>
      <BannerWrap
        bannerMobUrl={bannerMobUrl}
        bannerDtUrl={bannerDtUrl}
      ></BannerWrap>
    </Container>
  );
};

export default RegisterCodeBanner;
