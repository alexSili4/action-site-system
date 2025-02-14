import { FC } from 'react';
import {
  Container,
  Image,
  ImgWrap,
  List,
  ListItem,
} from './PromotionPrizesBanner.styled';
import { IProps } from './PromotionPrizesBanner.types';
import { getFileUrl } from '@/utils';

const PromotionPrizesBanner: FC<IProps> = ({ prizes, logo }) => {
  const isLogo = Boolean(logo);

  return (
    <List>
      {prizes.map(
        (
          { gift: { images, banner, banner_mob: bannerMob, partner } },
          index
        ) => {
          const { logo: partnerLogo = '', name: partnerName } = partner ?? {};
          const { image = '' } = images[0] || {};

          const imageMobUrl = getFileUrl(bannerMob ?? image);
          const imageUrl = getFileUrl(banner ?? image);
          const partnerLogoUrl = getFileUrl(partnerLogo);

          return (
            <ListItem key={index}>
              <Container
                imageMobUrl={imageMobUrl}
                imageUrl={imageUrl}
                isLogo={isLogo}
              >
                <ImgWrap isLogo={isLogo}>
                  {isLogo && <Image src={partnerLogoUrl} alt={partnerName} />}
                  {isLogo ? (
                    logo
                  ) : (
                    <Image src={partnerLogoUrl} alt={partnerName} />
                  )}
                </ImgWrap>
              </Container>
            </ListItem>
          );
        }
      )}
    </List>
  );
};

export default PromotionPrizesBanner;
